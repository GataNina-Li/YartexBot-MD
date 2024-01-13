import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'

var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) throw `Use example ${usedPrefix}${command} Minecraft`

let res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
let img = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, img, 'wallpaper.jpg', `🚩 *Resultado de* ${text}`, m)

}
handler.help = ['wallpaper2']
handler.tags = ['downloader']
handler.command = /^(wallpaper2?)$/i

export default handler
