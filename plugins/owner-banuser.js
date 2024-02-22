var handler = async (m, { conn, participants, usedPrefix, command }) => {

let BANtext = `🎌 *Etiquete a una persona*\n\nEjemplo, !${command} @${global.suittag}`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users

users[who].banned = true
m.reply('✅ *Usuario baneado con éxito*')

}
handler.tags = ['own']
handler.commnad = ['banuser']
handler.command = /^banuser$/i

handler.rowner = true

export default handler
