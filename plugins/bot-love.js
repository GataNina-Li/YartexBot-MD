let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu1.jpg'

let love = `🚩 𝗨𝗡 𝗣𝗢𝗥𝗖𝗘𝗡𝗧𝗔𝗝𝗘 𝗗𝗘 𝗔𝗠𝗢𝗥

𝖤𝗅 𝖠𝗆𝗈𝗋 𝖣𝖾: 
${name}
𝖲𝗂𝖾𝗇𝗍𝖾 𝖯𝗈𝗋 𝖳𝗂 𝖴𝗇: 
*${Math.floor(Math.random() * 100)}%* 𝖣𝖾 𝖴𝗇 *100%*

🎌 𝐇𝐚𝐲 𝐀𝐦𝐨𝐫,𝐃𝐞𝐛𝐞𝐬 𝐏𝐞𝐝𝐢𝐫𝐥𝐞 𝐌𝐚𝐭𝐫𝐢𝐦𝐨𝐧𝐢𝐨?`

conn.sendMessage(m.chat,{image: {url: pp}, caption: love, mentions: [m.sender]}, {quoted: m}) 
}

handler.help = ['love  @user']
handler.tags = ['fun']
handler.command = /^(love)$/i
handler.register = true
export default handler