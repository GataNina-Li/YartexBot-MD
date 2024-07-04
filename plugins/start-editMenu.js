let handler = async (m, { conn, usedPrefix, command, isAdmin, isOwner, isROwner }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let editMenu = global.db.data.chats[m.chat].editMenu
if (m.isGroup && !isAdmin) {
return conn.reply(m.chat, '*No tiene permitido usar este comando, debe de ser admin*')
} else if (!m.isGroup && (!isOwner || !isROwner)) {
return conn.reply(m.chat, '*No tiene permitido usar este comando, no eres dueño de este bot*')
}

let initialSections = [
  { header: 'EMOJIS', title: "Actualmente: ", description: `Emojis en el menú completo`, id: `` },
  { header: "IMAGEN", title: "Actualmente: ", description: `Usar sólo imágenes para el menú completo`, id: `` },
  { header: "VÍDEO", title: "Actualmente: ", description: `Usar sólo vídeos para el menú completo`, id: `` },
  { header: "PRESENTACIÓN DINÁMICA", title: "Actualmente: ", description: `Usar Imágenes y Vídeos de forma aleatoria en el menú completo`, id: `` },
  { header: "SIMPLE", title: "Actualmente: ", description: `Omitir multimedia en el menú completo`, id: `` },
  { header: "MENCIÓN", title: "Actualmente: ", description: `Mencionar al usuario en el menú completo`, id: `` }
]

let listSections = [{
title: `CONFIGURACIÓN PARA EL MENÚ COMPLETO`,
rows: initialSections.map(section => ({
header: section.header,
title: section.title,
description: section.description,
id: section.id
}))
}]
await conn.sendList(m.chat, `*Editar menú*`, wm, `AJUSTAR`, listSections, fkontak)
  
}
handler.command = /^(editarmenu)$/i
export default handler
