import fetch from "node-fetch";
import yts from 'yt-search';
import axios from "axios";
const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🎌 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} New West - Those Eyes`,  m, fake)
try {
m.react(rwait)
const search = await yts(text);
if (!search.all || search.all.length === 0) {
return m.reply('No se encontraron resultados para tu búsqueda.');
}
const videoInfo = search.all[0];
if (!videoInfo) {
return m.reply('No se pudo obtener información del video.');
}
const { title, thumbnail, timestamp, views, ago, url, author } = videoInfo;
if (!title || !thumbnail || !timestamp || !views || !ago || !url || !author) {
return m.reply('La información del archivo no se pudo generar.');
}
const canal = author.name ? author.name : 'Desconocido';
let additionalText = ''
if (command === 'play') {
additionalText = 'audio'
} else if (command === 'play2') {
additionalText = 'video'}
const infoMessage = `*∘ Título*
${title || 'Desconocido'}

*∘ Duración* 
${timestamp || 'Desconocido'}

*∘ Vistas*
${views}

*∘ Canal*
${canal}

*∘ Enlace*
${url || 'Desconocido'}

*Enviando ${additionalText}*
⏰ Espere un momento`;
const thumb = (await conn.getFile(thumbnail))?.data;
await conn.sendMessage(m.chat, { text: infoMessage, contextInfo: { externalAdReply: { title: title, body: wm, thumbnail: thumb, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })
if (command === 'play') {
try {
const api = await (await fetch(`https://api.neoxr.eu/api/youtube?url=${url}&type=audio&quality=128kbps&apikey=GataDios`)).json();
const result = api.data.url;
if (!result) throw new Error('El enlace de audio no se generó correctamente.');
await conn.sendMessage(m.chat, { audio: { url: result }, fileName: `${api.data.filename}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });
} catch (e) {
console.error('Error al enviar el audio:', e.message);
return conn.reply(m.chat, 'No se pudo enviar el audio, intente nuevamente mas tarde.', m);
}
} else if (command === 'play2') {
try {
const response = await fetch(`https://api.neoxr.eu/api/youtube?url=${url}&type=video&quality=480p&apikey=GataDios`);
const json = await response.json();
if (!json.data || !json.data.url) throw new Error('El enlace de video no se generó correctamente.');
await conn.sendMessage(m.chat, { video: { url: json.data.url }, fileName: json.data.filename, mimetype: 'video/mp4', caption: wm, thumbnail: json.thumbnail }, { quoted: m });
} catch (e) {
console.error('Error al enviar el video:', e.message);
return conn.reply(m.chat, 'No se pudo enviar el video, intente nuevamente mas tarde.', m);
}
} else {
return conn.reply(m.chat, 'No disponible', m);
}
} catch (error) {
return m.reply(`❌ Ocurrió un error: ${error.message}`);
}};

handler.help = ['play', 'play2'];
handler.tags = ['descargas'];
handler.command = /^play2?$/i;

export default handler;

/*import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

var handler = async (m, { conn, command, args, text, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `🎌 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} New West - Those Eyes`,  m, fake, )
m.react(rwait)

try {

const yt_play = await search(args.join(' '))
let additionalText = ''
if (command === 'play') {
additionalText = 'audio'
} else if (command === 'play2') {
additionalText = 'video'}

let texto1 = `*∘ Título*
${yt_play[0].title}

*∘ Duración* 
${secondString(yt_play[0].duration.seconds)}

*∘ Autor*
${yt_play[0].author.name}

*∘ Canal*
${yt_play[0].author.url}

*∘ Enlace*
${yt_play[0].url}

*Enviando ${additionalText}*
⏰ Espere un momento`.trim()
await conn.sendMessage(m.chat, { text: texto1, contextInfo: { externalAdReply: { title: yt_play[0].title, body: dev, thumbnailUrl: yt_play[0].thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })

if (command == 'play') {	
try {
let q = '128kbps'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', contextInfo: { externalAdReply: { title: ttl, body: dev, thumbnailUrl: yt_play[0].thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })   
} catch {

try {

const dataRE = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url}`)
const dataRET = await dataRE.json()
await conn.sendMessage(m.chat, { audio: { url: dataRET.mp3[1].url }, mimetype: 'audio/mpeg', contextInfo: { externalAdReply: { title: yt_play[0].title, body: dev, thumbnailUrl: yt_play[0].thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })
m.react(done) 
} catch {

try {

let humanLol = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${yt_play[0].title}`)
let humanRET = await humanLol.json()
await conn.sendMessage(m.chat, { audio: { url: humanRET.result.audio.link }, mimetype: 'audio/mpeg', contextInfo: { externalAdReply: {title: yt_play[0].title, body: dev, thumbnailUrl: yt_play[0].thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })
m.react(done)      
} catch {
   
try {

let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
m.react(done)
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link}, mimetype: 'audio/mpeg', contextInfo: { externalAdReply: { title: n, body: dev, thumbnailUrl: yt_play[0].thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })   
} catch {

try {

let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
m.react(done)
await conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg', contextInfo: { externalAdReply: { title: __res[0].title, body: dev, thumbnailUrl: yt_play[0].thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })   

} catch {
}}}}}
} if (command == 'play2') {
try {
let qu = '360'
let q = qu + 'p'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
m.react(done)
await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*Título*: ${ttl}\n*Peso:* ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {

try {

let mediaa = await ytMp4(yt_play[0].url)
m.react(done)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: cred.toString('utf-8'), thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m })     
} catch {

try {

let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*Titulo:* ${n}\n*Peso:* ${n3}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
m.react(error)
await conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, ) }}}    
}} catch {
m.react(error)
return conn.reply(m.chat, '🚩 *Inténtelo de nuevo*', m, fake, )}

}
handler.help = ['play', 'play2']
handler.tags = ['descargas']
handler.command = /^play2?$/i

handler.register = true
handler.limit = true

export default handler

async function search(query, options = {}) {
const search = await yts.search({ query, hl: 'es', gl: 'ES', ...options })
return search.videos}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g
const rep = '$1.'
let arr = number.toString().split(".")
arr[0] = arr[0].replace(exp, rep)
return arr[1] ? arr.join('.') : arr[0]}

function secondString(seconds) {
seconds = Number(seconds)
var d = Math.floor(seconds / (3600 * 24))
var h = Math.floor((seconds % (3600 * 24)) / 3600)
var m = Math.floor((seconds % 3600) / 60)
var s = Math.floor(seconds % 60)
var dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : ''
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : ''
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : ''
var sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : ''
return dDisplay + hDisplay + mDisplay + sDisplay}

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
if (bytes === 0) return 'n/a'
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = []
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i]
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item
let bytes = await bytesToSize(contentLength)
result[i] = { audio: item.url, size: bytes }}}
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`)
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})}

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = []
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i]
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item
let bytes = await bytesToSize(contentLength)
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}}
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`)
let tinyUrl = tiny.data
let title = getUrl.videoDetails.title
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})}

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 )
let url = []
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0]
let getAudio = await ytMp3(random)
resolve(getAudio)}).catch(reject)})}

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 )
let url = []
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0]
let getVideo = await ytMp4(random)
resolve(getVideo)}).catch(reject)})}*/
