let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document'] 
 var document = doc[Math.floor(Math.random() * doc.length)]     
 let texto1 = `*https://github.com/AzamiJs/CuriosityBot-MD*`
  let texto = { 
 'document': { url: `https://github.com/AzamiJs` }, 
 'mimetype': `application/${document}`, 
 'fileName': `CuriosityBot-MD`, 
 'fileLength': 99999999999999, 
 'pageCount': 200, 
 'contextInfo': { 
 'forwardingScore': 200, 
 'isForwarded': true, 
 'externalAdReply': { 
 'mediaUrl': md, 
 'mediaType': 2, 
 'previewType': 'pdf', 
 'title': ``, 
 'body': global.azami, 
 'thumbnail': global.img3, 
 'sourceUrl': 'https://wa.me/593' }}, 
 'caption': texto1, 
 'footer': '\n🍧😸', 
 'headerType': 6 }
 conn.sendMessage(m.chat, texto, { quoted: m })}
  m.reply('a')
  
}
handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script'] 
handler.register = true 
export default handler
