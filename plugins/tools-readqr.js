import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

var handler = async (m, {conn, text, usedPrefix, command}) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) conn.reply(m.chat, '🚩 *Responda a un código QR*', m, fake, )
let img = await q.download?.()
let url = await uploadImage(img)
let anu = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=${lolkeysapi}&img=${url}`)
let json = await anu.json()

await conn.reply(m.chat, `🎌 *El Texto del Codigo QR Es:* ${json.result}`, m, fake, )
  
}
handler.help = ['readqr']
handler.tags = ['tools']
handler.command = /^(readqr)$/i

handler.limit = true
handler.register = true

export default handler
