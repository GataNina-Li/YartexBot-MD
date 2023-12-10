export async function before(m, { isAdmin, isBotAdmin }) {

let name = await this.getName(m.sender)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let caption = `*⚠️ ANTI EXTRANJEROS ⚠️*\n\n${name} @${m.sender.split("@")[0]}, Adios!`.trim()
if (chat.antibule) {
if (!m.sender.startsWith('51' || '52' || '53' || '54' || '55' || '56' || '57' || '58' || '591' || '593' || '594' || '595' || '598' || '501' || '502' || '503' || '504' || '505' || '506' || '507' || '' ||  '' || '' || '' ||  )) {

conn.reply(m.chat, caption, null, m, { mentions: this.parseMention(caption) })
return this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
}
