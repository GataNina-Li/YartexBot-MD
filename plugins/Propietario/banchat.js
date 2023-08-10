let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`*⚠️ ESTE CHAT FUE BANEADO*\n\n*📑 NO ESTARE DISPONIBLE HASTA QUE SEA DESBANEADO*`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.botAdmin = true
handler.admin = true 
handler.group = true

export default handler
