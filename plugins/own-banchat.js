let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `✅ *Este chat fue baneado con éxito*`, m, fake, )

}
handler.help = ['banchat']
handler.tags = ['own']
handler.command = /^banchat$/i

handler.botAdmin = true
handler.admin = true 
handler.group = true

export default handler
