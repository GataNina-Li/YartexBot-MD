var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
if (isROwner) global.conn.welcome = text
else if (isOwner) conn.welcome = text
else global.db.data.chats.sWelcome = text

conn.reply(m.chat, '✅ *La bienvenida se a configurado*', m, fake, )
} else return conn.reply(m.chat, '🎌 *Ingrese el texto que quiere que envie al unirse una persona*\n\nPuede usar @user para etiquetar', m, fake, )
}
handler.help = ['setwelcome']
handler.tags = ['grupo']
handler.command = /^setwelcome$/i

handler.group = true
handler.admin = true

export default handler
