let handler = async (m, { conn, text, usedPrefix }) => {
let user = global.db.data.users[m.sender]
user.registered = false
m.react('✅') 
conn.sendMessage(m.chat, { text: `${dis}*Registro eliminado de ${packname}*\n\n> _Si desea hacer un nuevo registro use el comando_\n*${usedPrefix}verificar* \`nombre.edad\``, ...fake }, { quoted: m })
}
handler.command = /^(unreg|delregistro)$/i
handler.register = true
export default handler
