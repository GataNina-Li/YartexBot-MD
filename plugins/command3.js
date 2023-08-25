let handler = async (m, { conn, usedPrefix }) => {
  let git = '🗿'
  let fake = { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '😾 Script', }}
  m.reply('a')
  await conn.sendUrl(m.chat, git, fake, m )
 
}

handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script'] 
handler.register = true 
export default handler
