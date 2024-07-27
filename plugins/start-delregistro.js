let handler = async (m, { conn, text, usedPrefix }) => {
let user = global.db.data.users[m.sender]
user.registered = false
conn.reply(m.chat, `${dis}*Ha eliminado su registro de ${packname}*\n\n> _Si desea hacer un nuevo registro use el comando_\n*${usedPrefix}verificar* \`nombre.edad\``, fake)
}
handler.command = /^(unreg|delregistro)$/i
handler.register = true
export default handler
