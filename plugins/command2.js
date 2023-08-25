let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = '🍧 CuriosityBot-MD'
 await conn.sendUrl(m.chat, str, m, { 
   externalAdReply: { 
      mediaType: 1, 
      renderLargerThumbnail: true, 
      thumbnail: img1, 
      thumbnailUrl: img1, 
      title: '🍓 Azami', 
   }})
}

handler.menu = ['tiktokslide <url>']
handler.tags = ['search']
handler.command = /^((a|a)a)$/i

handler.premium = true
handler.limit = true

export default handler
