import yaoiImages from 'module-gatadios'

var handler = async (m, {conn, args, command, usedPrefix}) => {
  
const result2 = yaoiImages.getRandomImage('yaoi-hard', ['author', 'name'])
m.reply(`Autor: ${result2.author}, Nombre: ${result2.name}`)

}
handler.command = /^(prueba23)$/i
export default handler
