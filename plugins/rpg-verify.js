import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => yartexImg.getRandom())

if (user.registered === true) return conn.sendMessage(m.chat, { text: `${dis}Ya esta registrado como *${user.name}*\n\n Si desea hacer un nuevo registro ✨ debe de usar el comando:\n*${usedPrefix}delregistro* \`Número de serie\`\n\n🙂 Si no conoce su número de serie, use el comando:\n*${usedPrefix}numserie*`, ...fake }, { quoted: m })
//conn.reply(m.chat, `${dis}Ya esta registrado como *${user.name}*\n\n Si desea hacer un nuevo registro ✨ debe de usar el comando:\n*${usedPrefix}delregistro* \`Número de serie\`\n\n🙂 Si no conoce su número de serie, use el comando:\n*${usedPrefix}numserie*`, m, fake) 
if (!Reg.test(text)) return conn.reply(m.chat, `${dis}\`Uso correcto del comando:\`\n*${usedPrefix + command}* nombre.edad\n\n🩷 *Ejemplo:*\n*${usedPrefix + command}* GataDios.20`, m)
let [_, name, splitter, age] = text.match(Reg)
if (!name) return conn.reply(m.chat, `🫠 *No hemos econtrado su nombre, intente de nuevo.*`, m)
if (!age) return conn.reply(m.chat, `🤔 *No hemos econtrado su edad, intente de nuevo.*`, m)
if (name.length >= 31) return conn.reply(m.chat, `😩 *Use un nombre más corto por favor.*`, m)
age = parseInt(age)
if (age >= 61) return conn.reply(m.chat, `🤷‍♀️ *Use una edad más joven por favor.*`, m)
if (age <= 10) return conn.reply(m.chat, `😆 *Use una edad mayor por favor.*`, m)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
m.react('✨') 
await conn.sendMessage(m.chat, { image: { url: pp }, caption: `*║⫘⫘⫘⫘⫘⫘✨*
> *${dis}ＲＥＧＩＳＴＲＯ*
*║ .・゜゜・・゜゜・．*
*║* 💠 *Nombre* ${name}
*║* 💠 *Edad* ${age} años
*║* 💠 *Número de serie* \`${sn}\`
*║⫘⫘⫘⫘⫘⫘✨*\n\n${wm2}`, mentions: [m.sender], ...fake }, { quoted: m })
  
}
handler.command = /^(ver(ify|ificar)|reg(istrar)?)$/i
export default handler
