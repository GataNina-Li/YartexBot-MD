import { createHash } from 'crypto' 
let handler = async (m, { conn, text, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	 
if (!text) return conn.reply(m.chat, `🔖 *Falta su número de serie.*\n\n> 🩷 Puede usar el comando *${usedPrefix}numserie* para obtener su número de serie.`, m)
if (text !== sn) return conn.reply(m.chat, `💔 *Número de serie incorrecto.*\n\n> ✨ Puede usar el comando *${usedPrefix}numserie* para obtener su número de serie.`, m)
user.registered = false
user.OTP = "" 
m.react('✅') 
conn.sendMessage(m.chat, { text: `${dis}*Registro eliminado de ${packname}*\n\n> _Si desea hacer un nuevo registro use el comando._\n*${usedPrefix}verificar* \`nombre.edad\``, ...fake }, { quoted: m })
}
handler.command = /^(unreg|delregistro)$/i
handler.register = true
export default handler
