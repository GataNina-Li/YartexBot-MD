import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw `*⚠️ INGRESE UN TEXTO*\n\n💡 EJEMPLO\n*${usedPrefix + command} Curiosity*`
m.react(done)
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `📍 *Resultado de:* ${text}
🔎 *Buscado en:* Google`, fliveLoc, m) 
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['dl']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
handler.register = true
export default handler
