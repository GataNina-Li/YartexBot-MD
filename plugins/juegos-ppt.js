var handler = async (m, { conn, text, usedPrefix, command }) => {

let poin = 500
let reseqv = `*⚠️ SELECCIONE PIEDRA/PAPEL/TIJERA*\n\n❕ EJEMPLO:\n*${usedPrefix + command}* papel`
if (!text) throw reseqv
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
m.reply(`🤡 *EMPATE*\n\nTú : ${text}\nEl Bot : ${astro}\n\n🎁 Puntos (±)100 XP`)
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 300
m.reply(`🎊 *GANASTE* 🎊\n\nTú : ${text}\nEl Bot : ${astro}\n\n🎁 Puntos *+${poin} XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`🤯 *PERDISTE* 🤯\n\nTú : ${text}\nEl Bot : ${astro}\n\n Puntos *-${poin} XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 500
m.reply(` 🎊 *GANASTE* 🎊\n\nTú : ${text}\nEl Bot : ${astro}\n\n🎁 Puntos *+${poin} XP*`)
} else {
global.db.data.users[m.sender].exp -= 150
m.reply(`🤯 *PERDISTE* 🤯\n\nTú : ${text}\nEl Bot : ${astro}\n\nPuntos *-${poin} XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 600
m.reply(`🎊 *GANASTE* 🎊\n\nTú : ${text}\nEl Bot : ${astro}\n\n🎁 Puntos *+${poin} XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`🤯 *PERDISTE* 🤯\n\nTú : ${text}\nEl Bot : ${astro}\n\nPuntos *-${poin} XP*`)
}
} else {
throw reseqv
}

}
handler.help = ['ppt']
handler.tags = ['juegos']
handler.command = ['ppt'] 
handler.register = true

export default handler