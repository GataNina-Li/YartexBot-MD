import yaoiImages from 'module-gatadios'

var handler = async (m, {conn, args, command, usedPrefix}) => {
  
const result1 = yaoiImages.getRandomImage('yaoi-hard.json', ['link'])
m.reply(result1)

}
handler.command = /^(prueba23)$/i
export default handler
