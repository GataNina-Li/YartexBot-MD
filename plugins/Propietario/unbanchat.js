let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*⚠️ ESTE CHAT FUE  DESBANEADO*\n\n*📑 AHORA ESTOY DISPONIBLE*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
export default handler
