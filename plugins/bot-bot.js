import fs from 'fs'

var handler = m => m
handler.all = async function (m) {

let bot = `*🚀 Hola soy Bot*\nEn que te puedo ayudar?`
let vn = [imagen1, imagen2, imagen3, imagen4, img1].getRandom()
let chat = global.db.data.chats[m.chat]
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendFile(m.chat, vn, 'bot.jpg', bot, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })}
return !0

}
export default handler
