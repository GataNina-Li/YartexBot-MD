var handler = async (m, { conn, args, text, usedPrefix, command }) => {

let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let nom = conn.getName(m.sender)
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `🚩 *Esta característica esta deshabilitada*`, m, fake, )
if (!text) return conn.reply(m.chat, `🎌 *Ingrese el número de la persona que quiere añadir*\n\nEjemplo, !${command} 5217299999999`, m, fake, )
if (text.includes('+')) return conn.reply(m.chat, `🚩 *Ingrese todo el número junto sin el (+)*`, m, fake, )
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
await conn.reply(text+'@s.whatsapp.net', `🎌 *Hola! soy CuriosityBot-MD, Una persona te a invitado a su grupo*\n\nEnlace\n${link}`, m, {mentions: [m.sender]}, fake, )
conn.reply(m.chat, `🎌 *La invitación fue enviada al privado de*\n${nom}`, m, fake, ) 

}
handler.help = ['add']
handler.tags = ['grupo']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
 
