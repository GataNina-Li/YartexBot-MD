var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
await conn.groupUpdateDescription(m.chat, text)
m.reply(`*✅ SE A CAMBIADO LA DESCRIPCIÓN*`)
} else throw '*⚠️ QUE DESCRIPCIÓN PONGO?*'

}
handler.help = ['setdesc']
handler.tags = ['grupo']
handler.command = /^set(desk)?(desc)$/i
handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler