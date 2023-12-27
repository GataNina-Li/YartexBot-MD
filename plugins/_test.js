import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

var handler  = async (m, { conn, usedPrefix }) => {

let img = sityImg.getRandom()
let info = `Sí, estoy aquí Azami`

const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
degreesLatitude: 0,
degreesLongitude: 0,
accuracyInMeters: 0,
speedInMps: 0,
degreesClockwiseFromMagneticNorth: 0,
caption: info,
sequenceNumber: 0,
timeOffset: 8600,
thumbnailUrl: img, 
contextInfo: { mentionedJid: [m.sender] }
}}, { quoted: fake })

return conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })

}
handler.customPrefix = /^(tes|bot|curio|test)$/i
handler.command = new RegExp

export default handler
