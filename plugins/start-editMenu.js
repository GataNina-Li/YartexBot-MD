import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, isAdmin, isOwner, isROwner, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let editMenu = global.db.data.chats[m.chat].editMenu
let hasOwnPropertyError = "*No se logró aplicar los cambios*"
  
if (m.isGroup && !isAdmin) {
return conn.reply(m.chat, '*No tiene permitido usar este comando, debe de ser admin*', m)
} else if (!m.isGroup && (!isOwner || !isROwner)) {
return conn.reply(m.chat, '*No tiene permitido usar este comando, no eres dueño de este bot*', m)
}

let seccion = [ 'CONFIGURACIÓN PARA EL MENU COMPLETO' ]
let titulo = [ "EMOJIS", "IMAGEN", "VÍDEO", "PRESENTACIÓN DINÁMICA", "SIMPLE", "MENCIÓN", "TRUNCAR MENÚ", "VERIFICADO", "PERSONALIZAR" ]
let nombre = [ 
`Actualmente: ${editMenu.emoji ? 'activado ✅' : 'desactivado ❌'}`, 
`Actualmente: ${editMenu.imagen ? 'activado ✅' : 'desactivado ❌'}`, 
`Actualmente: ${editMenu.video ? 'activado ✅' : 'desactivado ❌'}`, 
`Actualmente: ${editMenu.dinamico ? 'activado ✅' : 'desactivado ❌'}`, 
`Actualmente: ${editMenu.simple ? 'activado ✅' : 'desactivado ❌'}`, 
`Actualmente: ${editMenu.mencion ? 'activado ✅' : 'desactivado ❌'}`,
`Actualmente: ${editMenu.dividir ? 'activado ✅' : 'desactivado ❌'}`,
`Actualmente: ${editMenu.verificado ? 'activado ✅' : 'desactivado ❌'}`,
`Actualmente: ${editMenu.personalizado ? 'activado ✅' : 'desactivado ❌'}`
]
let descripción = [ 
"Emojis en el menú", 
"Usar sólo imágenes para el menú", 
"Usar sólo vídeos para el menú", 
"Usar Imágenes y Vídeos de forma aleatoria en el menú", 
"Omitir multimedia en el menú", 
"Mencionar \"@\" al usuario en el menú",
"Aplicar \"... Leer más\" antes de loa comandos",
"Aplicar verificado al mensaje del menú",
"Usa esta opción si quieres agregar una imagen personalizada al menú"
]
let comando = [ "editaremoji01", "editarimagen02", "editarvideo03", "editarvi04", "editarsimple05", "editarmencion06", "editardividir07", "editarverificado08", "cambiarmenu" ]
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
{ header: titulo[8], title: nombre[8], description: descripción[8], id: usedPrefix + comando[8] }
]} 
]
const list = {
text: `*Editar menú*`,
footer: wm,
buttonText: `AJUSTAR`,
}
await conn.sendList(m.chat, list.text, list.footer, list.buttonText, sections, null, null, fkontak)

if (command === "editaremoji01") {
if (editMenu.hasOwnProperty('emoji')) {
editMenu.emoji = !editMenu.emoji
let mensajeConfirmacion = `Los emojis ahora están ${editMenu.emoji ? 'activado ✅' : 'desactivado ❌'} para el menú completo`
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
let mensajeConfirmacion = `Las imágenes están ${editMenu.imagen ? 'activadas ✅' : 'desactivadas ❌'} para el menú completo`
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
let mensajeConfirmacion = `Los vídeos están ${editMenu.video ? 'activados ✅' : 'desactivados ❌'} para el menú completo`
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
let mensajeConfirmacion = `Menú dinámico ${editMenu.dinamico ? 'activado ✅ aparecerá de forma aleatoria mensajes de imagen y vídeo' : 'desactivado ❌'} para el menú completo`
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
let mensajeConfirmacion = `Menú simple ${editMenu.simple ? 'activado ✅' : 'desactivado ❌'} para el menú completo`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarmencion06") {
if (editMenu.hasOwnProperty('mencion')) {
editMenu.mencion = !editMenu.mencion
let mensajeConfirmacion = `La mención está ${editMenu.mencion ? 'activado ✅ para el menú completo' : 'desactivado ❌ para el menú completo, aparecerá el nombre de usuario sin mencionar'}`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}
  
if (command === "editardividir07") {
if (editMenu.hasOwnProperty('dividir')) {
editMenu.dividir = !editMenu.dividir
let mensajeConfirmacion = `Truncar menú se ha ${editMenu.dividir ? 'activado ✅ ahora aparecerá "... Leer más" antes de los comandos' : 'desactivado ❌ ya no aparecerá "... Leer más"'}`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "editarverificado08") {
if (editMenu.hasOwnProperty('verificado')) {
editMenu.verificado = !editMenu.verificado
let mensajeConfirmacion = `El verificado en el menú completo se ha ${editMenu.verificado ? 'activado ✅' : 'desactivado ❌'}`
global.db.data.chats[m.chat].editMenu = editMenu
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

if (command === "cambiarmenu") {
if ('personalizado' in editMenu) {
console.log(editMenu)
if (!text) return conn.reply(m.chat, `Use el comando ${usedPrefix + command} con un texto jpg, o respondiendo a una imagen o sticker para definir la imagen del menú`, m)

let link
let web = /https?:\/\/\S+/
let q = m.quoted ? m.quoted : m

if (text && web.test(text)) {
await IsEnlace(text).then(result => {
link = result ? result : false
editMenu.personalizado = link
console.log(result)
}).catch(error => {
link = false
console.log(error)
})
}
if (link === false) {
return await conn.reply(m.chat, 'El enlace proporcionado no es válido.', m)
}
  
if (!m.quoted) return conn.reply(m.chat, `Use el comando ${usedPrefix + command} con un texto jpg, o respondiendo a una imagen o sticker para definir la imagen del menú`, m)
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) || /webp/g.test(mime)) {
try {
let buffer = await q.download()
editMenu.personalizado = await (uploadImage)(buffer)
} catch {
editMenu.personalizado = await webp2png(await q.download())
}}
  
editMenu.simple = false
editMenu.dinamico = false
editMenu.video = false
editMenu.imagen = false
let mensajeConfirmacion = `Menú personalizado ${editMenu.personalizado ? 'activado ✅ verifica los cambios en el menú completo' : 'desactivado ❌'}`
global.db.data.chats[m.chat].editMenu = editMenu
console.log(editMenu)
conn.reply(m.chat, mensajeConfirmacion, m)
} else {
return conn.reply(m.chat, hasOwnPropertyError, m)
}}

}
handler.command = /^(editarmenu|editmenu|editaremoji01|editarimagen02|editarvideo03|editarvi04|editarsimple05|editarmencion06|editardividir07|editarverificado08|cambiarmenu)$/i
export default handler

async function IsEnlace(texto) {
const regexEnlace = /https?:\/\/\S+/
const match = texto.match(regexEnlace)
if (match) {
enlace = match[0]
const response = await fetch(enlace, { method: 'HEAD' })
const contentType = response.headers.get('content-type')
console.log(contentType)
if (contentType && (contentType.startsWith('image/jpeg') || contentType.startsWith('image/jpg') || contentType.startsWith('image/png') || contentType.startsWith('image/webp'))) {
return true
}}
return false
}
