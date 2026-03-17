// Netlify Scheduled Function – Tägliches Morning Briefing via Telegram
// Läuft täglich um 9:00 Uhr (Europe/Berlin = 8:00 UTC im Sommer, 7:00 UTC im Winter)
// Sendet: Besucherzahlen (gestern) + heutige Calendly-Termine

const { schedule } = require('@netlify/functions');

async function sendTelegramMessage(token, chatId, text) {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown'
    })
  });
  return res.json();
}

async function getCalendlyEvents(apiKey) {
  if (!apiKey) return [];
  try {
    // Erst User-URI holen
    const userRes = await fetch('https://api.calendly.com/users/me', {
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' }
    });
    const userData = await userRes.json();
    const userUri = userData?.resource?.uri;
    if (!userUri) return [];

    // Heutige Events abrufen
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toISOString();

    const eventsRes = await fetch(
      `https://api.calendly.com/scheduled_events?user=${encodeURIComponent(userUri)}&min_start_time=${startOfDay}&max_start_time=${endOfDay}&status=active`,
      { headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' } }
    );
    const eventsData = await eventsRes.json();
    return eventsData?.collection || [];
  } catch (e) {
    console.error('Calendly API error:', e);
    return [];
  }
}

async function getVisitorCount(siteId, netlifyToken) {
  // Netlify Analytics API – Besucherzahlen von gestern
  if (!siteId || !netlifyToken) return null;
  try {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const from = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate()).getTime();
    const to = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate() + 1).getTime();

    const res = await fetch(
      `https://analytics.services.netlify.com/v2/${siteId}/visitors?from=${from}&to=${to}&timezone=Europe/Berlin&resolution=day`,
      { headers: { 'Authorization': `Bearer ${netlifyToken}` } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    // data.data ist ein Array mit {count, ...}
    if (data?.data?.length > 0) return data.data[0].count;
    return null;
  } catch (e) {
    console.error('Netlify Analytics error:', e);
    return null;
  }
}

const handler = async function(event) {
  const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const CALENDLY_API_KEY = process.env.CALENDLY_API_KEY;
  const NETLIFY_SITE_ID = process.env.SITE_ID; // Netlify stellt SITE_ID automatisch bereit
  const NETLIFY_TOKEN = process.env.NETLIFY_ACCESS_TOKEN;

  if (!TOKEN || !CHAT_ID) {
    return { statusCode: 500, body: 'Telegram config missing' };
  }

  // Datum formatieren
  const now = new Date();
  const berlinTime = now.toLocaleString('de-DE', { timeZone: 'Europe/Berlin', weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });

  // 1. Besucherzahlen
  const visitors = await getVisitorCount(NETLIFY_SITE_ID, NETLIFY_TOKEN);
  let visitorText = '📊 *Besucher gestern:* ';
  if (visitors !== null) {
    visitorText += `${visitors} Besucher`;
  } else {
    visitorText += '_Daten nicht verfügbar_';
  }

  // 2. Calendly Termine heute
  const events = await getCalendlyEvents(CALENDLY_API_KEY);
  let terminText = '📅 *Termine heute:* ';
  if (events.length === 0) {
    terminText += 'Keine Termine heute';
  } else {
    terminText += `${events.length} Termin(e)\n`;
    events.forEach(function(ev, i) {
      const start = new Date(ev.start_time).toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit'
      });
      const name = ev.name || 'Termin';
      terminText += `  ${i + 1}. ⏰ ${start} Uhr — ${name}\n`;
    });
  }

  // 3. Briefing zusammenbauen
  const briefing = [
    `☀️ *ARMADA Morning Briefing*`,
    `📆 ${berlinTime}`,
    ``,
    visitorText,
    ``,
    terminText,
    ``,
    `🌐 [Website öffnen](https://armada-eventsaal.netlify.app)`,
    `📊 [Netlify Dashboard](https://app.netlify.com/projects/armada-eventsaal)`
  ].join('\n');

  await sendTelegramMessage(TOKEN, CHAT_ID, briefing);

  return { statusCode: 200, body: 'Briefing sent' };
};

// Täglich um 8:00 UTC = 9:00 CET (Winter) / 10:00 CEST (Sommer)
// Für 9:00 CEST (Sommerzeit) → 7:00 UTC
exports.handler = schedule('0 7 * * *', handler);
