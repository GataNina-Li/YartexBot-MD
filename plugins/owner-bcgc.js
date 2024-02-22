var handler = async (m, { conn, isROwner, text }) => {

let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
if(!pesan) return conn.reply(m.chat, '🚩 *Ingresé el texto que quiere que trámite*', m, fake, )

for (let i of anu) {
await delay(9000 * 1)
conn.relayMessage(i, { liveLocationMessage: { degreesLatitude: 35.685506276233525, degreesLongitude: 139.75270667105852, accuracyInMeters: 0, degreesClockwiseFromMagneticNorth: 2, caption: '『 *BROADCAST* 』\n\n' + pesan + '\n\n*💌 Esto Es Un Comunicado Oficial*', sequenceNumber: 2, timeOffset: 3, contextInfo: m, }}, {}).catch(_ => _)
}
conn.reply(m.chat, `📑 *Mensaje enviado a ${anu.length} grupo/s*`, m, fake, )

}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['own']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
