var handler = m => m
handler.all = async function (m) {

let bot = `*🚀 Hola soy Bot*\nEn que te puedo ayudar?`
let chat = global.db.data.chats[m.chat]

if (/^bot$/i.test(m.text) && !chat.isBanned) {

conn.sendPresenceUpdate('composing', m.chat)    
conn.reply(m.chat, bot, fake, )}

return !0

}
export default handler
