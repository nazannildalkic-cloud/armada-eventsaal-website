# ARMADA EVENTSAAL – Setup Anleitung
## Vollautomatisches System in 4 Schritten

---

## SCHRITT 1 — Formspree (Kontaktformular)

1. Gehe zu: https://formspree.io
2. Klick "Get Started Free" → mit Google anmelden
3. Klick "New Form" → Name: `Armada Demo`
4. Die Form-ID erscheint in der URL: `formspree.io/f/XXXXXXXX`
5. Diese ID in index.html eintragen:
   - Suche: `YOUR_FORM_ID`
   - Ersetze mit deiner ID, z.B.: `xabc1234`

---

## SCHRITT 2 — Calendly (Terminbuchung)

1. Gehe zu: https://calendly.com
2. Klick "Sign up free" → mit Google anmelden
3. Klick "+ New Event Type" → "One-on-One"
4. Name: `Besichtigungstermin`
5. Duration: 30 Minuten
6. Description: `Kostenlose Besichtigung der ARMADA Eventsäle in Hamburg`
7. Location: `ARMADA Eventsaal, Gründgensstraße 26, 22309 Hamburg`
8. Deinen Link kopieren, z.B.: `https://calendly.com/deinname/besichtigungstermin`
9. In index.html eintragen:
   - Suche: `https://calendly.com/armada-events/besichtigung`
   - Ersetze mit deinem Link

---

## SCHRITT 3 — Telegram Bot

1. Telegram öffnen (Handy oder Desktop)
2. Suche: `@BotFather`
3. Schreib: `/newbot`
4. Bot-Name: `Armada Briefing`
5. Bot-Username: `armada_briefing_bot` (oder ähnlich)
6. BotFather gibt dir einen Token: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`
7. Diesen Token notieren

### Bot-Chat-ID ermitteln:
1. Dein neuer Bot in Telegram öffnen
2. Schreib `/start`
3. Öffne im Browser: `https://api.telegram.org/bot[DEIN_TOKEN]/getUpdates`
4. Die "chat.id" aus der Antwort kopieren (z.B. `123456789`)

---

## SCHRITT 4 — Make.com Automation

1. Gehe zu: https://make.com
2. "Sign up free" → mit Google anmelden
3. Neues Szenario erstellen
4. Die Blueprint-Datei importieren: `make-blueprint.json` (liegt im Projektordner)
5. Deine Daten eintragen:
   - Formspree API Key
   - Telegram Bot Token
   - Telegram Chat ID
6. Zeitplan: Täglich 08:00 Uhr aktivieren

---

## NACH DEM SETUP — Was automatisch passiert:

✅ Besucher füllt Formular aus → E-Mail kommt sofort an
✅ Besucher bucht Calendly-Termin → Google Kalender Eintrag + E-Mail
✅ Jeden Morgen 08:00 → Telegram Briefing mit allen Terminen
✅ Ayla beantwortet alle Fragen 24/7 in 5 Sprachen

---

## Auf den Inhaber übertragen (später):

1. Formspree: Settings → Transfer Form → neue E-Mail eingeben
2. Calendly: Settings → Account → E-Mail ändern
3. Telegram: Bot bleibt gleich, nur Chat-ID anpassen
4. Make.com: Account exportieren oder neu anlegen
