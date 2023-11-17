import fetch from "node-fetch";
let handler = async (m, { conn, args, usedPrefix, command }) => {

  
let res = await fetch('https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_048b3b850d51')
let json = await res.json()
conn.sendFile(m.chat, json.result, null, `🥵`, null, null, {viewOnce: true}, m)
};
handler.tags = ["info"];
handler.command = handler.help = ["vporno", "xxxvideo"];
handler.register = true

export default handler;