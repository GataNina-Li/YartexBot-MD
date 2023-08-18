var handler = async (m, { conn, usedPrefix, command }) => { 

conn.reply(m.chat, `${wm}`, adReply, m)

}
handler.tags = ['pruebas']
handler.command = ['sendmessage', 'reply', 'sendfile']
handler.owner = true

export default handler
