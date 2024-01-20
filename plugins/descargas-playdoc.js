import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import {youtubedl, youtubedlv2} from '@bochilteam/scraper'

const handler = async (m, {conn, command, args, text, usedPrefix}) => {

if (!text) return conn.reply(m.chat, `🎌 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, !${command} Banners - Someone To You`,  m, fake, )
m.react(rwait)

try {

const yt_play = await search(args.join(' '))
let additionalText = ''
if (command === 'play3' || command == 'playdoc') {
additionalText = 'audio'
} else if (command === 'play4' || command == 'playdoc2') {
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

if (command == 'play3' || command == 'playdoc') {

try {

let q = '128kbps'
let v = yt_play[0].url
let yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let ttl = await yt.title
let size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m})
} catch {

try {

let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m})
} catch {

try {

const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video')
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'})
conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m})
} catch {
await conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, )
}}}}

if (command == 'play4' || command == 'playdoc2') {

try {
const qu = '360'
const q = qu + 'p'
const v = yt_play[0].url
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*∘ Título*\n${ttl}\n*∘ Peso*\n${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m})
} catch {

try {

let mediaa = await ytMp4(yt_play[0].url)
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch {
        
try {

const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)
const lolh = await lolhuman.json()
const n = lolh.result.title || 'error'
const n2 = lolh.result.link
const n3 = lolh.result.size
const n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*∘ Título*\n${n}\n*∘ Peso*\n${n3}`, thumbnail: await fetch(n4)}, {quoted: m})
} catch {

await conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, )
}}}}

} catch {
return conn.reply(m.chat, '🚩 *Inténtelo de nuevo*', m, fake, )}
}
  
}
handler.help = ['play3', 'play4']
handler.tags = ['descargas']
handler.command = /^(playdoc|playdoc2|play3|play4)$/i

export default handler

async function search(query, options = {}) {
var search = await yts.search({query, hl: 'es', gl: 'ES', ...options})
return search.videos
}

function MilesNumber(number) {
var exp = /(\d)(?=(\d{3})+(?!\d))/g
var rep = '$1.'
var arr = number.toString().split('.')
arr[0] = arr[0].replace(exp, rep)
return arr[1] ? arr.join('.') : arr[0]
}

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24))
var h = Math.floor((seconds % (3600 * 24)) / 3600)
var m = Math.floor((seconds % 3600) / 60)
var s = Math.floor(seconds % 60)
var dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : ''
var hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : ''
var mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : ''
var sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : ''
return dDisplay + hDisplay + mDisplay + sDisplay
}

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
if (bytes === 0) return 'n/a'
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
if (i === 0) resolve(`${bytes} ${sizes[i]}`)
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)
})
}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
var result = []
for (let i = 0; i < getUrl.formats.length; i++) {
var item = getUrl.formats[i]
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
var {contentLength} = item
var bytes = await bytesToSize(contentLength)
result[i] = {audio: item.url, size: bytes}
}
}
var resultFix = result.filter((x) => x.audio != undefined && x.size != undefined)
var tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`)
var tinyUrl = tiny.data;
var title = getUrl.videoDetails.title;
var thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
resolve({title, result: tinyUrl, result2: resultFix, thumb})
}).catch(reject)
})
}

async function ytMp4(url) {
return new Promise(async (resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
var result = []
for (let i = 0; i < getUrl.formats.length; i++) {
var item = getUrl.formats[i]
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
var {qualityLabel, contentLength} = item
var bytes = await bytesToSize(contentLength)
result[i] = {video: item.url, quality: qualityLabel, size: bytes}
}}
var resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined)
var tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`)
var tinyUrl = tiny.data
var title = getUrl.videoDetails.title
var thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb})
}).catch(reject)
})
}

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
var result = getData.videos.slice( 0, 5 )
var url = []
for (let i = 0; i < result.length; i++) {
url.push(result[i].url)
}
var random = url[0]
var getAudio = await ytMp3(random)
resolve(getAudio)
}).catch(reject)
})
}

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
var result = getData.videos.slice( 0, 5 )
var url = []
for (let i = 0; i < result.length; i++) {
url.push(result[i].url)
}
var random = url[0]
var getVideo = await ytMp4(random)
resolve(getVideo)
}).catch(reject)
})}
