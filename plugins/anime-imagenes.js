import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {

let url = 'https://api.lolhuman.xyz/api/random/art?apikey=${lolkeysapi}'
conn.sendMessage(m.chat, {image: url, caption: `*🧧 Fanart*`.trim()}, {quoted: m})

}
handler.command = /^(fanart)$/i
handler.tags = ['anime']
handler.help = ['fanart']

handler.limit = true
handler.premium = true

export default handler
