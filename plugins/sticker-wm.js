import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '⚠️ 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗔𝗟 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘 𝗣𝗢𝗡𝗘𝗥 𝗨𝗡 𝗡𝗢𝗠𝗕𝗥𝗘'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*⚠️ 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗔𝗟 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘 𝗣𝗢𝗡𝗘𝗥 𝗨𝗡 𝗡𝗢𝗠𝗕𝗥𝗘*'
let img = await m.quoted.download()
if (!img) throw '*⚠️ 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗔𝗟 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘 𝗣𝗢𝗡𝗘𝗥 𝗨𝗡 𝗡𝗢𝗠𝗕𝗥𝗘*'
stiker = await addExif(img, packname || wm, author || wm)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '⚠️ 𝐈𝐍𝐓𝐄𝐍𝐓𝐄 𝐃𝐄 𝐍𝐔𝐄𝐕𝐎'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler
