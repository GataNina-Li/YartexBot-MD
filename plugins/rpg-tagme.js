var handler = async (m, { conn, text }) => {

let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
conn.reply(m.chat, tag, m, { contextInfo: { mentionedJid }})

}
handler.help = ['tagme']
handler.tags = ['rg']
handler.command = /^tagme$/i
handler.group = false

export default handler