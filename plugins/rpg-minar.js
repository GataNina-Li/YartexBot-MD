var handler = async (m, { conn, isPrems}) => {

let user = global.db.data.users[m.sender]
let diamond = `${pickRandom([20, 5, 7, 8, 88, 40, 50, 70, 90, 999, 300])}` * 1; let emerald = `${pickRandom([1, 5, 7, 8])}` * 1; let iron = `${pickRandom([5, 6, 7, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80])}` * 1; let gold = `${pickRandom([20, 5, 7, 8, 88, 40, 50])}` * 1; let coal = `${pickRandom([20, 5, 7, 8, 88, 40, 50, 80, 70, 60, 100, 120, 600, 700, 64])}` * 1; let stone = `${pickRandom([200, 500, 700, 800, 900, 4000, 300])}` * 1

let hasil = Math.floor(Math.random() * 1000)
let info = `⛏️ *Te has adentrando en lo profundo de las cuevas*

> 🌱 Obtuviste estos recursos

✨ *Exp*: ${hasil}
💎 *Diamante*: ${diamond}
💚 *Esmeralda*: ${emerald}
🔩 *Hierro*: ${iron}
🏅 *Oro*: ${gold}
🕋 *Carbón*: ${coal}
🪨 *Piedra*: ${stone}`

//let time = global.db.data.users[m.sender].lastmiming + 600000
//if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return conn.reply(m.chat, `*⏰ Debes esperar ${msToTime(time - new Date())} para volver a minar*`, m, fake, )
if (user.pickaxe < 0) return conn.reply(m.chat, `🚩 *Requiere al menos un pico para la minería*\n\n> 🛍️ Compra\n_Compré un pico con !buy pickaxe_`, m, fake, )
if (user.pickaxedurability < 10) return conn.reply(m.chat, `🚩 *El pico esta muy roto*\n\n> ⚙️ Reparar\n${readMore}\n_Repara tu pico con !repair pico_`, m, fake, )
if (user.health < 80) return conn.reply(m.chat, `🚩 *Requiere al menos 80 de Salud para la minería*

> 🛍️ Compra
${readMore}
_Compré Healths escribiendo !buy potion <cantidad>_

> Ejemplo, !buy potion 5

_Escribe !heal <cantidad> para usar pociones_

> Ejemplo, !healts 5`, m, fake, )

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🌳 *Mining - CuriosityBot* 🌳', 'status@broadcast' )
m.react('⛏️')

user.health -= 10
user.pickaxedurability -= 50
user.diamond += diamond 
user.iron += iron
user.gold += gold
user.emerald += emerald
user.coal += coal
user.stone += stone
//global.db.data.users[m.sender].lastmiming = new Date * 1
  
}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine']

handler.owner = true
handler.fail = null
handler.register = true

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}
