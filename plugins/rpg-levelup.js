import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import can from 'knights-canvas'

let handler = async (m, { conn }) => {

function test(num, size) {
var s = num+''
while (s.length < size) s = '0' + s
return s
}

let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let whoPP = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppBot = await conn.profilePictureUrl(whoPP, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

let image = await new can.Rank().setAvatar(ppBot).setUsername(name ? name.replaceAll('\n','') : '-').setBg('https://telegra.ph/file/3cb040ecc09693d1c21de.jpg').setNeedxp(wm).setCurrxp(`${user.exp}`).setLevel(`${user.level}`).setRank('https://i.ibb.co/Wn9cvnv/FABLED.png').toAttachment()
let data = image.toBuffer()

let { role } = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.exp, global.multiplier)) {
let { min, xp, max } = xpRange(user.level, global.multiplier)

let le = `*Nombre* ${name}

Nivel *${user.level}* 📊
XP *${user.exp - min} / ${xp}*

No es suficiente XP *${max - user.exp}* ¡De nuevo! ✨`
await conn.sendMessage(m.chat, { image: data, caption: le }, { quoted: m })
}
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {

let str = `🎊 F E L I C I T A C I O N E S 🎊 

*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🧬 Nivel anterior : ${before}
• 🧬 Nuevos niveles : ${user.level}
• 📅 Fecha : ${new Date().toLocaleString('id-ID')}

*Nota:* _Cuanto más a menudo interactúes con el bot, mayor será tu nivel_`
try {
await conn.sendMessage(m.chat, { image: data, caption: str }, { quoted: m })
} catch (e) {
m.reply(str)
}}

}
handler.help = ['levelup']
handler.tags = ['rg']
handler.command = ['nivel', 'lvl', 'levelup', 'level']

export default handler
