var handler = async (m, { conn, text, usedPrefix, command }) => {

let poin = 500

if (!text) return conn.reply(m.chat, `🎌 *Seleccione piedra/papel/tijera*\n\nEjemplo, !${command} papel`, m, fake, )

var astro = Math.random()

if (astro < 0.34) {
astro = 'piedra'
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera'
} else {
astro = 'papel'
}

if (text == astro) {
global.db.data.users[m.sender].exp += 100
conn.reply(m.chat, `🚩 *Empate*\n\nTú: ${text}\nEl Bot: ${astro}\n\n🎁 Puntos (±)100 XP ✨`, m, fake, )
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 300
conn.reply(m.chat, `🎌 *Ganaste*\n\nTú: ${text}\nEl Bot: ${astro}\n\n🎁 Puntos +${poin} XP ✨`, m, fake, )
} else {
global.db.data.users[m.sender].exp -= 300
conn.reply(m.chat, `🚩 *Perdiste*\n\nTú: ${text}\nEl Bot: ${astro}\n\n Puntos -${poin} XP ✨`, m, fake, )
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 500
conn.reply(m.chat, `🎌 *Ganaste*\n\nTú: ${text}\nEl Bot: ${astro}\n\n🎁 Puntos +${poin} XP ✨`, m, fake, )
} else {
global.db.data.users[m.sender].exp -= 150
conn.reply(m.chat, `🚩 *Perdiste*\n\nTú: ${text}\nEl Bot: ${astro}\n\n Puntos -${poin} XP ✨`, m, fake, )
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 600
conn.reply(m.chat, `🚩 *Perdiste*\n\nTú: ${text}\nEl Bot: ${astro}\n\n Puntos -${poin} XP ✨`, m, fake, )
} else {
global.db.data.users[m.sender].exp -= 300
conn.reply(m.chat, `🚩 *Perdiste*\n\nTú: ${text}\nEl Bot: ${astro}\n\n Puntos -${poin} XP ✨`, m, fake, )
}
} else {
return conn.reply(m.chat, `🎌 *Seleccione piedra/papel/tijera*\n\nEjemplo, !${command} papel`, m, fake, )
}

}
handler.help = ['ppt']
handler.tags = ['juegos']
handler.command = ['ppt']

handler.register = true

export default handler
