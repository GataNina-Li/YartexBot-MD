import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
if (!global.db.data.chats[m.chat].nsfw) throw `🚫 El grupo no admite contenido +18\n\nPara habilitar escriba \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 15) throw m.reply(`😐 ᴇʀᴇs ᴍᴇɴᴏʀ ᴅᴇ ᴇᴅᴀᴅ! ᴠᴜᴇʟᴠᴇ ᴄᴜᴀɴᴅᴏ ᴛᴇɴɢᴀs ᴍᴀs ᴅᴇ 15 ᴀñᴏs`)
   
m.react('🥵') 
let res = (await axios.get(`https://nekobot.xyz/api/image?type=yaoi`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m)
//conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]], m)    
}
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.tags = ['anime']
export default handler
