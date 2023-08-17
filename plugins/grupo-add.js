let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `*⚠️ ESTE COMANDO ESTA RESTRINGIDO POR MI PROPIETARIO*`, fkontak, m) 
if (!text) throw `*⚠️ INGRESE EL NÚMERO DE LA PERSONA QUE QUIERE AÑADIR*\n\n💡 EJEMPLO\n*${usedPrefix + command}* 52999999999`
if (text.includes('+')) throw  `*⚠️ INGRESE EL NÚMERO TODO JUNTO SIN EL (+)*`
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
await conn.reply(text+'@s.whatsapp.net', `*💌 Hola! soy CuriosityBot-MD, Una persona te a invitado a su grupo.*\n\n*🪀 LINK*\n${link}`, m, {mentions: [m.sender]})
m.reply(`*@${who.split`@`[0]}*\n*Enviando invitacion a su privado...*`) 

}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
 
