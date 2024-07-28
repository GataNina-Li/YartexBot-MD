import { createHash } from 'crypto'

var handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
conn.sendButton(m.chat, `${dis}_Copie y pegue para eliminar su registro._`, wm2, null, null, [['ℕú𝕞𝕖𝕣𝕠 𝕕𝕖 𝕤𝕖𝕣𝕚𝕖 🦄', `${usedPrefix}delregistro ` + sn]], null, null, m)  
}
handler.command = /^(myns|ceksn|ns|numserie)$/i
handler.register = true
export default handler
