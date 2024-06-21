import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()

conn.sendPresenceUpdate('composing', m.chat)

let media = await (uploader)(buffer)
let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()

conn.sendMessage(m.chat, { text: json.result }, { quoted: m })

} else return conn.reply(m.chat, `*🎌 Manda una imagen con el comando y el texto a buscar*\n\nEjemplo, !bardimg dame información sobre lo que aparece en la imagen`, m, fake, )

}
handler.help = ['bardimg']
handler.tags = ['ai']
handler.command = /^(bardimg|bardimage)$/i

handler.limit = true

export default handler
