import fetch from 'node-fetch'

var handler = (m, { text }) => m
handler.before = async (m, { text }) => {

let bot = global.db.data.settings[mconn.conn.user.jid]
let Prefijo = false
const prefixRegex = global.prefix
if (prefixRegex.test(m.text)) Prefijo = true

if (bot.bard && !m.isGroup && !Prefijo && !m.fromMe && m.text !== '') {
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return

conn.sendPresenceUpdate('composing', m.chat)
let api = await fetch(`https://aemt.me/bard?text=${text}`)
let res = await api.json()

await m.reply(res.result)}

return true

}
export default handler

