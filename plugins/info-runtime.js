import { performance } from 'perf_hooks'
import osu from 'node-os-utils'

var handler = async(m, { conn, command, usedPrefix}) => {

try {

let NotDetect = 'Not Detect'
let old = performance.now()
let cpu = osu.cpu
let cpuCore = cpu.count()
let drive = osu.drive
let mem = osu.mem
let netstat = osu.netstat
let OS = osu.os.platform()
let cpuModel = cpu.model()
let cpuPer
let p1 = cpu.usage().then(cpuPercentage => { cpuPer = cpuPercentage }).catch(() => { cpuPer = NotDetect })
let driveTotal, driveUsed, drivePer
let p2 = drive.info().then(info => { driveTotal = (info.totalGb + ' GB'), driveUsed = info.usedGb, drivePer = (info.usedPercentage + '%') }).catch(() => { driveTotal = NotDetect, driveUsed = NotDetect, drivePer = NotDetect })
let ramTotal, ramUsed
let p3 = mem.info().then(info => { ramTotal = info.totalMemMb, ramUsed = info.usedMemMb }).catch(() => { ramTotal = NotDetect, ramUsed = NotDetect })
let netsIn, netsOut
let p4 = netstat.inOut().then(info => { netsIn = (info.total.inputMb + ' MB'), netsOut = (info.total.outputMb + ' MB') }).catch(() => { netsIn = NotDetect, netsOut = NotDetect })
await Promise.all([p1, p2, p3, p4])
await conn.reply(m.chat, `_Probando ${command }..._`, m)
let _ramTotal = (ramTotal + ' MB')
let neww = performance.now()
        

var txt = `\t\t\t\t\t*「 Estado 」*

*OS* : ${OS}
*CPU Model* : ${cpuModel}
*CPU Core* : ${cpuCore} Centro
*CPU* : ${cpuPer}%
*Ram* : ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})
*Drive* : ${driveUsed} / ${driveTotal} (${drivePer})
*Ping* : ${Math.round(neww - old)} ms
*Internet IN* : *${netsIn}
*Internet OUT* : *${netsOut}`

conn.relayMessage(m.chat, { extendedTextMessage:{ text: txt, contextInfo: { externalAdReply: { title: '', mediaType: 1, previewType: 0, renderLargerThumbnail: true, thumbnailUrl: 'https://telegra.ph/file/ec8cf04e3a2890d3dce9c.jpg', sourceUrl: '' }}, mentions: [m.sender] }}, {})

console.log(OS)
} catch (e) {
console.log(e)
conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, )}

}
handler.help = ['estado', 'status']
handler.tags = ['bot']
handler.command = /^status|statusbot|botstatus|estado$/i

handler.register = true

export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ ms, h, m, s })
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
