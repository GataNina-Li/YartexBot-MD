import db from '../lib/database.js'

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
