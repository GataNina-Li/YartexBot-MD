/* import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

if (!db.data.chats[m.chat].nsfw && m.isGroup) throw '🎌 *Los comandos nsfw no estan permitidos*\n\nUtilice !on nsfw para activar'
  
let res = await fetch('https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_048b3b850d51')
let json = await res.json()
conn.sendFile(m.chat, json.result, null, `🥵`, null, null, { viewOnce: true }, m)

}
handler.tags = ['nsfw']
handler.command = ['vporno', 'xxxvideo']
handler.help = ['vporno', 'xxxvideo']
handler.register = true

export default handler /*
