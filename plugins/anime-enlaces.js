var handler = async m => 

m.reply(` 
┏━━━━━━━━━━━━━━━━━━━━┅
┇                   *「 ANIME」*       
┣━━━━━━━━━━━━━━━━━━━━┅
┃ ❖ https://kusonime.com
┃ ❖ https://huntersekaisub.blogspot.com
┃ ❖ https://riie.jp
┃ ❖ https://m.meownime.ai
┃ ❖ https://meownime.ltd
┃ ❖ https://nimegami.id
┃ ❖ https://animekompi.cam
┃ ❖ https://nontonanimeid.top
┃ ❖ https://kazefuri.vip
┃ ❖ https://pendekarsubs.us
┃ ❖ https://myanimelist.net
┗━━━━━━━━━━━━━━━━━━━━┅
 `.trim())
 
 handler.help = ['animelink']
 handler.tags = ['anime']
 handler.command = /^animelink$/i
 
 handler.limit = true
 
 export default handler 