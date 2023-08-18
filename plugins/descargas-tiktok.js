import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `*⚠️ INGRESE UN LINK DE TIKTOK*\n\n💡 EJEMPLO:\n${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`
if (!args[0].match(/tiktok/gi)) throw `*⚠️ VERIFICA QUE EL LINK SEA CORRECTO*`
m.react(rwait)
//m.reply('*🚀 C A R G A N D O*')
const { key } = await conn.sendMessage(m.chat, {text: `*C A R G A N D O*《 █▒▒▒▒▒▒▒▒▒▒▒》10%`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `*C A R G A N D O*《 ███████▒▒▒▒▒》50%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `*C A R G A N D O*《 ██████████▒▒》80%`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `*C A R G A N D O*《 ████████████》100%`, edit: key});
try {
let p = await fg.tiktok(args[0])
let te = `🎨 *Nombre:* ${p.nickname}
📍 *Usuario:* ${p.unique_id}
⏰ *Duración:* ${p.duration}
📄 *Descripción:* ${p.description}\n\n`
conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, fgif, m)
m.react(done)
} catch {
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw '*⚠️ ERROR AL DESACARGAR EL VÍDEO*'
conn.sendFile(m.chat, url, 'fb.mp4', `🎨 *Nombre:* ${nickname}\n📄 *Descripción:* ${description}\n\n`, m)
m.react(done)
} catch {
m.reply(`*⚠️ ERROR AL DESCARGAR EL VÍDEO*`)
}}
    
}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))