//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/Undefined17 | @Azami

import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

var handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {

try {

let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
const d = new Date(new Date + 3600000);
const locale = 'es'
const week = d.toLocaleDateString(locale, {weekday: 'long'});
const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
let name = conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let { exp, diamond, level, role, money } = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)

let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let links = linkSity.getRandom()

//Fakes
const ftrol = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: `${name}!`, orderTitle: `▮Menu ▸`, sellerJid: '0@s.whatsapp.net' }}}
const fload = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : -99999999, status: 1, surface : 1, message: `CuriosityBot-MD 🍧` + `\nAzami`, orderTitle: `▮Menu ▸`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' }}}

let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'application/vnd.android.package-archive'
let d6 = 'application/zip'
let d7 = 'application/7-Zip'
let td = `${pickRandom([d1,d2,d3,d4,d5,d6,d7])}`

m.react('🏷️')
  
let menu = `*👋 Hola, ${name}*

*_${saludo}_*

.allmenu
_(Para ver el menú completo)_`
function CuriosityMenu() {
const filetype = ['namedoc', 'social', '1017dFLzIP', '11680bWFOeX', 'sendMessage', '1FnTozH', '6qNtNxK', '445374chjKag', '2096504ySppGm', '627669MaFyqj', 'readFileSync', 'En breve se enviará el menú...', '374160lMCurS', '356228pujvOS', './storage/logos/Menu1.jpg', '1019845zOpQQK', 'pdf', 'chat'];
CuriosityMenu = function() {
return filetype;
};
return CuriosityMenu();
}
const funcion = funcion2;
(function(fy, fyy) {
const funciones = {
_0x2e964c: 0x1b0,
_0x4fc539: 0x1bd,
_0x2a1845: 0x1b1,
_0x2b6724: 0x1b3,
_0x4293cc: 0x1b8,
_0x59080a: 0x1b9
},
_0x30692c = funcion2,
_0x119b1c = fy();
while (!![]) {

try {
const _0x181128 = parseInt(_0x30692c(0x1bb)) / 0x1 * (parseInt(_0x30692c(funciones._0x2e964c)) / 0x2) + parseInt(_0x30692c(funciones._0x4fc539)) / 0x3 + parseInt(_0x30692c(funciones._0x2a1845)) / 0x4 + parseInt(_0x30692c(funciones._0x2b6724)) / 0x5 * (parseInt(_0x30692c(0x1bc)) / 0x6) + -parseInt(_0x30692c(0x1ad)) / 0x7 + -parseInt(_0x30692c(0x1be)) / 0x8 + parseInt(_0x30692c(funciones._0x4293cc)) / 0x9 * (-parseInt(_0x30692c(funciones._0x59080a)) / 0xa);
if (_0x181128 === fyy) break;
else _0x119b1c['push'](_0x119b1c['shift']());
} catch (_0x1caf7d) {
_0x119b1c['push'](_0x119b1c['shift']());
}
}
}(CuriosityMenu, 0x235d2));

function funcion2(_0x16c7de, _0x1a27b8) {
const _0x2dafbc = CuriosityMenu();
return funcion2 = function(_0x13bbaf, _0x156d41) {
_0x13bbaf = _0x13bbaf - 0x1ad;
let _0x1a2b8a = _0x2dafbc[_0x13bbaf];
return _0x1a2b8a;
}, funcion2(_0x16c7de, _0x1a27b8);
  }

let buttonMessage = {
'document': {
'url': md,
},
'mimetype': td,
'fileName': '☰ D A S B O A R D ☰',
'fileLength': '99999999999999',
'pageCount': '999',
'contextInfo': {
'externalAdReply': {
'showAdAttribution': !![],
'mediaType': 0x1,
'previewType': "PHOTO",
'title': 'Hola!!',
'thumbnail': imagen1,
'renderLargerThumbnail': !![],
'sourceUrl': md
}
},
'caption': menu['trim']()
}

await conn.sendMessage(m.chat, buttonMessage, {quoted: fload})

} catch {
conn.reply(m.chat, CuriosityML['smsError'](), fkontak, m)

}}
handler.tags = ['bot']
handler.command = /^(menu)$/i
handler.register = true

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
                                                                                                                                                             }
  
