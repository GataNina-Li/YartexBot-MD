const yaoiImages = require('module-gatadios')

var handler = async (m, {conn, args, command, usedPrefix}) => {
  
const result1 = yaoiImages.getRandomImage('yaoi-hard', ['link'])
m.reply(result1.link)

}
handler.command = /^(yaoilink)$/i
export default handler
