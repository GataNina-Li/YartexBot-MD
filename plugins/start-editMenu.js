import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, isAdmin, isOwner, isROwner, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let editMenu = global.db.data.chats[m.chat].editMenu
let hasOwnPropertyError = dis + "*No se logró aplicar los cambios, intente de nuevo.*"
  
if (m.isGroup && !isAdmin) {
return conn.reply(m.chat, dis + '*No tiene permitido usar este comando, debe de ser admin.*', m)
} else if (!m.isGroup && (!isOwner || !isROwner)) {
return conn.reply(m.chat, dis + '*No tiene permitido usar este comando, no eres dueño de este bot.*', m)
}

let seccion = [ `${cen1}𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐑 𝐌𝐄𝐍𝐔 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎${cen2}` ]
let titulo = [ "✨ EMOJIS", "🖼️ IMAGEN", "📹 VÍDEO", "🪄 DINÁMICO", "☁️ SIMPLE", "👤 MENCIÓN", "📌 TRUNCAR", "✅ VERIFICADO", "✏️ PERSONALIZAR" ]
let nombre = [ 
`༶ Actualmente: ${editMenu.emoji ? 'activado ✅' : 'desactivado ❌'}`, 
`༶ Actualmente: ${editMenu.imagen ? 'activado ✅' : 'desactivado ❌'}`, 
`༶ Actualmente: ${editMenu.video ? 'activado ✅' : 'desactivado ❌'}`, 
`༶ Actualmente: ${editMenu.dinamico ? 'activado ✅' : 'desactivado ❌'}`, 
`༶ Actualmente: ${editMenu.simple ? 'activado ✅' : 'desactivado ❌'}`, 
`༶ Actualmente: ${editMenu.mencion ? 'activado ✅' : 'desactivado ❌'}`,
`༶ Actualmente: ${editMenu.dividir ? 'activado ✅' : 'desactivado ❌'}`,
`༶ Actualmente: ${editMenu.verificado ? 'activado ✅' : 'desactivado ❌'}`,
`༶ Actualmente: ${editMenu.personalizado ? 'activado ✅' : 'desactivado ❌'}`
]
let descripción = [ 
"✩‧₊˚ Usar emojis.", 
"✩‧₊˚ Presentar sólo con imágenes.", 
"✩‧₊˚ Presentar sólo con vídeos/gif.", 
"✩‧₊˚ Presentar con imágenes y vídeos aleatorios.", 
"✩‧₊˚ Remover multimedia, y mantener texto.", 
"✩‧₊˚ Mencionar \"@\" al usuario.",
"✩‧₊˚ Aplicar \"... Leer más\" antes de los comandos.",
"✩‧₊˚ Simular mensaje verificado.",
"✩‧₊˚ Usa esta opción si desea agregar una imagen personalizada."
]
let comando = [ "editaremoji01", "editarimagen02", "editarvideo03", "editarvi04", "editarsimple05", "editarmencion06", "editardividir07", "editarverificado08", "editarpersonalizar09" ]
const sections = [
{ title: seccion[0], rows: [
{ header: titulo[0], title: nombre[0], description: descripción[0], id: usedPrefix + comando[0] },
{ header: titulo[1], title: nombre[1], description: descripción[1], id: usedPrefix + comando[1] },
{ header: titulo[2], title: nombre[2], description: descripción[2], id: usedPrefix + comando[2] },
{ header: titulo[3], title: nombre[3], description: descripción[3], id: usedPrefix + comando[3] },
{ header: titulo[4], title: nombre[4], description: descripción[4], id: usedPrefix + comando[4] },
{ header: titulo[5], title: nombre[5], description: descripción[5], id: usedPrefix + comando[5] },
{ header: titulo[6], title: nombre[6], description: descripción[6], id: usedPrefix + comando[6] },
{ header: titulo[7], title: nombre[7], description: descripción[7], id: usedPrefix + comando[7] },
{ header: titulo[8], title: nombre[8], description: descripción[8], id: `${usedPrefix + comando[8]}`.trim() }
]} 
]
const list = {
text: `✨ *¡Empieza a personalizar lo que ves en ${packname}!*\n
☆ ⌒ ★ ⌒ ☆ ⌒ ★ ⌒ ☆ ⌒ ★ ⌒ ☆
🍰 \`Continua si eres alguno de estos roles:\`
${m.isGroup ? `✪ Admin: ${isAdmin ? '✅' : '❌'}` : ''}
✪ Dueñ@: ${isOwner ? '✅' : '❌'}
✪ Bot: ${isROwner ? '✅' : '❌'}

😍 *Disfruta modificando a tú gusto.*
`,
footer: wm2,
buttonText: `⊱ VER OPCIONES ⊰`,
}
if (command === "editarmenu" || command === "editmenu") {
return await conn.sendList(m.chat, list.text, list.footer, list.buttonText, sections, null, null, fkontak)
}
  
