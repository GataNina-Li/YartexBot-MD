import yaoiImages from 'module-gatadios'

var handler = async (m, {conn, args, command, usedPrefix}) => {
  
const result2 = yaoiImages.getRandomImage('yaoi-hard')
m.reply(`${result2}`)

}
handler.command = /^(prueba23)$/i
export default handler
