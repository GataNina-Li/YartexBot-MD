import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

var handler = async (m, { conn, args, command }) => {

if (!args[0]) {
return conn.reply( m.chat, `🎌 *Ingrese un enlace de YouTube*\n\nEjemplo: !${command} https://youtu.be/85xI8WFMIUY`, m, fake, )
}
m.react('⏰')

try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
let yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
let dl_url = await yt.video[q].download()
let ttl = await yt.title
let size = await yt.video[q].fileSizeH
m.react('✅')

  
await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*Título*\n${ttl}\n\n*Peso*\n${size}`, thumbnail: await fetch(yt.thumbnail),}, { quoted: m })
} catch {
await conn.reply(m.chat, `🚩 *Ocurrió un error*`, m, fake, )
m.react('❌')
}

}
handler.help = ['ytv']
handler.tags = ['descargas']
handler.command = /^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i

handler.register = true
handler.limit = true

export default handler
