var handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*⚠️ RESPONDE CON ${usedPrefix + command} AL AUDIO QUE DESEEA CONVERTIR EN VIDEO*`
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw `*⚠️ RESPONDE CON ${usedPrefix + command} AL AUDIO QUE DESEEA CONVERTIR EN VIDEO*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', '*AQUI ESTA TU VIDEO ✨*', m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['convertidores']
handler.command = /^to(mp4|v(ideo)?)$/i
handler.diamond = true
handler.register = true
export default handler
