// By https://github.com/HACHEJOTA
//
import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, participants }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()

if (command == 'sorteo') {
let start = `*❥𝗜𝗡𝗜𝗖𝗜𝗔𝗡𝗗𝗢 𝗦𝗢𝗘𝗧𝗘𝗢☙*
    
let sorteo = *_➳❥𝙴𝙻 𝙶𝙰𝙽𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝚂𝙾𝚁𝚃𝙴𝙾 𝙴𝚂: ${user(a)} ✦_*`
m.reply(start,sorteo, null, { mentions: [a]})
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })    
//conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
await m.reply(start)
await m.reply(sorteo)
catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚂𝙾 𝙼𝙰𝙻 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂𝚃𝙴 𝙴𝚂 𝚄𝙽 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix}sorteo un número virtual *', m)
}}
