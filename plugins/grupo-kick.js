var handler = async (m, { conn, participants, usedPrefix, command }) => {

if (!m.mentionedJid[0] && !m.quoted) return conn.reply(m.chat, '🎌 *Etiquete o responda al mensaje de la persona que quiere eliminar*', m, fake, ) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender

await conn.groupParticipantsUpdate(m.chat, [user], 'remove')

}
handler.help = ['kick']
handler.tags = ['grupo']
handler.command = /^(kick|echar|hechar|sacar|ban)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
