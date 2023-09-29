var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (!text) throw '*⚠️ QUE NOMBRE PONGO AL GRUPO?*'
await conn.groupUpdateSubject(m.chat, text)
m.reply(`⚠️ ${text ? `${text}` : 'Ninguno'} *es el nuevo nombre de este grupo.*`)
 
}
handler.help = ['setname']
handler.tags = ['grupo']
handler.command = /^setname$/i
handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler