/*import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
'info': 'Información 📄',
'grupo': 'Grupos ⚡️',
'juegos': 'Juegos 🧸',
'descargas': 'Descargas 🚀',
'jadibot': 'JadiBot 🤖', 
'nable': 'Enable / Disable ⚙️', 
'internet': 'Buscadores 🔎',
'transformador': 'Convertidores 👏🏻', 
'sticker': 'Stickers 🧩',
'rg': 'RPG 🌱',
'audio': 'Audios - Efectos 🎶', 
'tools': 'Herramientas 🧰', 
'anime': 'Anime 📍', 
'own': 'Propietario 👑',
'ai': 'Inteligencia Artificial 🙋🏻‍♂️',
'imagenes': 'Imagenes 🖼️',
}
const defaultMenu = {
before: `> ╭─❒ 「 *Usuario* 🎗️ 」
> │○ *Cliente:* %name
> │○ *Limite:* %diamond
> │○ *Nivel:* %level
> │○ *Rango:* %role
> │○ *Exp:* %exp
> │
> ├─❒ 「 *InfoBot* 🚩 」
> │○ *Creador:* GataNina-Li
> │○ *Tiempo Activo:* %muptime
> │○ *Registrados:* %rtotalreg De %totalreg Usuarios
> │
> ├─❒ 「 *Hoy* 📅 」
> │○ *Fecha:* %date
> ╰──────────────
%readmore`.trimStart(),

header: '> ╭─❒ 「 *%category* 」',
body: '> │○  %cmd',
footer: '> ╰───────────\n',
after: `
`,
}

var handler = async (m, { conn: azami, usedPrefix: _p, __dirname }) => {

try {

let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, diamond, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'

let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
diamond: plugin.diamond,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})

for (let plugin of help)
if (plugin && 'tags' in plugin)
for (let tag of plugin.tags)
if (!(tag in tags) && tag) tags[tag] = tag
azami.menu = azami.menu ? azami.menu : {}
let before = azami.menu.before || defaultMenu.before
let header = azami.menu.header || defaultMenu.header
let body = azami.menu.body || defaultMenu.body
let footer = azami.menu.footer || defaultMenu.footer
let after = azami.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
.replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
.replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')

let text = typeof azami.menu == 'string' ? azami.menu : typeof azami.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: azami.getName(azami.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

let whoPP = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppBot = await azami.profilePictureUrl(whoPP, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  
await azami.reply(m.chat, '*Próximamente se remitirá el menú.*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 Hola!!', body: saludo, sourceUrl: global.ig, thumbnailUrl: ppBot }}})
m.react('🚀') 

azami.sendMessage(m.chat, {text: text.trim(), mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen2, "mediaUrl": group, "sourceUrl": group}}}, {quoted: fkontak});
    
} catch (e) {
azami.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake, )
throw e}

}
handler.help = ['help', 'allmenu']
handler.tags = ['info']
handler.command = ['help', 'menucompleto', 'allmenu'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
*/

import fs from 'fs'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import moment from 'moment-timezone'
import { join, dirname } from 'path'
import ct from 'countries-and-timezones'
import { parsePhoneNumber } from 'libphonenumber-js'

let handler = async (m, { conn, usedPrefix: _p, text, command }) => {
  
let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'; moment.locale('es')
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) { fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1)
nombreLugar = countryData.name; const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
} else { 
lugarMoment = moment().tz('America/Quito')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1)
nombreLugar = 'America'; ciudad = 'Quito' 
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author, version, description, collaborators } = require(join(__dirname, '../package.json'))

let { money, joincount } = global.db.data.users[m.sender]

