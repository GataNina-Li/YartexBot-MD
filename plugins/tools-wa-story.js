const handler = async (m, { conn }) => {
if ("status@broadcast" != m.quoted?.chat) return conn.reply(m.chat, "*Por favor, responde a un estado de WhatsApp para descargar su contenido*", m) 

try {
let buffer = await m.quoted?.download()
await conn.sendFile(m.chat, buffer, "", m.quoted?.text || "", null, false, { quoted: m })
} catch (e) {
console.log(e)
await conn.reply(m.chat, m.quoted?.text, m)
}}

handler.command = /^((sw|status)(dl|download)|(dl|download)(sw|status))$/i
export default handler
