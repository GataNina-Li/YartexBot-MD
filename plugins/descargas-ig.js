import fetch from 'node-fetch'
import axios from 'axios'
import instagramGetUrl from 'instagram-url-direct'
import {instagram} from '@xct007/frieren-scraper'
import {instagramdl} from '@bochilteam/scraper'
 
var handler = async (m, {conn, args, command, usedPrefix}) => {
 
if (!args[0]) throw `*⚠️ INGRESE UN ENLACE DE INSTAGRAM*\n\n❕ EJEMPLO:\n*${usedPrefix + command}* https://www.instagram.com/reel/CuqAzGRAbZa/?igshid=MzRlODBiNWFlZA==`
conn.reply(m.chat, `*🧃 DESCARGANDO SU PEDIDO, POR FAVOR SEA PACIENTE*`, fkontak, m)
try {
const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`
const responsel = await axios.get(apiUrll)
const resultl = responsel.data
for (const item of resultl.message) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text()
const tXXxt = `🍧 *Url:* ${shortUrRRl}`.trim()
conn.sendFile(m.chat, item._url, null, tXXxt, fkontak, m)
await new Promise((resolve) => setTimeout(resolve, 10000))
} 
} catch { 
try { 
const datTa = await instagram.v1(args[0])
for (const urRRl of datTa) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
const tXXxt = `🍧 *Url:* ${shortUrRRl}`.trim()
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, fkontak, m)
await new Promise((resolve) => setTimeout(resolve, 10000))
}
} catch {
try {
const resultss = await instagramGetUrl(args[0]).url_list[0]
const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
const txt2 = `🍧 *Url:* ${shortUrl2}`.trim()
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
} catch {
try {
const resultssss = await instagramdl(args[0])
const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
const txt4 = `🍧 *Url:* ${shortUrl3}`.trim()
for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m)
} catch {
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
const json = await human.json()
const videoig = json.result
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
const txt1 = `🍧 *Url:* ${shortUrl1}`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)
} catch {
throw `*⚠️ OCURRIÓ UN FALLO, VUELVE A INTENTAR*`
}}}}} 

}
handler.help = ['ig']
handler.tags = ['descargas']
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i
 
export default handler