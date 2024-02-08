let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './Menu.png'

let love = `\t\t*🚩 𝐔𝐍 𝐀𝐌𝐎𝐑 𝐏𝐎𝐑 𝐓𝐈*

𝙴𝙻 𝙰𝙼𝙾𝚁 𝙳𝙴: ${name} 𝙿𝙾𝚁 𝚃𝙸 𝙴𝚂 𝙳𝙴: *${Math.floor(Math.random() * 100)}%* 𝑫𝒆 𝑼𝒏 *100%*
🎌 𝐇𝐚𝐲 𝐀𝐦𝐨𝐫, 𝐏𝐞𝐝𝐢𝐫 𝐄𝐥 𝐌𝐚𝐭𝐫𝐢𝐦𝐨𝐧𝐢𝐨?`

conn.sendMessage(m.chat,{image: {url: pp}, caption: love, mentions: [m.sender]}, {quoted: m}) 
}

handler.help = ['love  @user']
handler.tags = ['fun']
handler.command = /^(love)$/i
handler.register = true
export default handler