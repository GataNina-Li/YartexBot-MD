import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

var handler = async(m, { conn, text, usedPrefix, command }) => {

if (command == 'fakeloc') {
const perfil_sc = await conn.profilePictureUrl(m.sender, "image").catch(_ => "https://i.pinimg.com/564x/da/4b/9b/da4b9b9a26146c50c951410d9d2f1037.jpg")
let msg = await generateWAMessageFromContent(m.chat, { locationMessage: { degreesLatitude: 0, degreesLongitude: 0, name: 'Github del bot', address: 'By Azami', url: md, isLive: true, accuracyInMeters: 0, speedInMps: 0, degreesClockwiseFromMagneticNorth: 2, comment: 'Hola', jpegThumbnail: imagen3 }}, { quoted: m })

conn.relayMessage(m.chat, msg.message, {})
}

if (command == 'fake2img') {
conn.sendMessage(m.chat, {image: imagen1, caption: wm, mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen2, "mediaUrl": global.nn, "sourceUrl": global.nn}}}, {quoted: fproducto})
}
 
if (command == 'sendurl') {
let str = '*🍧 CuriosityBot-MD*'
await conn.sendUrl(m.chat, str, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '🍓 Azami', }})
}

if (command == 'fgif') {
conn.reply(m.chat, wm, fgif)
}

if (command == 'fgclink') {
conn.reply(m.chat, wm, fgclink)
}

if (command == 'fdocs') {
conn.reply(m.chat, wm, fdocs)
}

if (command == 'ftoko') {
conn.reply(m.chat, wm, ftoko)
}

if (command == 'fimg') {
conn.reply(m.chat, wm, fimg)
}

if (command == 'ftextt') {
conn.reply(m.chat, wm, ftextt)
}

}
handler.help = ['listafakes']
handler.tags = ['bot']
handler.command = /^(fake2img|fakeloc|sendurl|fgif|fgclink)|fdocs|ftoko|fimg|ftextt$/i

handler.rowner = true

export default handler
