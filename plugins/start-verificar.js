import { generate, generateV1, generateV2, generateV3 } from "../lib/captcha.js"
import { createHash, randomBytes } from "crypto"
import fetch from "node-fetch"
import _ from "lodash"
const Reg = /\|?(.*)([^\w\s])([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => yartexImg.getRandom())
  
if (db.data.database.registro[m.sender]) {
return await conn.reply(m.sender, "⚠️ Aún estás en el proceso de registro. ¡Termínalo primero!", db.data.database.registro[m.sender].msg)
}
if (user.banned) {
return await conn.reply(m.chat, `🚫 Has sido bloqueado.\n¿Quieres eliminar el bloqueo? Escribe *${usedPrefix}unban <NÚMERO>*`, m)
}
if (user.registered) {
return await conn.reply(m.chat, `✅ Ya estás registrado.\n¿Quieres registrarte de nuevo? Escribe *${usedPrefix}unreg <NÚMERO DE SERIE>*`, m)
}
const edadRandom = _.random(1, 100)
const formatoIncorrecto = `⚠️ ¡Formato incorrecto!\n\n📌 Usa el comando de esta manera: *${usedPrefix + command} nombre.edad*\n\n📝 Ejemplo: *${usedPrefix + command}* ${m.sender.split("@")[0]}.${edadRandom}`

if (!Reg.test(text)) { 
console.log('Prueba')
let nombre = await conn.getName(m.sender) || await generarNombreRandom()
const secciones = [{
title: `🔢 Elige tu Edad`,
rows: [{
title: "🎲 Edad Aleatoria",
id: usedPrefix + command + ` ${nombre}.${_.random(10, 60)}`
}]
}, {
title: `🧓 Mayor de Edad`,
rows: generarEdades(21, 60).map(age => ({
title: `${age} Años`,
id: usedPrefix + command + ` ${tuNombre}.${age}`
}))
}, {
title: `👶 Menor de Edad`,
rows: generarEdades(9, 20).map(age => ({
title: `${age} Años`,
id: usedPrefix + command + ` ${tuNombre}.${age}`
}))
}]
const mensajeLista = {
text: "Por favor elige tu edad en los botones de abajo...",
footer: formatoIncorrecto,
title: `📝 Registro`,
buttonText: "Elige Edad",
sections: secciones
}
return await conn.sendList(m.chat, mensajeLista.title, mensajeLista.text, mensajeLista.footer, mensajeLista.buttonText, null, secciones, m)
}  
let [, name, , age] = text.match(Reg)
if (!name) {
return await conn.reply(m.chat, "⚠️ El nombre no puede estar vacío. Usa solo letras y números.", m)
}
if (!age) {
return await conn.reply(m.chat, "⚠️ La edad no puede estar vacía. Solo ingresa números.", m)
}
age = parseInt(age)
if (age > 99) {
return await conn.reply(m.chat, "⚠️ Tu edad es muy avanzada. El máximo es 99 años.", m)
}
if (age < 5) {
return await conn.reply(m.chat, "⚠️ Tu edad es muy baja. El mínimo es 5 años.", m)
}
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let caption = `🎉 *¡Felicidades! Te has registrado con éxito.*\n\n📛 *Nombre:* ${name}\n🎂 *Edad:* ${age} años\n🔑 *Número de Serie (SN):* ${sn}\n\n🔓 Tus datos están seguros en nuestra base de datos y ahora puedes usar todas las funciones disponibles para usuarios verificados.`
try {
const { image, otp, verified } = await createOtpCanvas("Éxito", sn.replace(/\D/g, ""))
let confirm = "📝 Responde este mensaje con el código OTP que aparece en la imagen."
let txt = `📝 *Proceso de Verificación* 📝\n\n@${m.sender.split("@")[0]}\n${confirm}\n\n_(El código OTP es de un solo uso)_`
let msg = await conn.sendMessage(m.sender, { image: image, caption: txt, mentions: [m.sender] }, { quoted: m })

// Si el tiempo se agota, se limpian los datos de registro
setTimeout(() => {
user.name = ""
user.age = 0
user.registered = false
user.OTP = "" 
conn.sendMessage(m.sender, { delete: msg.key })
}, 30000)

await conn.reply(m.chat, "📨 El formulario de verificación se ha enviado a tu chat privado. ¡Revísalo!", m)
} catch (e) {
user.name = ""
user.age = 0
user.registered = false
user.OTP = "" 
console.error(e)
await conn.reply(m.chat, "⚠️ Ocurrió un error al enviar el formulario de verificación. Intenta de nuevo más tarde.", m)
}}

handler.command = /^(ver(ify|ificar)|reg(istrar)?)$/i
export default handler

async function createOtpCanvas(inSucc, seri) {
seri = seri.slice(0, 6)
try {
const captcha = await generateV2(seri) || await generateV3(seri) || await generateV1(seri) || await generate(seri)
const captchaBuffer = captcha.buffer
const securityBuffer = (await generateV2(inSucc) || await generateV3(inSucc) || await generateV1(inSucc) || await generate(inSucc))?.buffer
return { image: captchaBuffer, otp: captcha.code, verified: securityBuffer }
} catch (e) {
console.error(e)
}}

async function generarNombreRandom() {
const caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let combinacion = [...Array(5)].map(() => caracteres[_.random(0, caracteres.length - 1)]).join('')
return `Usuario#${combinacion}`
}

async function generarEdades(min, max) {
return _.range(max, min - 1, -1)  // Rango será de max a min (de mayor a menor)
}

/*import { createHash } from 'crypto' 

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => yartexImg.getRandom())

if (user.registered === true) return conn.sendMessage(m.chat, { text: `${dis}Ya esta registrado como *${user.name}*\n\nSi desea hacer un nuevo registro ✨ debe de usar el comando:\n*${usedPrefix}delregistro* \`Número de serie\`\n\n🙂 Si no conoce su número de serie, use el comando:\n*${usedPrefix}numserie*`, ...fake }, { quoted: m })
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
*║ ${dis}ＲＥＧＩＳＴＲＯ*
*║ .・゜゜・・゜゜・．*
*║* 💠 *Nombre* ${name}
*║* 💠 *Edad* ${age} años
*║* 💠 *Número de serie* \`${sn}\`
*║⫘⫘⫘⫘⫘⫘✨*`, mentions: [m.sender], ...fake }, { quoted: m })
  
}
handler.command = /^(ver(ify|ificar)|reg(istrar)?)$/i
export default handler
*/
