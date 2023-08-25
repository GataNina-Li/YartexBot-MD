let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document'] 
 var document = doc[Math.floor(Math.random() * doc.length)]     
 let texto1 = `*https://github.com/AzamiJs/CuriosityBot-MD*`
  
  m.reply('a')
  
}
handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script'] 
handler.register = true 
export default handler
