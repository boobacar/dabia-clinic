// api/rum.js — minimal endpoint to receive Web Vitals beacons
export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(204).end();
    const text = await new Promise((resolve) => {
      let body = '';
      req.on('data', (c) => (body += c));
      req.on('end', () => resolve(body));
    });
    try {
      const json = JSON.parse(text || '{}');
      // Log to console (visible in server logs). Could be piped to an analytics store.
      console.log('[RUM]', json);
    } catch (e) {
      console.warn('[RUM] invalid json');
    }
    // cache disabled for beacons
    res.setHeader('Cache-Control', 'no-store');
    return res.status(204).end();
  } catch (e) {
    return res.status(204).end();
  }
}

