//BY: VIRUZZ-OFC

var handler = async (m, { conn, text, command, usedPrefix, args }) => {

let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
let time = global.db.data.users[m.sender].wait + 40000
let textos = `🚩 *Cara o Cruz*\n\nPuedes elegir la opción usando los siguientes comandos\n\n!${command} cara\n!${command} cruz`
if (new Date - global.db.data.users[m.sender].wait < 40000) return await conn.reply(m.chat, `*🕓 𝙀𝙎𝙋𝙀𝙍𝘼 ${Math.floor((time - new Date()) / 1000)} 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎 𝘼𝙉𝙏𝙀𝙎 𝘿𝙀 𝙋𝙊𝘿𝙀𝙍 𝙑𝙊𝙇𝙑𝙀𝙍  𝘼 𝙅𝙐𝙂𝘼𝙍*\n\n*𝙒𝘼𝙄𝙏 ${Math.floor((time - new Date()) / 1000)} 𝙎𝙀𝘾𝙊𝙉𝘿𝙎 𝘽𝙀𝙁𝙊𝙍𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙋𝙇𝘼𝙔 𝘼𝙂𝘼𝙄𝙉*`, fkontak, m)
if (!args[0]) return await conn.sendMessage(m.chat, { image: { url: pp }, caption: textos, quoted: fkontak })

var astro = Math.random()
if (astro < 0.50) {
astro = 'cara'
} else if (astro > 0.50){
astro = 'cruz' 
}
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

let money0 = global.db.data.users[m.sender].exp += 30
conn.reply(m.chat, `🎌 *Ganaste*\n\nPremio: ${[money0].getRandom()} Exp ✨`, m, fake, )
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

let money0 = global.db.data.users[m.sender].exp += 30
conn.reply(m.chat, `🎌 Ganaste\n\nPremio: ${[money0].getRandom()} Exp`, m, fake, )
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money0 = global.db.data.users[m.sender].exp -= 300

m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money0 = global.db.data.users[m.sender].exp += 3
//global.db.data.users[m.sender].exp += 1000
m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].exp -= 300
m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}
}else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].exp += 100
m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].exp -= 300
m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}} else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].exp += 100
m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who)  
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].exp -= 400
m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp += 1000
let money0 = global.db.data.users[m.sender].exp += 300
m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃💰 𝙋𝙧𝙚𝙢𝙞𝙤: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
//global.db.data.users[m.sender].exp -= 300
let money0 = global.db.data.users[m.sender].exp -= 300
m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name} 𝙀𝙡𝙚𝙜𝙞𝙨𝙩𝙚: ${text}\n┃🐱 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨: ${astro}\n┃📈 𝙋𝙚𝙧𝙙𝙞𝙙𝙖: ${[money0].getRandom()} EXP\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}
global.db.data.users[m.sender].wait = new Date * 1
}}
handler.help = ['suerte']
handler.tags = ['juegos']
handler.command = /^(suerte)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
