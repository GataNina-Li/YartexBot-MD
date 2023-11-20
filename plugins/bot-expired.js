export async function all(m) {

if (!m.isGroup)

return

let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
await conn.reply(m.chat, 'El tiempo se a acabado!! el bot abandonará el grupo👋🏻')
await conn.groupLeave(m.chat)
chats.expired = null

}

}
