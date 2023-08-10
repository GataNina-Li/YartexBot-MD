
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 El grupo no admite contenido +18\n\nPara habilitar escriba\n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 15) throw `😐 ᴇʀᴇs ᴍᴇɴᴏʀ ᴅᴇ ᴇᴅᴀᴅ! ᴠᴜᴇʟᴠᴇ ᴄᴜᴀɴᴅᴏ ᴛᴇɴɢᴀs ᴍᴀs ᴅᴇ 15 ᴀñᴏs`
  if (!text) throw `✳️ Para buscar\n📌 Use : *${usedPrefix + command} <search>*\n\nPara descargar desde URL:\n📌Use : *${usedPrefix + command} <url>*`
    
    m.react('🥵') 
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ Ingrese un link de *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
 ≡  *xɴxx ᴅʟ*
 
🔸️ *📌 ᴛɪᴛᴜʟᴏ*: ${xn.result.title}
🔸️ *⌚ ᴅᴜʀᴀᴄɪᴏɴ:* ${xn.result.duration}
🔸️ *🎞 ️ᴄᴀʟɪᴅᴀᴅ:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 Error : intenta mas tarde`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Titulo* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`❌️ Error: intenta con otro`)
               }
    }
}
handler.help = ['xnxx'] 
handler.tags = ['nsfw']
handler.command = ['xnxxsearch', 'xnxxdl', 'xnxx'] 
handler.diamond = 2
handler.premium = false
handler.register = true

export default handler
