var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
if (isROwner) global.conn.bye = text
else if (isOwner) conn.bye = text
else global.db.data.chats.sBye = text
m.reply('*✅ LA DESPEDIDA SE A CONFIGURADO CORRECTAMENTE*')
} else throw '*⚠️ INGRESE EL TEXTO QUE QUIERE QUE ENVIE AL SALIRSE UNA PERSONA*\n\n*❕ Puede usar @user para etiquetar*'

}
handler.help = ['setbye']
handler.tags = ['grupo']
handler.command = /^setbye$/i
handler.group = true
handler.admin = true

export default handler