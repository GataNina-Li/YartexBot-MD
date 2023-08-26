let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*⚠️ EJEMPLO DE USO:*\n\n*${usedPrefix}promote @tag*\n*${usedPrefix}promote responder a un mensaje*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*⚠️ EL NÚMERO ES INCORRECTO, INTENTE OTRA DE NUEVO*`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `[🔰] EXITO AHORA TIENE PODER EN ESTE GRUPO`, m)
	
}}
handler.help = ['*521xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
