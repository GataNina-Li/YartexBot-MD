let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

  let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'Curiosity', "h": `Hmm`,'seconds': '99999', 'ig': 'true', 'caption': '𖥔.𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨❞ ✨', 'jpegThumbnail': imagen1 }}}

  if (!text) throw `⚠️ *Ingrese el link de un grupo de WhatsApp.*`
  let [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw '❎ El link es invalido'
  let res = await conn.groupAcceptInvite(code)
  
  await m.reply(`*Haciendo cositas malas >:) . . .*`)
 await conn.relayMessage(res, {extendedTextMessage:{text: 'ㅤㅤㅤㅤ c ᥙ ɾ і օ𝃛 s і ƚ ყ ㅤㅤㅤ\n╭━─͓̽━─͓̽━─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽\nhttps://chat.whatsapp.com/LCAUbkf5kUz7jSxO6FADMU\n╰━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽\n\n🍓͔⃛͢ 🄴᭢ꪶꪖᨶꫀక ˸ 🅲ꪊꪹỉꪮకỉᡶꪗ\n╭━─͓̽━─͓̽━─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽\nhttps://chat.whatsapp.com/B8RJAm16U2EISSDETrPivq\n╰━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽─━͓̽', contextInfo: { externalAdReply: { showAdAttribution: true, title: `𖥔.🌺 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚 𝐞𝐬𝐭𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬❞`, body: wm, sourceUrl: yt, thumbnail: imagen1 }, mentionedJid: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }}}, { quoted: liveLoc })
  
  await conn.groupLeave(res)
  
  await m.reply(`*Ya se spameo el grupo :D*`)
}

handler.help = ['spam']
handler.tags = ['owner']
handler.command = ['spamgp'] 

handler.owner = true

export default handler
