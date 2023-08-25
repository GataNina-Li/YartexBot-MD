let handler = async (m, { conn, usedPrefix }) => {
  let git = '🗿'
  m.reply('a')
  await conn.sendUrl(m.chat, git, fpay m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '😾 Script', }})
 
}

handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script'] 
handler.register = true 
export default handler
