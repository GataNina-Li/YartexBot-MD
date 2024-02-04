import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `🎌 *Escriba el título de algún vídeo de Youtube*\n\nEjemplo, !${command} NovaBot`, m, fake, )

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `⬡ *Título:* ${v.title}
⬡ *Enlace:* ${v.url}
⬡ *Duración:* ${v.timestamp}
⬡ *Subido:* ${v.ago}
⬡ *Vidtas:* ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')

await conn.sendUrl(m.chat, teks, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: tes[0].thumbnail, thumbnail: tes[0].thumbnail, title: 'Resultados Encontrados 🔎'}})

}
handler.help = ['ytsearch']
handler.tags = ['internet']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i

handler.register = true
handler.limit = true

export default handler
      
