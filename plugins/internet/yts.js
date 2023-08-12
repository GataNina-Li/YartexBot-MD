import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `*⚠️ ESCRIBA EL NOMBRE DE UN VIDEO O UN CANAL DE YOUTUBE*`, fkontak,  m)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `📑 *TÍTULO:* ${v.title}
🔗 *ENLACE:* ${v.url}
⏰ *DURACIÓN:* ${v.timestamp}
🔎 *SUBIDO:* ${v.ago}
👀 *VISTAS:* ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')
conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i
handler.register = true
