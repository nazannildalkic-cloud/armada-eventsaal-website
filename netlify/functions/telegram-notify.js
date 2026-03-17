// Netlify Serverless Function – Telegram Besucherbenachrichtigung
// Bot-Token wird als Umgebungsvariable gespeichert (nicht im Frontend!)
exports.handler = async function(event) {
  // Nur POST erlauben
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TOKEN || !CHAT_ID) {
    return { statusCode: 500, body: 'Server config missing' };
  }

  try {
    const data = JSON.parse(event.body);
    const msg = `🌐 *Neuer Besucher auf ARMADA Website*\n📅 ${data.time || 'unbekannt'}\n📱 Gerät: ${data.device || 'unbekannt'}\n🔗 Seite: ${data.page || 'unbekannt'}\n↩️ Herkunft: ${data.ref || 'Direktaufruf'}\n🌍 Sprache: ${data.lang || 'unbekannt'}`;

    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: msg, parse_mode: 'Markdown' })
    });

    return { statusCode: 200, body: 'OK' };
  } catch (e) {
    return { statusCode: 500, body: 'Error' };
  }
};
