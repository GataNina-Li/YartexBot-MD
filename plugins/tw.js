let { MessageType } = (await import('@whiskeysockets/baileys')).default 
import qrcode from 'qrcode'
import fs from 'fs'
import path from 'path'


let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {

let parent = args[0] && args[0] == 'plz' ? conn : global.conn

conn.on('qr', async qr => {
await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', wm, m)
})
 
m.reply(wm)

}
handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^jadi$/i

handler.premium = true

export default handler
                                       