let menu = `
╭・・・・☆・・・・・・☆ ・・・・
┆ ⋮ . ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .
┆ ⋮ ⋅.⊹ *𐒄Ꮛ𐒐Ꮼ́ Ꮯ𐒀𐒄ᎵႱᏋᎿ𐒀* ⋅.⊹
┆ ⋮ . ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .
┆ ⋮
┆ ⋮  *Usuario* @${m.sender.split("@")[0]}
┆ ⋮  *Lugar* ${nombreLugar} - ${ciudad}
┆ ⋮  *Registrados* \`\`\`${Object.values(global.db.data.users).filter(user => user.registered == true).length}/${Object.keys(global.db.data.users).length}\`\`\`
┆ ⋮  *Versión* \`${version}\`
╰・・・・☆・・・・・・☆ ・・・・

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ℹ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ʜᴇʟᴘ
*. ⋅⊰ꕤ ┆* ${_p}ᴀʟʟᴍᴇɴᴜ 
*. ⋅⊰ꕤ ┆* ${_p}ʜᴏʀᴀʀɪᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴏᴡɴᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏɴᴛᴀᴄᴛᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀᴇᴀᴅᴏʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴛQᴛᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀᴇᴅɪᴛᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀᴇᴅɪᴛꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛʜᴀɴᴋꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛʜᴀɴᴋꜱᴛᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴜᴇɴᴛᴀꜱᴏꜰɪᴄɪᴀʟᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴜᴇɴᴛᴀꜱᴏꜰᴄ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴜᴇɴᴛᴀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴜᴘᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀꜱʜ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀꜱʜʙᴏᴀʀᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴠɪᴇᴡꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀᴛᴀʙᴀꜱᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴜꜱᴜᴀʀɪᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴜꜱᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏɴᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏɴᴀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏɴᴀꜱɪ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴏᴜᴘꜱ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴏᴜᴘʟɪꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴꜰɪɴɪᴛʏ
*. ⋅⊰ꕤ ┆* ${_p}ʜᴏꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʜᴏꜱᴛɪɴɢ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴꜰᴏʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴꜱᴛᴀʟᴀʀʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴄʀɪᴘᴛ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🔰 𝐆𝐑𝐔𝐏𝐎𝐒 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅᴍɪɴꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴘʀᴏʙᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴏᴜᴘ ᴏᴘᴇɴ / ᴄʟᴏꜱᴇ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴜᴘᴏ ᴀʙʀɪʀ / ᴄᴇʀʀᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇᴍᴏᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʜɪᴅᴇᴛᴀɢ
*. ⋅⊰ꕤ ┆* ${_p}ɪᴅɢᴄ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴғᴏɢʀᴜᴘᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴋɪᴄᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪɴᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪꜱᴛᴀɴᴜᴍ
*. ⋅⊰ꕤ ┆* ${_p}ᴋɪᴄᴋɴᴜᴍ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʀᴏᴍᴏᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴠᴏᴋᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛʙʏᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴅᴇꜱᴄ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛɴᴀᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴘᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴘᴘɢᴄ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱɪᴍᴜʟᴀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴀɢᴀʟʟ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 💠 𝐘𝐀𝐑𝐓𝐄𝐗 𝐈𝐀 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀʀᴅ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀʀᴅɪᴍɢ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀʟʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀʟʟ2
*. ⋅⊰ꕤ ┆* ${_p}ʜᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴏᴘᴇɴɪᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʜᴀᴛɢᴘᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɪᴀ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 👾 𝐉𝐔𝐄𝐆𝐎𝐒 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ʟᴏᴠᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴜᴇʀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴜʟᴇᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴜʟᴇᴛᴀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴄᴇʀᴛɪᴊᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴄᴇʀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅɪᴠɪɴᴀɴᴢᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴇᴋᴀᴛᴇᴋɪ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅᴠᴘᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅᴠ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʟıᴄᴜʟᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʟıᴄᴜʟᴀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴀɴᴄıᴏɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴛᴛᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴛᴛᴄ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟxᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏxᴇᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏxᴇᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏxxᴇᴏ
*. ⋅⊰ꕤ ┆* ${_p}ɢᴀʏ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴏꜱ10
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴀᴛᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʀꜱᴏɴᴀʟɪᴅᴀᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴘᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʀᴇɢᴜɴᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴛᴏ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱʜɪᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱıᴍı
*. ⋅⊰ꕤ ┆* ${_p}ꜱʟᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴜꜱᴄᴀʀᴘᴀʟᴀʙʀᴀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴏᴘᴀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴏᴜᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴘᴅᴇᴘᴀʟᴀʙʀᴀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛıᴄᴛᴀᴄᴛᴏᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴘɢᴀʏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴘᴏᴛᴀᴋᴜꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴘʜᴇᴛᴇʀᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴘᴏꜱᴛᴀʀ \`ᴄᴀɴᴛɪᴅᴀᴅ\`
*. ⋅⊰ꕤ ┆* ${_p}ᴄʜɪꜱᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏɴꜱᴇᴊᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴏʀᴀᴄɪᴏɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴘɪʀᴏᴘᴏ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇꜰʀᴀɴ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 📥 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ꜰʙ
*. ⋅⊰ꕤ ┆* ${_p}ɢɪᴛᴄʟᴏɴᴇ
*. ⋅⊰ꕤ ┆* ${_p}ɪɢ
*. ⋅⊰ꕤ ┆* ${_p}ᴅʟᴍᴏᴅʟᴀᴛᴇꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇᴅɪᴀꜰɪʀᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴘᴋᴍᴏᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʟᴀʏ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʟᴀʏ2
*. ⋅⊰ꕤ ┆* ${_p}ᴘʟᴀʏ3
*. ⋅⊰ꕤ ┆* ${_p}ᴘʟᴀʏ4
*. ⋅⊰ꕤ ┆* ${_p}ᴛɪᴋᴛᴏᴋ
*. ⋅⊰ꕤ ┆* ${_p}ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʏᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʏᴛᴠ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ✨ 𝐒𝐄𝐑𝐁𝐎𝐓 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ʙᴄʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴇᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴇʀʜᴇɴᴛɪ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴛᴏᴘ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪꜱᴛᴊᴀᴅɪʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴏᴛꜱ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴜʙꜱʙᴏᴛꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴊᴀᴅɪʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇʀʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɢᴇᴛᴄᴏᴅᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇɴᴛʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴋᴇɴ
*. ⋅⊰ꕤ ┆* ${_p}ɢᴇᴛᴛᴏᴋᴇɴ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇʀʙᴏᴛᴛᴏᴋᴇɴ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ⚙️ 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴇɴᴀʙʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅɪꜱᴀʙʟᴇ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🔎 𝐁𝐔𝐒𝐂𝐀𝐑𝐃𝐎𝐑 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴇᴛᴄʜ
*. ⋅⊰ꕤ ┆* ${_p}ɢᴇᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʟɪꜱᴘʟᴜꜱ
*. ⋅⊰ꕤ ┆* ${_p}ɢɪᴛʜᴜʙꜱᴇᴀʀᴄʜ
*. ⋅⊰ꕤ ┆* ${_p}ɴᴘᴍꜱᴇᴀʀᴄʜ
*. ⋅⊰ꕤ ┆* ${_p}ʏᴛꜱᴇᴀʀᴄʜ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʟɪꜱᴘʟᴜꜱ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🗿 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴀɴɪᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏɢɪꜰᴀᴜᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏɪᴍɢ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴍᴘ3
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴠɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴜʀʟ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴠɪᴅᴇᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴛꜱ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🧩 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ꜱ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴛɪᴄᴋᴇʀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴡᴍ <ᴘᴀᴄᴋɴᴀᴍᴇ>|<ᴀᴜᴛʜᴏʀ>
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ⚔️ 𝐑𝐏𝐆 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴀꜰᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀʟ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀɪᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀɪʟʏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʟᴀɪᴍ
*. ⋅⊰ꕤ ┆* ${_p}ʜᴇᴀʟ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴇᴠᴇʟᴜᴘ
*. ⋅⊰ꕤ ┆* ${_p}ᴍɪɴᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴍʏɴꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʀᴏꜰɪʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴘᴀɪʀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴀϙᴜᴇᴀʀ \`@ᴜꜱᴇʀ\`
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴀɢᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛʀᴀɴꜱꜰᴇʀ \`ᴛɪᴘᴏ ᴄᴀɴᴛɪᴅᴀᴅ @ᴛᴀɢ\`
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇɢ
*. ⋅⊰ꕤ ┆* ${_p}ᴡᴏʀᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪᴍɪᴛ \`@ᴜꜱᴇʀ\`
*. ⋅⊰ꕤ ┆* ${_p}ʙᴜʏ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇʟʟ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🎶 𝐀𝐔𝐃𝐈𝐎𝐒 - 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀss
*. ⋅⊰ꕤ ┆* ${_p}ʙʟᴏᴡɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇᴇᴘ
*. ⋅⊰ꕤ ┆* ${_p}ᴇᴀʀʀᴀᴘᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɴɪɢʜᴛᴄᴏʀᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴠᴇʀꜱᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴏʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱʟᴏᴡ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴍᴏᴏᴛʜ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴜᴘᴀɪ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🧰 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒  :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴇɴᴠɪᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴄᴏʀᴛᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴇᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅʀᴏᴘᴍᴀɪʟ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀᴋᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
*. ⋅⊰ꕤ ┆* ${_p}ɴᴏᴡᴀ
*. ⋅⊰ꕤ ┆* ${_p}ǫʀᴄᴏᴅᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴘᴏɪʟᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴀᴅǫʀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴛʏʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛʀᴀᴅᴜᴄɪʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏᴅᴇꜱɪᴅɪᴏᴍᴀꜱ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🍥 𝐀𝐍𝐈𝐌𝐄 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴀɴɪᴍᴇʟɪɴᴋ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀɴᴀʀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʜᴜꜱʙᴜ
*. ⋅⊰ꕤ ┆* ${_p}ᴋᴀɴɴᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇɢᴜᴍɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ɴᴇᴋᴏ
*. ⋅⊰ꕤ ┆* ${_p}ꜱʜᴏᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴡᴀɪꜰᴜ
*. ⋅⊰ꕤ ┆* ${_p}ᴇʟᴀɪɴᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴀɴɪᴍᴇɪɴꜰᴏ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴏʟɪᴄᴇ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🍷 𝐂𝐑𝐄𝐀𝐃𝐎𝐑/𝐀 👑 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴜᴛᴏᴀᴅᴍɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀᴄᴋᴜᴘ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇꜱᴘᴀʟᴅᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏᴘɪᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀɴᴄʜᴀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʙʀᴏᴀᴅᴄᴀꜱᴛɢʀᴏᴜᴘ <ᴛᴇᴋꜱ>
*. ⋅⊰ꕤ ┆* ${_p}ʙᴄɢᴄ <ᴛᴇᴋꜱ>
*. ⋅⊰ꕤ ┆* ${_p}ʙʟᴏᴄᴋ
*. ⋅⊰ꕤ ┆* ${_p}ᴜɴʙʟᴏᴄᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʙʟᴏᴄᴋʟɪꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʟᴇᴀʀᴛᴍᴘ
*. ⋅⊰ꕤ ┆* ${_p}ᴅꜱᴏᴡɴᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}$ ᴏ => ᴏ >
*. ⋅⊰ꕤ ┆* ${_p}ɢᴇᴛᴘʟᴜɢɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴊᴏɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴏᴜᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴇᴀᴠᴇɢᴄ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴀʟɪʀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛʙᴏᴛɴᴀᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇꜱᴛᴀʀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴀᴠᴇᴘʟᴜɢɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴜɴʙᴀɴᴜꜱᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴜᴘᴅᴀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴄᴛᴜᴀʟɪᴢᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴇɴᴀʙʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅɪꜱᴀʙʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀᴇᴀʀɢᴄ <ɴᴏᴍʙʀᴇ>
*. ⋅⊰ꕤ ┆* ${_p}ᴜɴʙᴀɴᴄʜᴀᴛ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🖼️ 𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ɢɪᴍᴀɢᴇ
*. ⋅⊰ꕤ ┆* ${_p}ɪᴍᴀɢᴇɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴘɪɴᴛᴇʀᴇꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴀɴɪᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇᴍᴇ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🪂 𝐈𝐍𝐈𝐂𝐈𝐎 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴅꜱ
*. ⋅⊰ꕤ ┆* ${_p}ꜰɪxᴍɢᴇꜱᴘᴇʀᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪꜱᴛᴀꜰᴀᴋᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇɴᴜ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇɴᴜ2
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴜᴅɪᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴘɪɴɢ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴘᴏʀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇǫᴜᴇꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴘᴇᴇᴅᴛᴇꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴇꜱᴛᴀᴅᴏ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴛᴀᴛᴜꜱ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🗃️ 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴛᴀʟꜰ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴄᴍᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴄᴍᴅ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪꜱᴛᴄᴍᴅ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🥵 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎 +𝟏𝟖 :･ﾟ✧:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ᴄʜɪɴᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴠɪᴇᴛɴᴀᴍɪᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴀɪʟᴀɴᴅᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴᴅᴏɴᴇꜱɪᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴊᴀᴘᴏɴᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏʀᴇᴀɴᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴀʟᴀʏᴀ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

`.trim()
  
let vid = [
'https://telegra.ph/file/991f743c25817e4b94db5.mp4',
'https://telegra.ph/file/a45d4c28a7b57bf2b4e5c.mp4'
].getRandom()
  
await conn.sendMessage(m.chat, { video: { url: vid }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: m })
}

//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
handler.command = ['help', 'menucompleto', 'allmenu'] 
handler.register = true
export default handler
