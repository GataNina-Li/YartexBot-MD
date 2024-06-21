var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
if (isROwner) global.conn.bye = text
else if (isOwner) conn.bye = text
else global.db.data.chats.sBye = text
conn.reply(m.chat, '✅ *Configurado correctamente*', m, fake, )
} else return conn.reply(m.chat, '🎌 *Ingrese el texto que quiere que se envíe al salirse una persona*\n\nPuede usar @user para etiquetar', m, fake, )

}
handler.help = ['setbye']
handler.tags = ['grupo']
handler.command = /^setbye$/i

handler.group = true
handler.admin = true

export default handler
