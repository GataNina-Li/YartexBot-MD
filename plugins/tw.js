let { MessageType } = (await import('@whiskeysockets/baileys')).default 
import qrcode from 'qrcode'
import fs from 'fs'
import path from 'path'

if (global.conns instanceof Array) console.log()
else global.conns = []

var handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {

let conn = new global.conn.constructor()
let parent = args[0] && args[0] == 'plz' ? conn : global.conn

conn.on('qr', async qr => {
await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', wm, m)
})
conn.welcome = global.conn.welcome + ''
conn.bye = global.conn.bye + ''
conn.spromote = global.conn.spromote + ''
conn.sdemote = global.conn.sdemote + ''
conn.handler = global.conn.handler.bind(conn)
conn.onDelete = global.conn.onDelete.bind(conn)
conn.onParticipantsUpdate = global.conn.onParticipantsUpdate.bind(conn)
conn.onGroupUpdate = global.conn.onGroupUpdate.bind(conn)
conn.onCall = global.conn.onCall.bind(conn)
conn.on('chat-update', conn.handler)
conn.on('message-delete', conn.onDelete)
conn.on('group-participants-update', conn.onParticipantsUpdate)
conn.on('group-update', conn.onGroupUpdate)
conn.on('CB:action,,call', conn.onCall)
conn.regenerateQRIntervalMs = null
 
m.reply(wm)

}
handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^jadi$/i

handler.premium = true

export default handler
                                       
