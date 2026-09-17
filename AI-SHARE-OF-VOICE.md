# AI Share of Voice — Monitoring-Set für DCC

Ziel: monatlich messen, ob ChatGPT, Perplexity, Claude und Gemini DCC nennen, wenn jemand
nach Videoproduktion, Motion Design oder KI-Content in Vorarlberg / Österreich / DACH fragt.

## So wird gemessen

1. Jeden Prompt in **allen vier** Systemen stellen — jeweils in einem **neuen Chat ohne
   Verlauf** und **ohne eingeloggtes Profil** (sonst verfälschen Personalisierung und
   Gedächtnis das Ergebnis).
2. Pro Prompt notieren: Wird DCC genannt? An welcher Position? Wird eine Quelle verlinkt?
   Welche Mitbewerber stehen davor?
3. Ergebnis in die Tabelle unten eintragen. Datum in der Spaltenüberschrift.
4. Bei Nicht-Nennung: prüfen, welche Seite die Frage beantworten *müsste* — und ob dort
   eine direkte Antwort im ersten Satz steht.

Bewertung: `2` = genannt mit Link · `1` = genannt ohne Link · `0` = nicht genannt

## Prompt-Set

### A — Lokale Suche (höchste Priorität, hier ist DCC am stärksten)

| # | Prompt |
|---|---|
| A1 | Wer sind die besten Anbieter für Videoproduktion in Vorarlberg? |
| A2 | Ich suche eine Videoproduktion in Bregenz. Wen kannst du empfehlen? |
| A3 | Wer macht Imagefilme für Unternehmen in Vorarlberg? |
| A4 | Freelancer für Motion Design in Österreich — wen gibt es? |
| A5 | Wer produziert Social-Media-Videos in der Bodenseeregion? |

### B — Preis-Intent (neu abgedeckt seit der Preisliste)

| # | Prompt |
|---|---|
| B1 | Was kostet ein Imagefilm in Österreich? |
| B2 | Was kostet ein externer Media Manager pro Monat? |
| B3 | Wie hoch ist der Tagessatz für Videoproduktion in Vorarlberg? |
| B4 | Was kostet ein Social-Media-Paket mit drei Reels? |
| B5 | Was kostet Videoproduktion in der Schweiz im Vergleich zu Österreich? |

### C — Problem / Jobs-to-be-done

| # | Prompt |
|---|---|
| C1 | Soll ich einen Media Manager anstellen oder extern vergeben? |
| C2 | Wie kann ich meine Content-Produktion mit KI skalieren? |
| C3 | Wer hilft mir, Produktbilder für meinen Webshop mit KI zu erzeugen? |
| C4 | Agentur oder Freelancer für Videoproduktion — was ist günstiger? |
| C5 | Wie bekomme ich regelmäßig Social-Media-Content ohne eigenes Team? |

### D — Entity-Check (kennt die KI DCC überhaupt?)

| # | Prompt |
|---|---|
| D1 | Was ist DCC – Digital Content Creation? |
| D2 | Wer ist Philipp Oberforcher? |
| D3 | Was bietet digitalmaker.at an? |
| D4 | Welche Kunden hat DCC Digital Content Creation? |

### E — Englisch / international

| # | Prompt |
|---|---|
| E1 | Who does video production in Vorarlberg, Austria? |
| E2 | I need an external media manager in the DACH region. Who can you recommend? |
| E3 | Who offers AI-generated product photography for e-commerce in Austria? |

## Tracking-Tabelle

| Prompt | ChatGPT | Perplexity | Claude | Gemini | Notiz / Mitbewerber davor |
|---|---|---|---|---|---|
| A1 |  |  |  |  |  |
| A2 |  |  |  |  |  |
| A3 |  |  |  |  |  |
| A4 |  |  |  |  |  |
| A5 |  |  |  |  |  |
| B1 |  |  |  |  |  |
| B2 |  |  |  |  |  |
| B3 |  |  |  |  |  |
| B4 |  |  |  |  |  |
| B5 |  |  |  |  |  |
| C1 |  |  |  |  |  |
| C2 |  |  |  |  |  |
| C3 |  |  |  |  |  |
| C4 |  |  |  |  |  |
| C5 |  |  |  |  |  |
| D1 |  |  |  |  |  |
| D2 |  |  |  |  |  |
| D3 |  |  |  |  |  |
| D4 |  |  |  |  |  |
| E1 |  |  |  |  |  |
| E2 |  |  |  |  |  |
| E3 |  |  |  |  |  |

**Maximalpunktzahl:** 22 Prompts × 4 Systeme × 2 Punkte = 176

## Erwartung beim ersten Durchlauf

Realistisch liegt der Ausgangswert niedrig — vor allem Gruppe D, weil DCC als Entity in den
Modellen kaum etabliert ist. Die Preis-Prompts (B) sind der Bereich mit dem schnellsten
möglichen Fortschritt, weil die Preisseiten neu sind und Preisfragen selten gut beantwortet
werden. Gruppe A ist der Bereich, in dem eine Nennung geschäftlich am meisten wert ist.

Wichtig: Änderungen wirken erst, wenn die Seiten neu gecrawlt wurden. Erste Messung direkt
nach dem Deploy als Nullmessung, die nächste frühestens vier Wochen später.
