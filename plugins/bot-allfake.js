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
  
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender 
 let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg') 
  
 /*  
 Mensajes Fakes 
 */ 
  
 global.n2 = { contextInfo: { externalAdReply: { mediaUrl: nn, mediaType: 'VIDEO', description: 'TurboBot-MD', title: packname, body: 'Grupos ofc', thumbnailUrl: pp, sourceUrl: nn }}} 
  
 global.gitHub = { contextInfo: { externalAdReply: { mediaUrl: md, mediaType: 'VIDEO', description: 'GitHub', title: 'GitHub', body: 'ˢᶦ ᵗᵉ ᵃᵍʳᵃᵈᵃ ᵉˡ ᴮᵒᵗ ᵃᵖᵒʸᵃᵐᵉ ᶜᵒⁿ ᵘⁿᵃ 🌟', thumbnailUrl: pp, sourceUrl: md }}} 
  
 global.youtube = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: 'ˢᵘˢᶜʳᶦᵇᵉᵗᵉ ᵃ ⁿᵘᵉˢᵗʳᵒ ᶜᵃⁿᵃˡ ᵈᵉˡ ʸᵒᵘᵀᵘᵇᵉ : ' + yt, title: 'YouTube', body: 'TurboBot-MD', thumbnailUrl: pp, sourceUrl: yt }}} 
  
 global.fgif = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "6285736178354-1625305606@g.us" } : {})}, message: { videoMessage: { title: wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': wm,  'jpegThumbnail': imagen1}}} 
  
 global.fgclink = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { groupInviteMessage: { groupJid: "6285736178354-1625305606@g.us", inviteCode: null, groupName: "TurboBot-MD", caption: wm2, jpegThumbnail: imagen1}}} 
  
 global.fdocs = { key: { participant : "0@s.whatsapp.net" }, message: { documentMessage: { title: wm, jpegThumbnail: imagen1}}} 
  
 global.ftoko = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "17608914335@s.whatsapp.net" } : {})}, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: imagen1}, title: wm,  description: jxtxn, currencyCode: "USD", priceAmount1000: "99999999", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}} 
  
 global.fimg = { key: { participant: "0@s.whatsapp.net" }, message: { imageMessage: { url: ig, mimetype: "image/jpeg", fileLength: fsizedoc, height: 306, width: 366, jpegThumbnail: imagen1}}} 
  
 global.ftextt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6285736178354-1625305606@g.us" } : {})}, message: {  "extendedTextMessage": { "text":wm, "title": wm, 'jpegThumbnail': imagen1}}} 
  
 global.fliveLoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat  ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption":"By: " + global.wm2 ,"h": `${wm}`, 'jpegThumbnail': fs.imagen1}}} 
  
 global.fliveLoc2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": "Jxtxn","h": wm, 'jpegThumbnail': imagen1}}} 
  
 global.fpoll = {key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { pollCreationMessage: { name: wm, selectableOptionsCount: 1}}} 
  
 global.fdocument = {key: { participant: "0@s.whatsapp.net"}, message: {documentMessage: {title: `${wm}\n   ${azami}`, jpegThumbnail: imagen1}}} 
  
 global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=19362556628:global.nyanregis\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}         
  
 global.faketick = { key: { participant: "0@s.whatsapp.net", "remoteJid": "6287834993722-1621306547@g.us", "fromMe": false, "id": "3B64558B07848BD81108C1D14712018E" }, "message": { "stickerMessage": { "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=", "pngThumbnail": imagen1, "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE", "fileLength": "60206", "firstFrameLength": 3626, "isAnimated": false } }, "messageTimestamp": "1614070775", "status": "PENDING" } 
  
 global.fakeimg = { key: {participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})}, message: { imageMessage: { title: `*${jxtxn}*`, "h": `Hmm`, 'seconds': '99999', 'imagePlayback': 'true', 'caption': `${wm2}\n          ${jxtxn}`, jpegThumbnail: imagen1 }}} 
  
 global.fakemsg = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "17608914335-1625305606@g.us" } : {}) }, message: { extendedTextMessage: { text: `${wm2}\n${jxtxn}`, title: `${wm2}`, jpegThumbnail: imagen1}}} 
  
 global.flocation = {key : {participant : "0@s.whatsapp.net" },message: {locationMessage: {name: `${wm}\n   ${jxtxn}`,jpegThumbnail: imagen1}}} 
  
 global.estiloaudio = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "15075705205-1625305606@g.us" } : {}) }, message: { audioMessage: { mimetype: "audio/ogg; codecs=opus", seconds: "99569", ptt: "true" }}}         
  
 global.fvideo = {key: { fromMe: false,participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${wm}`, "h": `Hmm`, 'seconds': '2022', 'caption': `${wm}`, 'jpegThumbnail': imagen1}}} 
  
 global.fgclink = {key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" }, message: { groupInviteMessage: { groupJid: "6288213840883-1616169743@g.us", inviteCode: "m", groupName: "Jxtxn17", caption: `${wm}\n      ${jxtxn}`, jpegThumbnail: imagen1}}} 
  
 global.fproducto2 = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "status@broadcast" } : {})}, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: imagen1}, title: `${wm}`, retailerId: "TurboBot-MD", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}}         
  
 global.fproducto = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { productMessage: { product: { productImage:{ "mimetype": "image/jpeg", jpegThumbnail: imagen1 }, title: `${wm}`, description: "TurboBot-MD", currencyCode: "USD", priceAmount1000: "200000000", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}} 
  
 global.fakevoimg = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { imageMessage: { mimetype: 'image/jpeg', caption: wm, jpegThumbnail: imagen1, viewOnce: true }}} 
  
 global.fakevovid = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { videoMessage: { mimetype: 'video/mp4', caption: wm, jpegThumbnail: imagen1, viewOnce: true }}}         
  
 global.fpay = { key: { participant: "0@s.whatsapp.net", remoteJid: "6287834993722-1621306547@g.us", fromMe: false, id: "3B64558B07848BD81108C1D14712018E" }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: "100000", requestFrom: "50499698072@s.whatsapp.net", noteMessage: { extendedTextMessage: { text: wm }}, expiryTimestamp: "0", amount: { value: "100000", offset: 1000, currencyCode: "USD" }, background: { id: "BBB9307B17C17F928E57A7435E45033E", fileLength: "94896", width: 64, height: 64, mimetype: "image/webp", placeholderArgb: 4288282521, textArgb: 4278190080, subtextArgb: 4288282521}}}} 
  
 global.estilo = { key: {  fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : +2022, status: 1, surface : 1, message: `${wm}\n${azami}`, orderTitle: 'Bang', thumbnail: imagen1, sellerJid: '0@s.whatsapp.net'}}} 
  
 global.twa = {key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"}, message: { groupInviteMessage: { groupJid: "51995386439-1616969743@g.us", inviteCode: "m", groupName: "P", caption: wm, jpegThumbnail: imagen1}}} 
  
 global.fakemek = {key: {participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"}, message: {groupInviteMessage: {groupJid: "51995386439-1616969743@g.us", inviteCode: "m",groupName: "P", caption: 'TurboBot-MD', jpegThumbnail: null}}} 
  
 var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'una linda noche 🌙'; break; case 1: hour = 'una linda noche 💤'; break; case 2: hour = 'una linda noche 🦉'; break; case 3: hour = 'una linda mañana ✨'; break; case 4: hour = 'una linda mañana 💫'; break; case 5: hour = 'una linda mañana 🌅'; break; case 6: hour = 'una linda mañana 🌄'; break; case 7: hour = 'una linda mañana 🌅'; break; case 8: hour = 'una linda mañana 💫'; break; case 9: hour = 'una linda mañana ✨'; break; case 10: hour = 'un lindo dia 🌞'; break; case 11: hour = 'un lindo dia 🌨'; break; case 12: hour = 'un lindo dia ❄'; break; case 13: hour = 'un lindo dia 🌤'; break; case 14: hour = 'una linda tarde 🌇'; break; case 15: hour = 'una linda tarde 🏜️'; break; case 16: hour = 'una linda tarde ☀️'; break; case 17: hour = 'una linda tarde 🌆'; break; case 18: hour = 'una linda noche 🌙'; break; case 19: hour = 'una linda noche 🌃'; break; case 20: hour = 'una linda noche 🌌'; break; case 21: hour = 'una linda noche 🌃'; break; case 22: hour = 'una linda noche 🌙'; break; case 23: hour = 'una linda noche 🌃'; break;} 
 global.saludo = "Espero que tengas " + hour; 
  
 global.d = new Date(new Date + 3600000) 
 global.locale = 'es' 
 global.dia = d.toLocaleDateString(locale, {weekday: 'long'}) 
 global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'}) 
 global.mes = d.toLocaleDateString('es', {month: 'long'}) 
 global.año = d.toLocaleDateString('es', {year: 'numeric'}) 
 global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}) 
  
 global.nombre = conn.getName(m.sender) 
 global.taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
  
 } 
  
 export default handler