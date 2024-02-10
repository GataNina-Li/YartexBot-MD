var handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
await conn.reply(m.chat, '🎌 *Hola*', m, fake, )
}

return !0 
}

export default handler
