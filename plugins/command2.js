let str = 'a'
 await conn.sendUrl(m.chat, str, m, { 
   externalAdReply: { 
      mediaType: 1, 
      renderLargerThumbnail: true, 
      thumbnail: img2, 
      thumbnailUrl: imagen1, 
      title: 'A', 
   }})
