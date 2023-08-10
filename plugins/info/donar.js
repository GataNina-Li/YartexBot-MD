let media = './storage/menus/Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*「 🌟 DONAR 🌟 」*
---------------------
💙 *PAYPAL*
🩵 *${paypal}*
---------------------
👑 *Creador del bot*
💬 wa.me/59894808483`

await conn.sendFile(m.chat, media, 'Curiosity.jpg', str, fkontak)}
handler.tags = ['main']
handler.command = /^donar|donate|donasi$/i
handler.exp = 35
handler.register = true
export default handler
