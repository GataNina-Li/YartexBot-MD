import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
let handler = async (m, { groupMetadata, command, conn, participants }) => {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()

if (command == 'sorteo') {
let top = `*INICIANDO SORTEO*
    
*_El gandor del sorteo ${text} es:.- ${user(a)}_*`
m.reply(top, null, { mentions: [a]})
}
    
handler.help = handler.command = ['sorteo']
handler.tags = ['game']
handler.group = true
handler.register = true
export default handler  
