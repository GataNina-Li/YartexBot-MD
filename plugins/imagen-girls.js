import axios from 'axios'
import fetch from 'node-fetch'

var handler = async (m, {command, conn}) => {

if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❗ 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*';

if (command == 'china') {
let res = await fetch(`https://aemt.me/china`)

//let res = await conn.getFile(`https://aemt.me/china`)
conn.sendMessage(m.chat, {image: res, caption: `_`.trim()}, {quoted: m});
}

}
handler.help = ['china']
handler.command = ['china']
handler.tags = ['nsfw']

export default handler
