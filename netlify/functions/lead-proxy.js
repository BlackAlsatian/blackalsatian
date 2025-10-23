// Netlify Function: lead-proxy
// Purpose: Hide backend domain by proxying lead submissions server-side.
// Env: Set BACKEND_DOMAIN in Netlify environment (DO NOT prefix with GATSBY_)

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

exports.handler = async (event) => {
  // CORS for same-origin; adjust if needed
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
  }

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method Not Allowed' }) }
  }

  const backend = process.env.BACKEND_DOMAIN
  if (!backend) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: 'BACKEND_DOMAIN not configured' }) }
  }

  let payload
  try {
    payload = JSON.parse(event.body || '{}')
  } catch {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  try {
    const resp = await fetch(`${backend.replace(/\/$/, '')}/api/leads`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const text = await resp.text()
    const body = (() => { try { return JSON.parse(text) } catch { return { ok: true } } })()

    return {
      statusCode: resp.status,
      headers: { 'Content-Type': 'application/json', ...cors },
      body: JSON.stringify(body),
    }
  } catch (e) {
    return {
      statusCode: 502,
      headers: cors,
      body: JSON.stringify({ error: 'Upstream error', message: e && e.message }),
    }
  }
}
