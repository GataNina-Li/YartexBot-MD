import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let botxd = `*🚀 Hola soy un bot*`
let vn = [imagen5, imagen6, imagen7, imagen8].getRandom()
let chat = global.db.data.chats[m.chat]
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : 2023, status: 1, surface : 1, message: 'Super WhatsApp Bot 🚀', orderTitle: 'Bang', thumbnail: fs.readFileSync('./storage/menus/Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
//const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}  
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendFile(m.chat, vn, 'bot.jpg', botxd, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })}
return !0
}
export default handler
