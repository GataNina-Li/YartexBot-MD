let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) { 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0 
}    
await m.reply(`*⚠️ ENLACE DETECTADO ⚠️*\n\n*${await this.getName(m.sender)} 🛑ROMPISTE LAS REGLAS POR LO CUÁL SERAS ELIMINADO🛑*`)    
if (!isBotAdmin) return m.reply(`*⚠️ NO SOY ADMIN, NO PUEDO ELIMINAR INTRUSOS D:😶*`)  
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`*🛑 MI PROPIETARIO DEBE TENER EL MODO RESTRINGIDO ACTIVO🛑*`)
}
return !0
}
