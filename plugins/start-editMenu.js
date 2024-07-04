let handler = async (m, { conn, usedPrefix, command, isAdmin, isOwner, isROwner }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let editMenu = global.db.data.chats[m.chat].editMenu
if (m.isGroup && !isAdmin) {
return conn.reply(m.chat, '*No tiene permitido usar este comando, debe de ser admin*')
} else if (!m.isGroup && (!isOwner || !isROwner)) {
return conn.reply(m.chat, '*No tiene permitido usar este comando, no eres dueño de este bot*')
}

let seccion = [ 'CONFIGURACIÓN PARA EL MENU COMPLETO' ]
let titulo = [ "EMOJIS", "IMAGEN", "VÍDEO", "PRESENTACIÓN DINÁMICA", "SIMPLE", "MENCIÓN" ]
let nombre = [ "Actualmente: ", "Actualmente: ", "Actualmente: ", "Actualmente: ", "Actualmente: ", "Actualmente: " ]
let descripción = [ "Emojis en el menú completo", "Usar sólo imágenes para el menú completo", "Usar sólo vídeos para el menú completo", "Usar Imágenes y Vídeos de forma aleatoria en el menú completo", "Omitir multimedia en el menú completo", "Mencionar al usuario en el menú completo" ]
let comando = [ "m", "m", "m", "m", "m", "m" ]
let sections = Object.keys(seccion, titulo, nombre, descripción, comando).map((v, index) => ({ title: `${seccion[v]}`,
rows: [{ header: titulo[v], title: nombre[v], description: descripción[v], id: comando[v], }], }))

const listMessage = {
text: `*Editar menú*`,
footer: wm,
title: null,
buttonText: `AJUSTAR`,
sections
}

await conn.sendList(m.chat, listMessage.text, listMessage.footer, listMessage.buttonText, sections, null, null, fkontak)
  
}
handler.command = /^(editarmenu)$/i
export default handler
