async function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {

let user = a => '@' + a.split('@')[0]
if (!text) return conn.reply(m.chat, `🚩 *Ejemplo de uso*\n!${command} texto`, m, fake, )
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let k = Math.floor(Math.random() * 70)
let vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`
let top = `*${user(a)}* Acaba de ganar el sorteo, felicitaciones`
let txt = ''
let count = 0

await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {quoted: m} )

}
handler.help = ['sorteo']
handler.command = ['sorteo']
handler.tags = ['juegos']
handler.group = true
handler.admin = true

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
