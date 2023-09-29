var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
if (isROwner) global.conn.welcome = text
else if (isOwner) conn.welcome = text
else global.db.data.chats.sWelcome = text
m.reply('*✅ LA BIENVENIDA SE A CONFIGURADO CORRECTAMENTE*')
} else throw '*⚠️ INGRESE EL TEXTO QUE QUIERE QUE ENVIE AL UNIRSE UNA PERSONA*\n\n*❕ Puede usar @user para etiquetar*'

}
handler.help = ['setwelcome']
handler.tags = ['grupo']
handler.command = /^setwelcome$/i
handler.group = true
handler.admin = true

export default handler