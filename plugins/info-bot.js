import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let bot = `*🚀 Hola soy Bot*\nEn que te puedo ayudar?`
let vn = [imagen1, imagen2, imagen3, imagen4, img1].getRandom()
let chat = global.db.data.chats[m.chat]
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : 2023, status: 1, surface : 1, message: 'Super WhatsApp Bot 🚀', orderTitle: 'Bang', thumbnail: fs.readFileSync('./storage/menus/Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}  
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendFile(m.chat, vn, 'bot.jpg', bot, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })}
return !0
}
export default handler
