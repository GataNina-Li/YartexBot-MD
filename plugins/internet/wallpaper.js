import { wallpaper } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => { 
if (!text) throw `*⚠️ INGRESE UN TEMA PARA SU WALLPAPER*\n\n❕ EJEMPLO:\n*${usedPrefix}${command}* Minecraft`
const res = await wallpaper(text)
const img = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, img, 'wallpaper.jpg', `💥 Resultados de: *${text}*`, m)
}

handler.help = ['wallpaper <query>']
handler.tags = ['internet'] 
handler.command = /^wall(paper)?q?$/i

export default handler
