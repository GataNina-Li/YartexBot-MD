/*import { createHash } from 'crypto'
let handler = async function (m, { args, command }) {

if (command == 'unregister' || command == 'unreg') {
if (!args[0]) throw `*⚠️ INGRESE SU NÚMERO DE SÉRIE, SI NO SABE CUAL ES USE #myns*`
let user = global.db.data.users[m.sender]
var sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
if (args[0] !== sn) throw `*⚠️ VERIFIQUE QUE SU NÚMERO DE SÉRIE SEA CORRECTO*`
user.registered = false
m.reply(`*📇 USTED YA NO ESTÁ REGISTRADO*`)
}

if (command == 'sn' || command == 'myns') {
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', '⬇️ *Este es su número de serie* ⬇️', 'status@broadcast')
}

}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['rg']
handler.command = /^unreg(ister)|myns|ns?$/i
handler.register = true
export default handler*/
