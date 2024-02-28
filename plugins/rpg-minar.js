var handler = async (m, { conn, isPrems}) => {

let user = global.db.data.users[m.sender]
let gold = `${pickRandom([1, 5, 7, 8])}` * 1
let iron = `${pickRandom([5, 6, 7, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80])}` * 1
let gold = `${pickRandom([20, 5, 7, 8, 88, 40, 50])}` * 1
let hasil = Math.floor(Math.random() * 1000)
let info = `*Genial minaste ${hasil} XP ✨*

💚 *Emerald*: ${emerald}
🔩 *Iron*: ${iron}
🏅 *Gold*: ${gold}
`

//let time = global.db.data.users[m.sender].lastmiming + 600000
//if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return conn.reply(m.chat, `*⏰ Debes esperar ${msToTime(time - new Date())} para volver a minar*`, m, fake, )
if (user.health < 80) return conn.reply(m.chat, `🚩 *Requiere al menos 80 de Salud para la minería*

> 🛍️ Compra
${readMore}
_Compré Healths escribiendo !buy potion <cantidad>_

> Ejemplo, !buy potion 5

_Escribe !heal <cantidad> para usar pociones_

> Ejemplo, !healts 5`, m, fake, )

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🍁 CuriosityBot-MD 🍁*', 'status@broadcast')
m.react('⛏️')

user.health -= 10
user.iron += iron
user.gold += gold
user.emerald += emerald 
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
