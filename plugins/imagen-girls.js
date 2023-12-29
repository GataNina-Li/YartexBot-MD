import fetch from 'node-fetch'

var handler = async (m, {command, conn}) => {

if (command == 'china') {
let china = await fetch(`https://aemt.me/china`)
conn.sendMessage(m.chat, {image: china, caption: `*🇨🇳 China*`.trim()}, {quoted: m})
}

if (command == 'vietnamita') {
let vietnamita = await fetch(`https://aemt.me/vietnam`)
conn.sendMessage(m.chat, {image: vietnamita, caption: `*🇻🇳 Vietnamita*`.trim()}, {quoted: m})
}

if (command == 'tailandes') {
let tailandes = await fetch(`https://aemt.me/thailand`)
conn.sendMessage(m.chat, {image: tailandes, caption: `*🇹🇭 Tailandes*`.trim()}, {quoted: m})
}

if (command == 'indonesia') {
let indonesia = await fetch(`https://aemt.me/indonesia`)
conn.sendMessage(m.chat, {image: indonesia, caption: `*🇮🇩 Indonesia*`.trim()}, {quoted: m})
}

if (command == 'japones') {
let japones = await fetch(`https://aemt.me/japan`)
conn.sendMessage(m.chat, {image: japones, caption: `*🇯🇵 Japonés*`.trim()}, {quoted: m})
}

if (command == 'coreana') {
let coreana = await fetch(`https://aemt.me/korea`)
conn.sendMessage(m.chat, {image: coreana, caption: `*🇰🇷 Coreana*`.trim()}, {quoted: m})
}

if (command == 'malaya') {
let malaya = await fetch(`https://aemt.me/malaysia`)
conn.sendMessage(m.chat, {image: malaya, caption: `*🇲🇾 Malaya*`.trim()}, {quoted: m})
}

if (command == 'mexicana') {
let m = 'https://telegra.ph/file/30e33124729bb2d935d4a.jpg'; let me = 'https://telegra.ph/file/a2f34504b9e5887e7a145.jpg'; let mex = 'https://telegra.ph/file/088a10b71a7d64e210383.jpg'; let mexi = 'https://telegra.ph/file/adccecdbf1498ac480442.jpg'; let mexic = 'https://telegra.ph/file/e0cf7b92178fe644bbbfb.jpg'
var mexicanas = [m, me, mex, mexi, mexic]
let aa = mexicanas.getRandom
conn.sendMessage(m.chat, {image: {url: aa}, caption: `*🇲🇽 Mexicana*`.trim()}, {quoted: m})
}

}
handler.help = ['china', 'vietnamita', 'tailandes', 'indonesia', 'japones', 'coreana', 'malaya']
handler.command = ['china', 'mexicana', 'vietnamita', 'tailandes', 'indonesia', 'japones', 'coreana', 'malaya']
handler.tags = ['nsfw']

export default handler
