let foto = img
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `🍍 𝗕𝘂𝘁𝘁𝗼𝗻 𝗧𝗲𝘀𝘁 🥳🍓`
await conn.sendButton(m.chat, text, `👋🏻 ¡Hola! ` + nombre, foto, [
['🚩 Menu Completo', '!allmenu'],
['♨️ Script Bot', '!sc'],
['❤️ Propietario', '#owner'],
['🌼 Hablar Al  Bot', '!bot Hola']], null, [
['🌏 Canal Curiosity', `${channel}`]], m)}

handler.command = /^(prueba|mprueba|button)$/i

export default handler;