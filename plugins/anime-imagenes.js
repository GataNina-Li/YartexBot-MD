import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {

if (command == 'fanart') {
let url = await fetch(`https://api.lolhuman.xyz/api/random/art?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: url, caption: `*🧧 Fanart*`.trim()}, {quoted: m})
}

if (command == 'husbu') {
let url2 = await fetch(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkeysapi}`)
conn.sendMessage(m.chat, {image: url2, caption: `*Bojone Gepenk 🐦*`.trim()}, {quoted: m})
}

}
handler.command = /^(fanart')$/i
handler.tags = ['anime']
handler.help = ['fanart']

handler.limit = true
handler.premium = true

export default handler
