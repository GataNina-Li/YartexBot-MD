import { createHash } from 'crypto'

var handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
//conn.sendButton(m.chat, '⬇️ *Su número de serie asignado es:* ⬇️', wm2, null, [], ['Copiar Mensaje', sn], null, m)
//conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', '⬇️ *Su número de serie asignado es:* ⬇️', 'status@broadcast')
const sections = [{
title: `Título de la sección`,
rows: [
{ header: 'Encabezado1', title: "Título1", description: 'Descripción1', id: usedPrefix + "menu" }, 
{ header: 'Encabezado2', title: "Título2", description: 'Descripción2', id: "Id2" }, 
{ header: 'Encabezado3', title: "Título3", description: 'Descripción3', id: "Id3" }, 
{ header: 'Encabezado4', title: "Título4", description: 'Descripción4', id: "Id4" }, 
]},]  
const messages = [[ // CARRUSEL 4
'Descripción de Carrusel 4',
'Footer de Carrusel 4',
'https://telegra.ph/file/7acad0975febb71446da5.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
]] /* etc... */
await conn.sendCarousel(m.chat, 'Texto', 'Footer', 'Titulo de Carrusel', messages, m) 
}
handler.command = /^(myns|ceksn|ns|numserie)$/i
handler.register = true
export default handler
