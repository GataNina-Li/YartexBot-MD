import { areJidsSameUser } from '@whiskeysockets/baileys'
let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `*🌟 ESTE GRUPO ES ACTIVO NO TIENE FANTASMAS :D*`, m) 
m.reply(`*⚠️ REVISIÓN DE INACTIVOS ⚠️*\n\n*📑 GRUPO:* ${await conn.getName(m.chat)}\n*🪁 MIEMBROS DEL GRUPO:* ${sum}\n\n*👻 LISTAS DE FANTASMA 👻*\n${sider.map(v => ' ┣❥ @' + v.replace(/@.+/, '')).join('\n')}\n\n*📝 NOTA: Esto no es al 100% acertado, el bot inicia el conteo de mensajes a partir de que se active en este número*`, null, { mentions: sider }) 
break   
case "kickfantasmas":  
if(total == 0) return conn.reply(m.chat, `*🌟 ESTE GRUPO ES ACTIVO NO TIENE FANTASMAS :D*`, m) 
await m.reply(`*⚠️ ᴇʟɪᴍɪɴᴀᴄɪᴏɴ ᴅᴇ ɪɴᴀᴄᴛɪᴠᴏs ⚠️*\n\n*ɢʀᴜᴘᴏs: ${await conn.getName(m.chat)}*\n*ᴘᴀʀᴛɪᴄɪᴘᴀʀᴛᴇ: ${sum}*\n\n*[ 👻 ғᴀɴᴛᴀsᴍᴀs ᴇʟɪᴍɪɴᴀᴅᴏ 👻 ]*\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*ᴇʟ ʙᴏᴛ ᴇʟɪᴍɪɴᴀʀᴀ  ʟᴀ ʟɪsᴛᴀ ᴍᴇɴᴄɪᴏɴᴀᴅᴀ,  ᴇᴍᴘᴇᴢᴀᴅᴏ ᴇʟ 20 sᴇɢᴜɴᴅᴏ,  ʏ ᴄᴀᴅᴀ 10 sᴇɢᴜɴᴅᴏs ᴇʟɪᴍɪɴᴀʀᴀ  ᴜɴ ɴᴜᴍᴇʀᴏ*`, null, { mentions: sider }) 
await delay(1 * 10000)
let chat = global.db.data.chats[m.chat]
chat.welcome = false
try{
       
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
{
let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedGhost.concat(res)
await delay(1 * 10000)
}} finally{
chat.welcome = true
}
break            
}}
handler.tags = ['group']
handler.command = /^(fantasmas|kickfantasmas)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
