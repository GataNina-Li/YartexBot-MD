let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

let love = `╭━━━━━━━◇x◇━━━━━━━╮
┃ • *LOVE - CURIOSITYBOT* 🪷
┣━━━━━━━◇x◇━━━━━━━╯
┃ ┌─────⊱◈◈◈⊰─────
┃ ┃🚩 Nombre: ${name}
┃ ┃💞 Amor Por Ti Es: *${Math.floor(Math.random() * 100)}%* De *100%*
┃ └─────⊱◈◈◈⊰─────
╰━━━━━━━◇x◇━━━━━━━╯

❤️ Hay Amor, ¿debes pedirle matrimonio?`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Error Del Sistema*`, m, fake, )

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(love|amor|Love)$/i

handler.register = true

export default handler
