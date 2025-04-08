var handler = async (m, { conn, usedPrefix, command}) => {

let reglas = `🐱 *Respeta las reglas de ꧁𓊈𒆜VÍCTOR BOT-MD 𒆜𓊉꧂*\n
⬡ No llamar
⬡ No hacer spam
⬡ Contacta al creador si es necesario
⬡ Pedir permiso para añadir el bot a un grupo

🚩 *Si no cumples con las reglas del bot, seras bloqueado. por el dueño del bot ꧁𓊈𒆜VÍCTOR BOT-MD 𒆜𓊉꧂*

*Puedes apoyarnos dejando una estrellita 🌟 al repositorio oficial de ꧁𓊈𒆜VÍCTOR BOT-MD 𒆜𓊉꧂.*

https://github.com/VICTOREMANUEL2022/YartexBot-MD-V-CTOR-BOT-MD-/tree/patch-1`.trim()
await conn.reply(m.chat, reglas, m, fake, )

}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp

handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
