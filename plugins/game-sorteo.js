import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, participants }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()

if (command == 'topgays') {
let top = `*INICIANDO SORTEO*
    
*_El gandor del sorteo ${text} es:.- ${user(a)}_*`
m.reply(top, null, { mentions: [a]})
}
    
handler.help = handler.command = ['sorteo']
handler.tags = ['game']
handler.group = true
handler.register = false
export default handler  
