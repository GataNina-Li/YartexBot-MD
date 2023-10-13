var handler = async (m, { conn, args, text, usedPrefix, command }) => {

if (!m.isGroup) return m.reply(mess.group) 
if (!isBotAdmins) return m.reply(mess.botAdmin) 
if (!isGroupAdmins) return m.reply(mess.admin) 
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await conn.groupRequestParticipantsUpdate(m.chat, users, 'approve')
}


handler.help = ['aprobar']
handler.tags = ['grupo']
handler.command = /^(aprueba|aprobar|acepta|aceptar|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
