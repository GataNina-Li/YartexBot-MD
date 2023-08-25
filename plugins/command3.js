let handler = async (m, { conn, usedPrefix }) => {
  let git = '🗿'
  m.reply('a')
 await conn.sendUrl(m.chat, git, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '◯◡┈━─◡◡┈◯◡◡┈━─◡┈◯\n᭡͡ᩬ🌵✩̣̣̣̣̣ͯ𝑪𝒖𝒓𝒊𝒐𝒔𝒊𝒕𝒚𝑩𝒐𝒕-𝑴𝑫᭡͡ᩬ🌵✩̣̣̣̣̣ͯ\n◯◡┈━─◡◡┈◯◡◡┈━─◡┈◯', }})
 
}

handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script'] 
handler.register = true 
export default handler
