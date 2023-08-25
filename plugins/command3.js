let handler = async (m, { conn, usedPrefix }) => {
 let git = '*乂  B O T  -  S C R I P T*\nhttps://github.com/AzamiJs/CuriosityBot-MD'
 await conn.sendUrl(m.chat, git, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '\t\t\t\t\t\t᭡͡ᩬ🍁✩̣̣̣̣̣ͯ𝑪𝒖𝒓𝒊𝒐𝒔𝒊𝒕𝒚𝑩𝒐𝒕-𝑴𝑫᭡͡ᩬ🌵✩̣̣̣̣̣ͯ', }})
 
}

handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script'] 
handler.register = true 
export default handler
