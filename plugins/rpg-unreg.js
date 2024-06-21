let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]
  
user.registered = false
m.reply(`*📇 USTED YA NO ESTÁ REGISTRADO*`)

}
handler.command = ['unreg']
handler.register = true
export default handler
