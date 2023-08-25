let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = 'a'
 await conn.sendUrl(m.chat, str, m, { 
   externalAdReply: { 
      mediaType: 1, 
      renderLargerThumbnail: true, 
      thumbnail: img2, 
      thumbnailUrl: imagen1, 
      title: 'A', 
   }})
}

handler.menu = ['tiktokslide <url>']
handler.tags = ['search']
handler.command = /^((a|a)a)$/i

handler.premium = true
handler.limit = true

export default handler
