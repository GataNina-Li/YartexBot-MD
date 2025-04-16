var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (!text) return conn.reply(m.chat, '🎌 *Ingrese el nuevo nombre del grupo*\n\nEjmplo, !setname Curiosity', m, fake, )
await conn.groupUpdateSubject(m.chat, text)
conn.reply(m.chat, `🚩 ${text ? `${text} *es el nuevo nombre de este grupo*` : '*No pusieron un nombre*'}`, m, fake, )
 
}
handler.help = ['setname']
handler.tags = ['grupo']
handler.command = /^setname$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
