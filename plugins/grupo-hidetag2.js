import * as fs from 'fs' 
import { generateWAMessageFromContent } from '@whiskeysockets/baileys' 
let handler = async (m, { conn, text, participants }) => { 
let users = participants.map(u => conn.decodeJid(u.id)) 
let quoted = m.quoted ? m.quoted : m 
let mime = (quoted.msg || quoted).mimetype || '' 
let isMedia = /image|video|sticker|audio/.test(mime) 
let redes = ['https://github.com/Undefined17/CuriosityBot-MD'] 
let more = String.fromCharCode(8206) 
let masss = more.repeat(850) 
let htextos = `${text ? text : "*© CuriosityBot-MD 🚀*"}` 
if ((isMedia && quoted.mtype === 'imageMessage') && htextos) { 
var mediax = await quoted.download?.() 
conn.sendMessage(m.chat, { image: mediax, caption: htextos ,...{contextInfo:{mentionedJid:users,externalAdReply:{thumbnail:fs.readFileSync('./storage/menus/Menu1.jpg'),sourceUrl:redes[Math.floor(Math.random() * redes.length)]}}}}, {quoted: m }) 
} else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) { 
var mediax = await quoted.download?.() 
conn.sendMessage(m.chat, { video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos }) 
} else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) { 
var mediax = await quoted.download?.() 
conn.sendMessage(m.chat, { audio: mediax, ...{ contextInfo: { mentionedJid: users, externalAdReply: { body: htextos, thumbnail: fs.readFileSync('./storage/menus/Menu2.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}}, mimetype: 'audio/mp4', fileName: `Hidetag.mp3` }) 
} else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) { 
var mediax = await quoted.download?.() 
conn.sendMessage(m.chat, {sticker: mediax, ...{ contextInfo: { mentionedJid: users, externalAdReply: { body: htextos, thumbnail: fs.readFileSync('./storage/menus/Menu3.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}} }) 
} else { 
await conn.relayMessage(m.chat, {extendedTextMessage:{text: `${masss}\n${htextos}\n`, ...{ contextInfo: { mentionedJid: users, externalAdReply: { thumbnail: fs.readFileSync('./storage/menus/Menu1.jpg'), sourceUrl: redes[Math.floor(Math.random() * redes.length)] }}} 
}}, {}) 
} 
} 
  
handler.help = ['hidetag'].map(v => v + ' [mensaje]') 
handler.tags = ['group']
handler.command = /^(totag2|notify2|hidetag2)$/i 
handler.group = true 
handler.admin = true 
  
export default handler
