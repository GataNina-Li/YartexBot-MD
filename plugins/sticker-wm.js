import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*⚠️ RESPONDE A UN STICKER AL QUE QUIERE PONER UN NOMBRE*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*⚠️ RESPONDE A UN STICKER AL QUE QUIERE PONER UN NOMBRE*'
let img = await m.quoted.download()
if (!img) throw '*⚠️ RESPONDE A UN STICKER AL QUE QUIERE PONER UN NOMBRE*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*⚠️ INTENTE DE NUEVO*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler
