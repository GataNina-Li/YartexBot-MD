import fetch from 'node-fetch'

var handler = async (m, { conn, isOwner, usedPrefix, command, text, }) => {

conn.dropmail = conn.dropmail ? conn.dropmail : {}
let id = 'dropmail'

let lister = ['create', 'message', 'delete']

const [feature, inputs, inputs_, inputs__, inputs___] = text.split(' ')
if (!lister.includes(feature)) return m.reply('*❕ EJEMPLO:*\n' + usedPrefix + command + ' create\n\n*Seleccione un tipo existente*\n' + lister.map((v, index) => '  ○ ' + v).join('\n'))

if (lister.includes(feature)) {
if (feature == 'create') {
try {
let eml = await random_mail();
const timeDiff = new Date(eml[2]) - new Date();
conn.dropmail[id] = [
await m.reply('*EMAIL:*\n' + eml[0] + '\n\n' + '*ID:*\n' + eml[1] + '\n\n*Expired:*\n' + msToTime(timeDiff) + '\n\n_Ejemplo *' + usedPrefix + command + ' message* Para comprobar la bandeja de entrada_'),
eml[0],
eml[1],
eml[2],
]
} catch (e) {
        
await m.reply(eror);
}
}

if (feature == 'message') {
if (!conn.dropmail[id]) return m.reply('*⚠️ NO HAY MENSAJES, CREE UN CORREO ELECTRÓNICO PRIMERO*\n\n❕ EJEMPLO\n*' + usedPrefix + command + ' create*')

try {
const eml = await get_mails(conn.dropmail[id][2]);
const teks = eml[0].map((v, index) => {
return `*EMAIL [ ${index + 1} ]*
*De* : ${v.fromAddr}
*Para* : ${v.toAddr}

*Mensaje* : ${v.text}
*Tamaño* : ${formatSize(v.rawSize)}
*Encabezamiento* : ${v.headerSubject}
*Descarga* : ${v.downloadUrl}`.trim()
}).filter((v) => v).join('\n\n________________________\n\n');
await m.reply(teks || '*VACÍO*' + '\n\n❕ EJEMPLO: *' + usedPrefix + command + ' delete* Para eliminar correos electrónicos')
} catch (e) {
await m.reply(eror)
}
}
if (feature == 'delete') {
if (!conn.dropmail[id]) return m.reply('*⚠️ NO HAY CORREO VALIDO*')

try {
delete conn.dropmail[id];
await m.reply('*✅ CORREO ELECTRÓNICO ELIMINADO CON ÉXITO*')
} catch (e) {
await m.reply(eror)
}}}

}
handler.help = ['dropmail']
handler.tags = ['implementos']
handler.command = /^(dropmail)$/i

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100)
var seconds = Math.floor((duration / 1000) % 60)
var minutes = Math.floor((duration / (1000 * 60)) % 60)
var hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`
}

function formatSize(sizeInBytes) {
var units = ['B', 'KB', 'MB', 'GB', 'TB']
let index = 0

while (sizeInBytes >= 1024 && index < units.length - 1) {
sizeInBytes /= 1024
index++
}

return sizeInBytes.toFixed(2) + ' ' + units[index]
}

async function random_mail() {
const link = 'https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D';

try {
const response = await fetch(link)
if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`)
}

var data = await response.json()
var email = data['data']['introduceSession']['addresses'][0]['address']
var id_ = data['data']['introduceSession']['id']
var time = data['data']['introduceSession']['expiresAt']

return [email, id_, time]
} catch (error) {
console.log(error)
}
}

async function get_mails(id_) {
const link = `https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${id_}%22%7D`

try {
const response = await fetch(link)
if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}
var data = await response.json();
var inbox = data['data']['session']['mails'];

return [inbox, inbox.length]
} catch (error) {
console.log(error)
}}