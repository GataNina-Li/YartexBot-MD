var handler = async (m, {conn, text}) => {

let user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
let bant = `🎌 *Etiquete a una persona*\n\nEjemplo, !${command} @${global.suittag}`
if (!text) return conn.reply(m.chat, bant, m, { mentions: [user] })
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return conn.reply(m.chat, bant, m, { mentions: [user] })
let users = global.db.data.users

users[who].banned = false
conn.reply(m.chat, `✅ *Se desbaneo al usuario ${text} con éxito*`, m, { mentions: [user] })

}
handler.help = ['unbanuser']
handler.tags = ['own']
handler.command = /^unbanuser$/i

handler.rowner = true

export default handler
