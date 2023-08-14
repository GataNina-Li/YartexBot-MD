let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
try {
await m.reply(wait)
let cofe = "https://coffee.alexflipnote.dev/random"
await conn.sendFile(m.chat, cofe, "", "*☕ Café ☕*", m)
} catch (e) {
throw eror
}}
handler.help = ["coffee"]
handler.tags = ["internet"]
handler.command = /^(coffee|cafe)$/i
handler.register = true

export default handler
