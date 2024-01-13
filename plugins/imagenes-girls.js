import fetch from 'node-fetch'

var handler = async (m, {command, conn}) => {

if (command == 'china') {
let china = await fetch(`https://aemt.me/china`)
conn.sendMessage(m.chat, {image: china, caption: `🇨🇳 *China*`.trim()}, {quoted: m})
}

if (command == 'vietnamita') {
let vietnamita = await fetch(`https://aemt.me/vietnam`)
conn.sendMessage(m.chat, {image: vietnamita, caption: `🇻🇳 *Vietnamita*`.trim()}, {quoted: m})
}

if (command == 'tailandes') {
let tailandes = await fetch(`https://aemt.me/thailand`)
conn.sendMessage(m.chat, {image: tailandes, caption: `🇹🇭 *Tailandes*`.trim()}, {quoted: m})
}

if (command == 'indonesia') {
let indonesia = await fetch(`https://aemt.me/indonesia`)
conn.sendMessage(m.chat, {image: indonesia, caption: `🇮🇩 *Indonesia*`.trim()}, {quoted: m})
}

if (command == 'japones') {
let japones = await fetch(`https://aemt.me/japan`)
conn.sendMessage(m.chat, {image: japones, caption: `🇯🇵 *Japonés*`.trim()}, {quoted: m})
}

if (command == 'coreana') {
let coreana = await fetch(`https://aemt.me/korea`)
conn.sendMessage(m.chat, {image: coreana, caption: `🇰🇷 *Coreana*`.trim()}, {quoted: m})
}

if (command == 'malaya') {
let malaya = await fetch(`https://aemt.me/malaysia`)
conn.sendMessage(m.chat, {image: malaya, caption: `🇲🇾 *Malaya*`.trim()}, {quoted: m})
}

}
handler.help = ['china', 'vietnamita', 'tailandes', 'indonesia', 'japones', 'coreana', 'malaya']
handler.command = ['china', 'mexicana', 'vietnamita', 'tailandes', 'indonesia', 'japones', 'coreana', 'malaya']
handler.tags = ['nsfw']

handler.limit = true
handler.register = true

export default handler
