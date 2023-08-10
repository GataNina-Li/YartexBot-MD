let media = [imagen1, imagen2, imagen3].getRandom()
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*[ CUENTAS OFICIALES ]*
--------------------
🗃️ *GITHUB*
*${md}*
--------------------
💌 *INSTAGRAM*
*${ig}*
--------------------
🚀 *YOUTUBE*
*${yt}*
--------------------`

await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.tags = ['main']
handler.command = /^cuentasoficiales|cuentasofc|cuentas$/i
handler.exp = 35
handler.register = true
export default handler
