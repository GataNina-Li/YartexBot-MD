import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

let handler = async(m, { conn, text, usedPrefix, command }) => {
try {
let name = conn.getName(m.sender)
let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
 
const ftrol = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: `Hola ${name}!`, orderTitle: `▮Menu ▸`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp' }}}

await conn.reply(m.chat, '╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹*\n├ ⚘݄𖠵⃕⁖𖥔.Ƈᴀʀɢᴀɴᴅᴏ,\n├Ąɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ❞ ꔷ──᜔◇⃟̣̣⃕✨\n╰ׁ̻─ׅׄ ⊹ٜ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪߭ׄ꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜ߭ׄ꒦۪ׄ߭꒷ٜׄ߭꒦', ftrol)
let str = `₊˚✦୧︰ ᴡᴇʟᴄᴏᴍᴇ ╭・❒ ୨๑
╭───╯ -*𝗛ola, ${taguser}*
╰──➤ 🍉 𒉡  𓂃 𝗦̸̷͟͞ᧉ𝐧͢𝛓ᨵ : ᯤ̸ׄ↯ׄᤷ♡

┌┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🍧⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯
├┈ ↷ *Menu*
├• ✐; ₊˚✦୧︰*Random* .
├┈・──・──・﹕₊˚ ✦・୨୧・
├ׁ̟̇❍✎ _${usedPrefix}kpop *<blackpink / exo / bts>*_
├ׁ̟̇❍✎ _${usedPrefix}cristianoronaldo_
 _${usedPrefix}messi_
├ׁ̟̇❍✎ _${usedPrefix}cat_
├ׁ̟̇❍✎ _${usedPrefix}dog_
├ׁ̟̇❍✎ _${usedPrefix}meme_
├ׁ̟̇❍✎ _${usedPrefix}itzy_
├ׁ̟̇❍✎ _${usedPrefix}blackpink_
├ׁ̟̇❍✎ _${usedPrefix}lolivid_
├ׁ̟̇❍✎ _${usedPrefix}loli_
├ׁ̟̇❍✎ _${usedPrefix}navidad_
├ׁ̟̇❍✎ _${usedPrefix}ppcouple_
├ׁ̟̇❍✎ _${usedPrefix}wpmontaña_
├ׁ̟̇❍✎ _${usedPrefix}pubg_
├ׁ̟̇❍✎ _${usedPrefix}wpgaming_
├ׁ̟̇❍✎ _${usedPrefix}wpaesthetic_
├ׁ̟̇❍✎ _${usedPrefix}wpaesthetic2_
├ׁ̟̇❍✎ _${usedPrefix}wprandom_
├ׁ̟̇❍✎ _${usedPrefix}wallhp_
├ׁ̟̇❍✎ _${usedPrefix}wpvehiculo_
├ׁ̟̇❍✎ _${usedPrefix}wpmoto_
├ׁ̟̇❍✎ _${usedPrefix}coffee_
├ׁ̟̇❍✎ _${usedPrefix}pentol_
├ׁ̟̇❍✎ _${usedPrefix}caricatura_
├ׁ̟̇❍✎ _${usedPrefix}ciberespacio_
├ׁ̟̇❍✎ _${usedPrefix}technology_
├ׁ̟̇❍✎ _${usedPrefix}doraemon_
├ׁ̟̇❍✎ _${usedPrefix}hacker_
├ׁ̟̇❍✎ _${usedPrefix}planeta_
├ׁ̟̇❍✎ _${usedPrefix}randomprofile_
├ׁ̟̇❍✎ _${usedPrefix}neko_
├ׁ̟̇❍✎ _${usedPrefix}waifu_
├ׁ̟̇❍✎ _${usedPrefix}akira_
├ׁ̟̇❍✎ _${usedPrefix}akiyama_
├ׁ̟̇❍✎ _${usedPrefix}anna_
├ׁ̟̇❍✎ _${usedPrefix}asuna_
├ׁ̟̇❍✎ _${usedPrefix}ayuzawa_
├ׁ̟̇❍✎ _${usedPrefix}boruto_
├ׁ̟̇❍✎ _${usedPrefix}chiho_
├ׁ̟̇❍✎ _${usedPrefix}chitoge_
├ׁ̟̇❍✎ _${usedPrefix}deidara_
├ׁ̟̇❍✎ _${usedPrefix}erza_
├ׁ̟̇❍✎ _${usedPrefix}elaina_
├ׁ̟̇❍✎ _${usedPrefix}eba_
├ׁ̟̇❍✎ _${usedPrefix}emilia_
├ׁ̟̇❍✎ _${usedPrefix}hestia_
├ׁ̟̇❍✎ _${usedPrefix}hinata_
├ׁ̟̇❍✎ _${usedPrefix}inori_
├ׁ̟̇❍✎ _${usedPrefix}isuzu_
├ׁ̟̇❍✎ _${usedPrefix}itachi_
├ׁ̟̇❍✎ _${usedPrefix}itori_
├ׁ̟̇❍✎ _${usedPrefix}kaga_
├ׁ̟̇❍✎ _${usedPrefix}kagura_
├ׁ̟̇❍✎ _${usedPrefix}kaori_
├ׁ̟̇❍✎ _${usedPrefix}keneki_
├ׁ̟̇❍✎ _${usedPrefix}kotori_
├ׁ̟̇❍✎ _${usedPrefix}kurumi_
├ׁ̟̇❍✎ _${usedPrefix}madara_
├ׁ̟̇❍✎ _${usedPrefix}mikasa_
├ׁ̟̇❍✎ _${usedPrefix}miku_
├ׁ̟̇❍✎ _${usedPrefix}minato_
├ׁ̟̇❍✎ _${usedPrefix}naruto_
├ׁ̟̇❍✎ _${usedPrefix}nezuko_
├ׁ̟̇❍✎ _${usedPrefix}sagiri_
├ׁ̟̇❍✎ _${usedPrefix}sasuke_
├ׁ̟̇❍✎ _${usedPrefix}sakura_
├ׁ̟̇❍✎ _${usedPrefix}cosplay_
└┄̸࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🌻⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭۫┄࣭۫┄̸࣭۫┄࣭۫┄̸࣭۫┄̸࣭۫┄̸۫┄̸࣭۫┄࣭۫╯
`.trim()
await conn.sendMessage(m.chat, { image: imagen4, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak })
} catch {
conn.reply(m.chat, '*El menú tiene un error, si el error persiste por favor reportelo al propietario*', m)
}}

handler.command = /^((a|a)a)$/i
handler.owner = true

export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


