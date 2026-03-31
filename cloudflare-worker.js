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
        // Cache everything at Cloudflare edge for 1 year
        cacheTtl: 31536000,
        cacheEverything: true,
        cacheKey: url.pathname,
      },
    });

    // Build response with CORS + cache headers
    const responseHeaders = new Headers(b2Response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    responseHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');

    return new Response(b2Response.body, {
      status: b2Response.status,
      statusText: b2Response.statusText,
      headers: responseHeaders,
    });
  },
};
