import db from '../lib/database.js'

var handler = async (m, { conn, text }) => {

let user = global.db.data.users[m.sender]
if (!text) return conn.reply(m.chat, `🎌 *Por favor coloque su motivo para estar afk*\n\nEjemplo, !afk Voy a comer*`, m, fake, )
if (text.length < 10) return conn.reply(m.chat, `🚩 *El motivo es muy corto, minimo 10 carácteres*`, m, fake, )
user.afk = + new Date
user.afkReason = text
conn.reply(m.chat, `🚩 *Estado Afk*
 
Estarás afk hasta que envíes un mensaje

👤 *Usuario:* @${m.sender.split`@`[0]} 
👀 *Razón:* ${text ? ': ' + text : ''} `, m, { mentions: [m.sender]})

}
handler.help = ['afk']
handler.tags = ['rg']
handler.command = ['afk']

handler.register = true

export default handler