if (command === "editaremoji01") {
if (editMenu.hasOwnProperty('emoji')) {
editMenu.emoji = !editMenu.emoji
let mensajeConfirmacion = dis + `Los emojis ✨ ahora están *${editMenu.emoji ? 'activados ✅' : 'desactivados ❌'}* para el menú completo.`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarimagen02") {
if (editMenu.hasOwnProperty('imagen')) {
editMenu.imagen = !editMenu.imagen
editMenu.video = false
editMenu.dinamico = false
editMenu.simple = false
editMenu.personalizado = false
let mensajeConfirmacion = dis + `Las imágenes 🖼️ ahora están *${editMenu.imagen ? 'activadas ✅' : 'desactivadas ❌'}* para el menú completo.`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarvideo03") {
if (editMenu.hasOwnProperty('video')) {
editMenu.video = !editMenu.video
editMenu.imagen = false
editMenu.dinamico = false
editMenu.simple = false
editMenu.personalizado = false
let mensajeConfirmacion = dis + `Los vídeos 📹 ahora están *${editMenu.video ? 'activados ✅' : 'desactivados ❌'}* para el menú completo.`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarvi04") {
if (editMenu.hasOwnProperty('dinamico')) {
editMenu.dinamico = !editMenu.dinamico
editMenu.video = false
editMenu.imagen = false
editMenu.simple = false
editMenu.personalizado = false
let mensajeConfirmacion = dis + `Menú dinámico 🪄 ${editMenu.dinamico ? '*activado* ✅ aparecerá de forma aleatoria imagen y vídeo' : '*desactivado* ❌'} para el menú completo.`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarsimple05") {
if (editMenu.hasOwnProperty('simple')) {
editMenu.simple = !editMenu.simple
editMenu.dinamico = false
editMenu.video = false
editMenu.imagen = false
editMenu.personalizado = false
let mensajeConfirmacion = dis + `Menú simple ☁️ *${editMenu.simple ? 'activado ✅' : 'desactivado ❌'}* para el menú completo.`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarmencion06") {
if (editMenu.hasOwnProperty('mencion')) {
editMenu.mencion = !editMenu.mencion
let mensajeConfirmacion = dis + `La mención 👤 se ha ${editMenu.mencion ? '*activado* ✅ para el menú completo.' : '*desactivado* ❌ para el menú completo, aparecerá el nombre de usuario pero sin mencionar.'}`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}
  
if (command === "editardividir07") {
if (editMenu.hasOwnProperty('dividir')) {
editMenu.dividir = !editMenu.dividir
let mensajeConfirmacion = dis + `Truncar 📌 menú se ha ${editMenu.dividir ? '*activado* ✅ ahora aparecerá *"... Leer más"* antes de los comandos.' : '*desactivado* ❌ ya no aparecerá *"... Leer más"*.'}`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarverificado08") {
if (editMenu.hasOwnProperty('verificado')) {
editMenu.verificado = !editMenu.verificado
let mensajeConfirmacion = dis + `El verificado ✅ en el menú completo se ha *${editMenu.verificado ? 'activado ✅' : 'desactivado ❌'}*`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarpersonalizar09") {
return conn.reply(m.chat, dis + `Use el comando *${usedPrefix}cambiarppmenu* con un enlace de imagen, o respondiendo a una imagen o sticker para definir la imagen del menú completo.\n\n> *Recomendación:* No responder a stickers animados ya que puede ocasionar error.`, m)
}

if (command === "cambiarppmenu") {
if ('personalizado' in editMenu) {
if (!text && !m.quoted) return conn.reply(m.chat, dis + `Para establecer una imagen en el menú completo debe de usar un enlace (jpg, jpeg o png) también puede responder a una imagen o sticker.\n\n> *Recomendación:* No responder a stickers animados ya que puede ocasionar error.`, m)
//console.log(editMenu)

let link, pp
let web = /https?:\/\/\S+/
let q = m.quoted ? m.quoted : m

if (text && web.test(text)) {
await IsEnlace(text).then(result => {
link = result ? text : false
pp = link
//console.log(result)
}).catch(error => {
link = false
//console.log(error)
})
}
if (link === false) {
return await conn.reply(m.chat, dis + '*El enlace proporcionado no es válido.*', m)
}
  
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) || /webp/g.test(mime)) {
try {
let buffer = await q.download()
pp = await (uploadImage)(buffer)
} catch {
pp = await webp2png(await q.download())
const imageUrl = pp
isAPNG(imageUrl).then(isAPNG => {
if (isAPNG) {
return conn.reply(m.chat, dis + '*No es posible usar el sticker animado, intente de nuevo respondiendo a un sticker estático.*', m)
}}).catch(error => {
pp = false
console.error('Error: ', error)})
}}
//console.log(pp)
editMenu.personalizado = pp
editMenu.simple = false
editMenu.dinamico = false
editMenu.video = false
editMenu.imagen = false
let mensajeConfirmacion = dis + `Menú personalizado ✏️ ${editMenu.personalizado ? '*activado* ✅ verificar los cambios en el menú completo.\n\n\`Para desactivar use otra opción de multimedia.\`' : '*desactivado* ❌'}`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

}
handler.command = /^(editarmenu|editmenu|editaremoji01|editarimagen02|editarvideo03|editarvi04|editarsimple05|editarmencion06|editardividir07|editarverificado08|editarpersonalizar09|cambiarppmenu)$/i
export default handler

async function IsEnlace(texto) {
const regexEnlace = /https?:\/\/\S+/
const match = texto.match(regexEnlace)
if (match) {
texto = match[0]
const response = await fetch(texto, { method: 'HEAD' })
const contentType = response.headers.get('content-type')
//console.log(contentType)
if (contentType && (contentType.startsWith('image/jpeg') || contentType.startsWith('image/jpg') || contentType.startsWith('image/png') || contentType.startsWith('image/webp'))) {
return true
}}
return false
}

async function isAPNG(url) {
try {
const response = await fetch(url)
if (!response.ok) {
throw new Error(`No se pudo descargar la imagen (${response.status} ${response.statusText})`)
}
const contentType = response.headers.get('content-type')
if (contentType && contentType.startsWith('image/png')) {
const buffer = await response.buffer()
const arrayBuffer = new Uint8Array(buffer)
if (hasAPNGChunks(arrayBuffer)) {
return true
}}
return false
} catch (error) {
console.error('Error al verificar APNG:', error)
return false
}}

function hasAPNGChunks(pngBytes) {
const apngSignature = [137, 80, 78, 71, 13, 10, 26, 10]
for (let i = 0; i < apngSignature.length; i++) {
if (pngBytes[i] !== apngSignature[i]) {
return false
}}
const acTLChunk = [97, 99, 84, 76]; 
for (let i = 0; i < pngBytes.length - 8; i++) {
if (pngBytes[i] === acTLChunk[0] &&
pngBytes[i + 1] === acTLChunk[1] &&
pngBytes[i + 2] === acTLChunk[2] &&
pngBytes[i + 3] === acTLChunk[3]) {
return true
}}
return false
}
