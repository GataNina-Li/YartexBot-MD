let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
const grupo = `https://chat.whatsapp.com/B8RJAm16U2EISSDETrPivq`
let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'CuriosityBot-MD', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': 'Unirte a mi grupo ^~^', 'jpegThumbnail': false }}}
try {
  if (!text) throw `⚠️ *Ingrese el link de un grupo de WhatsApp.*`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw '❎ El link es invalido'
  let res = await conn.groupAcceptInvite(code)
  //await m.reply(`${JSON.stringify(res, null, 1)}`)
  await m.reply(`*Haciendo cositas malas >:) . . .*`)
  //await conn.sendMessage(res, { text: grupo, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fliveLoc })
  //await conn.sendMessage(res, { text: grupo, mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fliveLoc })
  await conn.relayMessage(res, {extendedTextMessage:{text: 'Mario.js', contextInfo: { externalAdReply: { showAdAttribution: true, title: `Mario`, body: wm, sourceUrl: yt, thumbnail: ig }, mentionedJid: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }}}, { quoted: fakegif })
  await conn.groupLeave(res)
  await m.reply(`*Ya se spameo el grupo :D*`)
} catch (e) {
await m.reply(`ERROR 404 :v`) 
}}
handler.help = ['spamgp']
handler.tags = ['owner']
handler.command = ['spamgp'] 

handler.owner = true

export default handler
