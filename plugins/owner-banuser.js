let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `*⚠️ ETIQUETE A UNA PERSONA*\n\n💡 EJEMPLO\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*☑️ EL USUARIO FUE BANEADO CON EXITO☑️*\n\n😔 ☑️EL USUARIO NO PODRA USAR CURIOSITY BOT☑️')    }
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
