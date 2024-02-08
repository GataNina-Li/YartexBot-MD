var handler = m => m
handler.before = async function (m) {

if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
let id = m.chat
if (!m.quoted || !m.quoted.fromMe || !m.text || !/^🧮 Cuanto es/i.test(m.quoted.text)) return !0
this.math = this.math ? this.math : {}
if (!(id in this.math)) return conn.reply(m.chat, '🚩 *El juego expiró*', m, fake, )
if (m.quoted.id == this.math[id][0].id) {
let math = JSON.parse(JSON.stringify(this.math[id][1]))
if (m.text == math.result) {
global.db.data.users[m.sender].exp += math.bonus
clearTimeout(this.math[id][3])
delete this.math[id]
conn.reply(m.chat, `✅ *Respuesta correcta!*\n\n‣ Ganaste : *+${math.bonus} XP* ✨`, m, fake, )
} else {
if (--this.math[id][2] == 0) {
clearTimeout(this.math[id][3])
delete this.math[id]
conn.reply(m.chat, `🚩 *Las oportunidades se han agotado*\n\nRespuesta : *${math.result}*`, m, fake, )
} else conn.reply(m.chat, `⚠️ *La respuesta no coincide*\n\nTienes ${this.math[id][2]} oportunidades`, m, fake, )
}}
return !0
}

export default handler
