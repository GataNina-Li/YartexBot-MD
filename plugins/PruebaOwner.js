var handler = async (m, { text,  usedPrefix, command }) => {


//conn.reply(m.chat, 'Zam', m, fake, )
  await conn.reply(m.chat, '*Test*', { contextInfo:{ forwardingScore: 2022, isForwarded: true, channel: channel, externalAdReply: {title: '👋 Hola!!', body: saludo, sourceUrl: global.ig, thumbnailUrl: ppBot }}})
m.react('🚀') 

}
handler.command = ['ts']

handler.premium = false

export default handler
