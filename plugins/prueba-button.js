let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let text = `🔥 𝗕𝘂𝘁𝘁𝗼𝗻 𝗧𝗲𝘀𝘁 🐈🚀`
await conn.sendButton(m.chat, text, `👋🏻 ¡Hola! ` + nombre, foto, [
['☄️ 𝗠𝗲𝗻𝘂 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗼 💫', '!allmenu'],
['🔥 𝗦𝗰𝗿𝗶𝗽𝘁 🍁', '!sc'],
['❤️ 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 💖', '#owner'],
['🌼 𝗕𝗼𝘁 🗒️', '!bot Hola']], null, [
['🚩 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 🏝️', `${channel}`]], m)}

handler.command = /^(prueba|mprueba|button)$/i

export default handler;