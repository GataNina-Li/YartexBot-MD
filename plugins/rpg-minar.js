var handler = async (m, { conn, isPrems}) => {

let hasil = Math.floor(Math.random() * 1000)
let info = `*Genial minaste ${hasil} XP ✨*`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return conn.reply(m.chat, `*⏰ Debes esperar ${msToTime(time - new Date())} para volver a minar*`, m, fake, ) 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🍁 CuriosityBot-MD 🍁*', 'status@broadcast')
m.react('⛏️')   

//global.db.data.users[m.sender].lastmiming = new Date * 1
  
}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine']

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
