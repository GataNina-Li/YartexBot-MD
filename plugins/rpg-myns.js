import { createHash } from 'crypto'

var handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
conn.sendButton(m.chat, '⬇️ *Su número de serie asignado es:* ⬇️', wm2, null, [], sn, null, m)  
}
handler.command = /^(myns|ceksn|ns|numserie)$/i
handler.register = true
export default handler
