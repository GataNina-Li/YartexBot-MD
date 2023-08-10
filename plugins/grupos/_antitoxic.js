const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon/i

export async function before(m, {isAdmin, isOwner}) {
if (m.isBaileys && m.fromMe) return !0
if (!m.isGroup) return !1
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
const isToxic = toxicRegex.exec(m.text)

if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 6))
await m.reply(
`${
user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`
}, decir la palabra (${isToxic}) está prohibido en este bot *${user.warn}/6* advertencia`,
false,
{mentions: [m.sender]}
)
}

if (user.warn >= 6) {
user.warn = 0;
await m.reply(`Hola *@${m.sender.split`@`[0]}*, superaste las 6 advertencias serás eliminado de este grupo`, false, {
mentions: [m.sender],
})
user.banned = false
await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
return !1
}
