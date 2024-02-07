import similarity from 'similarity'
const threshold = 0.72

var handler = m => m
handler.before = async function (m) {

let id = m.chat
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
this.tekateki = this.tekateki ? this.tekateki : {}
if (!(id in this.tekateki)) return conn.reply(m.chat, '🚩 *El acertijo ha terminado*', m, fake, )
if (m.quoted.id == this.tekateki[id][0].id) {
let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tekateki[id][2]
conn.reply(m.chat, `✅ *Respuesta correcta*\n+${this.tekateki[id][2]} Exp`, m, fake, )
m.react(done)
clearTimeout(this.tekateki[id][3])
delete this.tekateki[id]
} else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`*⚠️ CASI LO LOGRAS!*`)
else conn.reply(m.chat, '🚩 *Respuesta incorrecta*', m, fake, )}
m.react(error)
return !0

}
handler.exp = 0

export default handler
