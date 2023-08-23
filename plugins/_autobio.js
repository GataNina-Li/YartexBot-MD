let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	let chat = global.db.data.chats[m.chat]
	if (chat.autoBio) {
	if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime);
		let bio = `🚀 Aktif selama ${uptime}\nJava Mode: ${global.opts['self'] ? 'Private' : setting.self ? 'Private' : global.opts['gconly'] ? 'Hanya Grup' : 'Public'}\n${htjava} 🥀 By ${author}`
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1
	}
}

}
export default handler
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Hari ️', h, ' Jam ', m, ' Menit ', s, ' Detik '].map(v => v.toString().padStart(2, 0)).join('')
}

/*let handler = m => m
handler.all = async function (m) {
let setting = global.db.data.settings[this.user.jid]
	
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 300000)
}) * 300000
}
let muptime = clockString(_muptime)
let bio = `🥏 Soy ${cb} | ⏰ Activo durante: ${muptime}\n\n | 🎨 Creado por Azami `
await this.updateProfileStatus(bio).catch(_ => _)
setting.status = new Date() * 1

}
export default handler

function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [d, ' Día(s) ️', h, ' Hora(s) ', m, ' Minuto(s)'].map(v => v.toString().padStart(2, 0)).join('')
}*/
