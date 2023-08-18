var handler = async (m, { conn, usedPrefix, command }) => { 

conn.reply(m.chat, `${wm}`, adReply, m)

handler.help = ['toimg (reply)']
handler.tags = ['convertido']
handler.command = ['sendmessage', 'reply', 'sendfile']
handler.owner = true

export default handler
