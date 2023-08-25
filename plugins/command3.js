let handler = async (m, { conn, usedPrefix }) => {
  m.reply('a')

handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script'] 
handler.register = true 
export default handler
