// Cloudflare Worker: media.digitalmaker.at → Backblaze B2 Proxy
// Löst das Host-Header Problem & cached alles an Cloudflare Edge

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
          'Access-Control-Allow-Headers': 'Range',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Proxy to Backblaze B2 with correct Host header
    const b2Url = `https://dcc-media-at.s3.eu-central-003.backblazeb2.com${url.pathname}${url.search}`;

    const b2Response = await fetch(b2Url, {
      method: request.method,
      headers: {
        // Pass through Range header for video seeking
        ...(request.headers.get('Range') && { Range: request.headers.get('Range') }),
      },
      cf: {
        // Cache successful responses at Cloudflare edge for 1 year — never errors,
        // otherwise a file requested before its upload stays a 404 for a year
        cacheEverything: true,
        cacheTtlByStatus: { '200-299': 31536000, '300-599': -1 },
        // Full URL (minus query string) so "Purge by URL" in the dashboard matches
        cacheKey: `${url.origin}${url.pathname}`,
      },
    });

    // Build response with CORS + cache headers
    const responseHeaders = new Headers(b2Response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    responseHeaders.set('Cache-Control', b2Response.ok
      ? 'public, max-age=31536000, immutable'
      : 'no-store');

    return new Response(b2Response.body, {
      status: b2Response.status,
      statusText: b2Response.statusText,
      headers: responseHeaders,
    });
  },
};
