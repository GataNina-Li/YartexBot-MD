/*import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
if (user.registered === true) throw `*⚠️ Ya estás registrado*\n\n¿Quiere volver a registrarse?\n\n💬 Use este comando para *eliminar su registro*\n*${usedPrefix}unreg* <Número de serie>`
if (!Reg.test(text)) throw `*⚠️ Formato incorrecto*\n\n📝 Uso del comamdo: *${usedPrefix + command} nombre.edad*\n💡 Ejemplo : *${usedPrefix + command}* ${name2}.18`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '*📝 El nombre no puede estar vacío*'
if (!age) throw '*📝 La edad no puede estar vacía*'
if (name.length >= 30) throw '*⚠️ El nombre es demasiado largo*' 
age = parseInt(age)
if (age > 100) throw '*👴🏻 Wow el abuelo quiere jugar al bot*'
if (age < 5) throw '*👀 hay un bebé jsjsj*'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
m.react('📩') 
let regbot = `🗃️ *R E G I S T R A D O* 🗃️
🪁 *Nombre:* ${name}
🎨 *Edad* : ${age} años
🥏 *Numero de serie*:
${sn}`
await m.reply(regbot)
// await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})

}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler*/
import { createHash } from 'crypto'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
  
  if (user.registered) throw `*⚠️ Ya estás registrado*\n\n¿Quiere volver a registrarse?\n\n💬 Use este comando para *eliminar su registro*\n*${usedPrefix}unreg* <Número de serie>`
  
  let [_, name, splitter, age, email, password] = text.match(Reg)
  if (!name) throw '*📝 El nombre no puede estar vacío*'
  if (!age) throw '*📝 La edad no puede estar vacía*'
  if (!email) throw '*📝 El correo electrónico no puede estar vacío*'
  if (!password) throw '*📝 La contraseña no puede estar vacía*'
  
  if (name.length >= 30) throw '*⚠️ El nombre es demasiado largo*'
  if (!emailRegex.test(email)) throw '*⚠️ Formato de correo electrónico inválido*'
  if (!passwordRegex.test(password)) throw '*⚠️ La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número*'
  
  age = parseInt(age)
  if (age > 100) throw '*👴🏻 Wow el abuelo quiere jugar al bot*'
  if (age < 5) throw '*👀 hay un bebé jsjsj*'
  
  user.name = name.trim()
  user.age = age
  user.email = email.trim()
  user.password = createHash('sha256').update(password).digest('hex')
  user.regTime = + new Date
  user.registered = true
  
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
  m.react('📩') 
  
  let regbot = `🗃️ *R E G I S T R A D O* 🗃️
🪁 *Nombre:* ${name}
🎨 *Edad* : ${age} años
📧 *Correo electrónico:* ${email}
🔒 *Contraseña:* ${'*'.repeat(password.length)}
🥏 *Numero de serie*: ${sn}`
  
  await m.reply(regbot)
  // await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: 'Registrado 📩', }})
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler

