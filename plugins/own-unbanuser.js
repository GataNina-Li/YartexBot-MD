var handler = async (m, {conn, text}) => {

let user, bant

user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bant = `🎌 *Etiquete a una persona*\n\nEjemplo, !${command} @${global.suittag}`
if (!text) return conn.reply(m.chat, bant, m, { mentions: [user] })
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw "*⚠️ INGRESA EL @tag DE ALGUN USUARIO*"
let users = global.db.data.users

users[who].banned = false
conn.reply(m.chat, `*Se desbaneo al usuario ${text} con éxito*`, m, { mentions: [text] })

}
handler.help = ['unbanuser']
handler.tags = ['own']
handler.command = /^unbanuser$/i

handler.rowner = true

export default handler
