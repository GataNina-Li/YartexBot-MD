/*import db from '../lib/database.js'

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, args }) => {

let users = '500'
if (!args[0]) return conn.reply(m.chat, `🎌 *Ingrese el enlace de un grupo*\n\nEjemplo, !unete ${group}`, m, fake, )
let [_, code, expired] = text.match(linkRegex) || []
if (!code) return conn.reply(m.chat, '🚩 Error, El enlace no funciona o es inválido', m, fake, )
let gpData = await conn.groupGetInviteInfo(code).catch(e => {})
try {
if (gpData.size <= users) return m.reply(m.chat, `🚩 *La cantidad mínima para unirme al grupo debe ser de ${users} participantes*`, m, fake, )
let res = await conn.groupAcceptInvite(code)
expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
conn.reply(m.chat, `${cb} se unió al grupo ${res} con éxito \n${expired ? `Durante ${expired} Hora(s)` : ''}`, m, fake, )
let chats = db.data.chats[res]
if (!chats) chats = db.data.chats[res] = {}
if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60
} catch (e) {
m.reply(m.chat, '🚩 *Ocurrió un error*', m, fake, )
}

}
handler.help = ['unete']
handler.tags = ['bot']
handler.command = /^(unete|entrabot|join)$/i

handler.limit = 10

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
*/

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

var handler = async (m, { conn, text, isMods, isOwner }) => {

let users = '500'
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
let gpData = await conn.groupGetInviteInfo(code).catch(e => {})
if (!code) return conn.reply(m.chat, `🎌 *Ingrese el enlace de un grupo*\n\nEjemplo, !unete`, m, fake, )

if ( isMods || isOwner || m.fromMe) {
m.reply(m.chat, `✅ ${cb} *Se unió al grupo*`, m, fake, )
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
if (gpData.size <= users) return m.reply(m.chat, `🚩 *La cantidad mínima para unirme al grupo debe ser de ${users} participantes*`, m, fake, )
//const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(1 * 1000)
//for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(m.chat, `🚩 *Solicitud*\n\n*Usuario*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 | 𝙂𝙍𝙊𝙐𝙋 𝙇𝙄𝙉𝙆*\n ' + link, jid)

//conn.reply(m.chat, `*✅ Su enlace se envió a Mí Propietario(a).*\n*Your link was sent to My Owner.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Su Grupo será Evaluado y Quedará a decisión de Mí Propietario(a) si  se une o no al Grupo.*\n*Your Group will be Evaluated and it will be up to My Owner if joins the Group or not.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*Your Application may be Rejected for the following Reasons:*\n*1️⃣ El Bot está Saturado.*\n*The Bot is Saturated.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n*The Bot was removed from the Group.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de\n*The Group does not comply with the Regulations of\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.*\n*The group link was restored.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *No se agrega a Grupos según Mi Propietario(a).*\n*Not added to Groups by My Owner*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*\n*The request may take hours to be answered. Please be patient. Thank you*`)
}

}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  
