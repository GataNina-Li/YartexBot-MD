import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) throw `⚠️️ *INGRESE EL LINK DE MODLATEST JUNTO AL COMANDO*`
if (!args[0].match(/latestmodapks/gi)) throw `*⚠️ LINK INCORRECTO*`

try {
  
let res = await fetch(`https://api.akuari.my.id/downloader/dlmod?link=${args[0]}`)
let json = await res.json()
await conn.reply(m.chat, `*📁 Peso:* ${json.respon.size}\n*🚀 D E S C A R G A N D O*`, m)
let { linkdl, size } = json.respon
    
conn.sendMessage(m.chat, { document: { url: linkdl }, mimetype: 'application/videos.android.package-archive', fileName: `Apk modlatest.apk` }, { quoted: m })
} catch {
throw '*⚠️ OCURRIÓ UN ERROR*' }

}
handler.help = ['dlmodlatest']
handler.tags = ['descargas']
handler.command = ['dllatest', 'dlmodlatest'] 

handler.register = true
handler.limit = true

export default handler
