import fetch from 'node-fetch'

var handler = async (m, { conn, command }) => {

if (command == 'fanart') {
let fanart = await fetch(`https://api.lolhuman.xyz/api/random/art?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: fanart, caption: `*🧧 Fanart*`.trim()}, {quoted: m})
m.react('🧧')
}

if (command == 'husbu') {
let husbu = await fetch(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: husbu, caption: `*🚩 Husbu*`.trim()}, {quoted: m})
m.react('🚩')
}

if (command == 'kanna') {
let kanna = await fetch(`https://api.lolhuman.xyz/api/random/kanna?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: kanna, caption: `*🍧 Kanna*`.trim()}, {quoted: m})
m.react('🍧')
}

if (command == 'megumin') {
let megumin = await fetch(`https://api.lolhuman.xyz/api/random/megumin?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: megumin, caption: `*🍂 Megumin*`.trim()}, {quoted: m})
m.react('🍂')
}

if (command == 'neko') {
let neko = await fetch(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: neko, caption: `*😻 Neko*`.trim()}, {quoted: m})
m.react('😻')
}

if (command == 'shota') {
let neko = await fetch(`https://api.lolhuman.xyz/api/random/shota?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: neko, caption: `*⚡ Shota*`.trim()}, {quoted: m})
m.react('⚡')
}

if (command == 'waifu') {
let waifu = await fetch(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: waifu, caption: `*🍭 Waifu*`.trim()}, {quoted: m})
m.react('🍭')
}

if (command == 'elaina') {
let elaina = await fetch(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: elaina, caption: `*🍚 Elaina*`.trim()}, {quoted: m})
m.react('🍚')
}

}
handler.command = /^(fanart|husbu|kanna|megumin|neko|shota|waifu|elaina)$/i
handler.tags = ['anime']
handler.help = ['fanart', 'husbu', 'kanna', 'megumin', 'neko', 'shota', 'waifu', 'elaina']

handler.limit = true

export default handler
                 
