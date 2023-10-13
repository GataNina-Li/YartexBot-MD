// 𝐂𝐨́𝐝𝐢𝐠𝐨 𝐡𝐞𝐜𝐡𝐨 𝐲 𝐚𝐝𝐚𝐩𝐭𝐚𝐝𝐨 𝐩𝐨𝐫 @Kimdanbot-MD
//https://github.com/Kimdanbot-MD

var handler = async (m, { conn, args, text, usedPrefix, command }) => {

if (!text) return m.reply (` ejemplo: ${usedPrefix + command} numero`)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await conn.groupRequestParticipantsUpdate(m.chat, users, 'approve')

}
handler.help = ['aprobar']
handler.tags = ['grupo']
handler.command = /^(aprueba|aprobar|acepta|aceptar|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
