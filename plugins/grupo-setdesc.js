var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
await conn.groupUpdateDescription(m.chat, text)
conn.reply(m.chat, `✅ *Se actualizo la descripción con éxito*`, m, fake, )
} else return conn.reply(m.chat, '🎌 *Ingrese la nueva descripción para el grupo*\n\nEjmplo, !setdesc Welcome to the group', m, fake, )

}
handler.help = ['setdesc']
handler.tags = ['grupo']
handler.command = /^set(desk)?(desc)$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
