var handler = async (m, { conn, isPrems}) => {

let user = global.db.data.users[m.sender]
let hasil = Math.floor(Math.random() * 1000)
let info = `*Genial minaste ${hasil} XP ✨*
iron : ${hasil}
Gold : ${hasil}`

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
user.iron += hasil
user.gold += hasil
//global.db.data.users[m.sender].lastmiming = new Date * 1
  
}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine']

handler.owner = true
handler.fail = null
handler.register = true

export default handler

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
