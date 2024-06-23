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

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {

let menu = `
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*
*⋅.⊹ 𐒄Ꮛ𐒐Ꮼ́ Ꮯ𐒀𐒄ᎵႱᏋᎿ𐒀 ⋅.⊹*
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ᏆΝҒϴᎡᎷᎪᏟᏆϴ́Ν *:･ﾟ✧*:･ﾟ✧*
*. ⋅⊰ꕤ ┆* ${_p}ʜᴇʟᴘ*
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
`.trim()
await conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/991f743c25817e4b94db5.mp4' }, gifPlayback: true, caption: menu }, { quoted: m })
}

//handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
handler.command = ['help', 'menucompleto', 'allmenu'] 
handler.register = true
export default handler
