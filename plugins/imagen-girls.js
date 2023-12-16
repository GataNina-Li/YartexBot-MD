import fetch from 'node-fetch'

var handler = async (m, {command, conn}) => {

if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❗ 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*';

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

}
handler.help = ['china', 'vietnamita', 'tailandes', 'indonesia', 'japones', 'coreana']
handler.command = ['china', 'vietnamita', 'tailandes', 'indonesia', 'japones', 'coreana']
handler.tags = ['nsfw']

export default handler
