/* Créditos a https://github.com/AzamiJs */

/*const { uploadFile } = require('.../lib/uploadFile.js')
const { uploadImage } = require('.../lib/uploadImage.js')
const { uploadFile } from '.../lib/uploadFile.js'
const { uploadImage } from '.../lib/uploadImage.js'
const { fetch } = require('node-fetch')
const { fetch from } 'node-fetch'

let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*⚠️ RESPONDA A UNA IMAGEN*'
m.react(done)
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let info = ` *🗂️ ENLACE:*\n${link}
*⚖️ TAMAÑO:*\n${media.length} bytes\n
*🚀 EXPIRACION:*\n ${isTele ? '✅ NO EXPIRA' : '⚠️ DESCONOCIDO'}\n
*🔰 ACORTADO:*\n${await shortUrl(link)}`

conn.reply(m.chat, info, m, { contextInfo: {
externalAdReply :{
mediaUrl: ig, 
mediaType: 2,
title: wm,
body: azami,
thumbnail: await(await fetch(link)).buffer(),
sourceUrl: link
}}
})
}
handler.help = ['tourl']
handler.tags = ['convertido']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}*/

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ""
  if (!mime) throw "*⚠️ RESPONDA A UNA IMAGEN*"
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`*LINK:* ${link}`)
}
handler.help = ["tourl <reply image>"]
handler.tags = ["sticker"]
handler.command = /^(upload|tourl)$/i
export default handler
