import { createHash } from 'crypto'

let handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]
  
user.registered = false
m.reply(`*📇 USTED YA NO ESTÁ REGISTRADO*`)

}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['rg']
handler.command = /^unreg(ister)|myns|ns?$/i
handler.register = true
export default handler
