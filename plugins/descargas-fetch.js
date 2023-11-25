import fetch from 'node-fetch'
import { format } from 'util'
import path from 'path'

var handler = async (m, { text, conn, usedPrefix, command }) => {

if (!text) {
return m.reply(`*⚠️ INGRESA EL ENLACE DE UNA PÁGINA*`)
}

if (!/^https?:\/\//.test(text)) {
text = 'http://' + text;
} else if (/^https:\/\//.test(text)) {
text = text;
}

let _url = new URL(text)
let url = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'APIKEY')

let maxRedirects = 999999;
let redirectCount = 0;
let redirectUrl = url;

while (redirectCount < maxRedirects) {
let res = await fetch(redirectUrl);

if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
res.body.destroy()
throw `Content-Length: ${res.headers.get('content-length')}`
}

const contentType = res.headers.get('content-type')

let filename = path.basename(new URL(redirectUrl).pathname);

if (/^image\//.test(contentType)) {
conn.sendFile(m.chat, redirectUrl, filename, text, m)
} else if (/^text\//.test(contentType)) {
let txt = await res.text()
m.reply(txt.slice(0, 65536) + '')
conn.sendFile(m.chat, Buffer.from(txt), 'file.txt', null, m)
} else if (/^application\/json/.test(contentType)) {
let txt = await res.json()
txt = format(JSON.stringify(txt, null, 2))
m.reply(txt.slice(0, 65536) + '')
conn.sendFile(m.chat, Buffer.from(txt), 'file.json', null, m)
} else if (/^text\/html/.test(contentType)) {
let html = await res.text()
conn.sendFile(m.chat, Buffer.from(html), 'file.html', null, m)
} else {
conn.sendFile(m.chat, redirectUrl, filename, text, m)
}

if (res.status === 301 || res.status === 302 || res.status === 307 || res.status === 308) {
let location = res.headers.get('location')
if (location) {
redirectUrl = location;
redirectCount++;
} else {
break
}
} else {
break
}
}
if (redirectCount >= maxRedirects) {
throw `*⚠️ DEMASIADAS REDIRECCIONES* (máx: ${maxRedirects})`;
}

}
handler.help = ['fetch', 'get']
handler.tags = ['internet']
handler.command = /^(fetch|get)$/i

export default handler
