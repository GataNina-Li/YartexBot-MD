import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
global.fotos = ImgAll.getRandom()
global.enlaces = linkSity.getRandom()

/* 
Mensajes Fakes
*/

global.fgif = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "6285736178354-1625305606@g.us" } : {})}, message: { videoMessage: { title: wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': wm,  'jpegThumbnail': imagen1}}}

global.fgclink = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { groupInviteMessage: { groupJid: "6285736178354-1625305606@g.us", inviteCode: null, groupName: "YartexBot-MD", caption: wm2, jpegThumbnail: imagen1}}}

global.fdocs = { key: { participant : "0@s.whatsapp.net" }, message: { documentMessage: { title: wm, jpegThumbnail: imagen1}}}

global.ftoko = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})}, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: imagen1}, title: wm,  description: gatanina, currencyCode: "USD", priceAmount1000: "99999999", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}}

global.fimg = { key: { participant: "0@s.whatsapp.net" }, message: { imageMessage: { url: ig, mimetype: "image/jpeg", fileLength: fsizedoc, height: 306, width: 366, jpegThumbnail: imagen1}}}

global.ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6285736178354-1625305606@g.us" } : {})}, message: {  "extendedTextMessage": { "text":wm, "title": wm, 'jpegThumbnail': imagen1}}}

global.fliveLoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":"By: " + global.wm2 ,"h": `${wm}`, 'jpegThumbnail': imagen1}}}

global.fliveLoc2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": "GataNina-Li","h": wm, 'jpegThumbnail': imagen1}}}

global.fliveLoc3 = { key: {participants: '0@s.whatsapp.net', 'fromMe': false, 'id': '3B64558B07848BD81108C1D14712018E'}, 'message': {'locationMessage': {'name': wm, 'jpegThumbnail': imagen1, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}

global.fpoll = {key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { pollCreationMessage: { name: wm, selectableOptionsCount: 1}}}

global.fdocument = {key: { participant: "0@s.whatsapp.net"}, message: {documentMessage: {title: `${wm}\n   ${gatanina}`, jpegThumbnail: imagen1}}}

global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.faketick = { key: { participant: "0@s.whatsapp.net", "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "thumbnail": imagen1, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" }

global.fakeimg = { key: {participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})}, message: { imageMessage: { title: `*${gatanina}*`, "h": `Hmm`, 'seconds': '99999', 'imagePlayback': 'true', 'caption': `${wm2}\n          ${gatanina}`, jpegThumbnail: imagen1 }}}

global.fakemsg = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { extendedTextMessage: { text: `${wm}\n${gatanina}`, title: `${wm}`, jpegThumbnail: imagen1}}}

global.flocation = {key : {participant : "0@s.whatsapp.net" },message: {locationMessage: {name: `${wm}\n   ${gatanina}`,jpegThumbnail: imagen1}}}

global.estiloaudio = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "15075705205-1625305606@g.us" } : {}) }, message: { audioMessage: { mimetype: "audio/ogg; codecs=opus", seconds: "99569", ptt: "true" }}}        

global.fvideo = {key: { fromMe: false,participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${wm}`, "h": `Hmm`, 'seconds': '2022', 'caption': `${wm}`, 'jpegThumbnail': imagen1}}}

global.fgclink = {key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { groupInviteMessage: { groupJid: "6288213840883-1616169743@g.us", inviteCode: "m", groupName: "GataNina-Li", caption: `${wm}\n      ${gatanina}`, jpegThumbnail: imagen1}}}

global.fproducto2 = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: imagen1}, title: `${wm}`, retailerId: "YartexBot-MD", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}}        

global.fproducto = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { productMessage: { product: { productImage:{ "mimetype": "image/jpeg", jpegThumbnail: imagen1 }, title: `${wm}`, description: "YartexBot-MD", currencyCode: "USD", priceAmount1000: "200000000", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}}

global.fakevoimg = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { imageMessage: { mimetype: 'image/jpeg', caption: wm, jpegThumbnail: imagen1, viewOnce: true }}}

global.fakevovid = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { videoMessage: { mimetype: 'video/mp4', caption: wm, jpegThumbnail: imagen1, viewOnce: true }}}        

global.fpay = { key: { participant: "0@s.whatsapp.net", remoteJid: "6287834993722-1621306547@g.us", fromMe: false, id: "3B64558B07848BD81108C1D14712018E" }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: "100000", requestFrom: "50499698072@s.whatsapp.net", noteMessage: { extendedTextMessage: { text: wm }}, expiryTimestamp: "0", amount: { value: "100000", offset: 1000, currencyCode: "USD" }, background: { id: "BBB9307B17C17F928E57A7435E45033E", fileLength: "94896", width: 64, height: 64, mimetype: "image/webp", placeholderArgb: 4288282521, textArgb: 4278190080, subtextArgb: 4288282521}}}}

global.estilo = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : +2022, status: 1, surface : 1, message: `${wm}\n${gatanina}`, orderTitle: 'Bang', thumbnail: imagen1, sellerJid: '0@s.whatsapp.net'}}}

global.twa = {key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"}, message: { groupInviteMessage: { groupJid: "51995386439-1616969743@g.us", inviteCode: "m", groupName: "P", caption: wm, jpegThumbnail: imagen1}}}

global.fakemek = {key: {participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"}, message: {groupInviteMessage: {groupJid: "51995386439-1616969743@g.us", inviteCode: "m",groupName: "P", caption: 'YartexBot-MD', jpegThumbnail: null}}}


const moji = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/YartexBot-MD/main/storage/juegos/emojis.json`)).data
const emoji = await moji[Math.floor(moji.length * Math.random())]

var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')

var ase = new Date(new Date + 3600000); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Buenas Noches'; break; case 1: hour = 'Buenas Noches'; break; case 2: hour = 'Buenas Noches'; break; case 3: hour = 'Buenos Días'; break; case 4: hour = 'Buenos Días'; break; case 5: hour = 'Buenos Días'; break; case 6: hour = 'Buenos Días'; break; case 7: hour = 'Buenos Días'; break; case 8: hour = 'Buenos Días'; break; case 9: hour = 'Buenos Días'; break; case 10: hour = 'Buenos Días'; break; case 11: hour = 'Buenos Días'; break; case 12: hour = 'Buenas Tardes'; break; case 13: hour = 'Buenas Tardes'; break; case 14: hour = 'Buenas Tardes'; break; case 15: hour = 'Buenas Tardes'; break; case 16: hour = 'Buenas Tardes'; break; case 17: hour = 'Buenas Tardes'; break; case 18: hour = 'Buenas noches'; break; case 19: hour = 'Buenas noches'; break; case 20: hour = 'Buenas noches'; break; case 21: hour = 'Buenas noches'; break; case 22: hour = 'Buenas noches'; break; case 23: hour = 'Buenas noches'; break;}
global.saludo = '🐱' + hour;

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")

global.fake = { contextInfo: { mentionedJid: conn.parseMention(wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363302472386010@newslette', serverMessageId: '', newsletterName: saludo + ` ${m.name}` }, externalAdReply: { title: wm + ` 💫`, body: dev, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: random1(), thumbnail: imagen1, sourceUrl: enlaces }}}, { quoted: fkontak } //fake con reenviado de canal
}

export default handler
