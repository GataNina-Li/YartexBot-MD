let handler = async (m, {
conn,
isOwner,
usedPrefix,
command,
args
}) => {
try {
await m.reply(wait)
let cofe = "https://coffee.alexflipnote.dev/random"
await conn.sendFile(m.chat, cofe, "", "*☕ Random Café ☕*", m)
} catch (e) {
throw eror
}}
handler.help = ["coffee"]
handler.tags = ["search"]
handler.command = /^(coffee)$/i

export default handler
