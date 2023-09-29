import yts from 'yt-search'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `*⚠️ ESCRIBA EL NOMBRE DE UN VIDEO O UN CANAL DE YOUTUBE*`, fakeimg,  m)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) { 
case 'video': return `📑 *TÍTULO:* ${v.title}
🔗 *ENLACE:* ${v.url}
⏰ *DURACIÓN:* ${v.timestamp}
🔎 *SUBIDO:* ${v.ago}
👀 *VISTAS:* ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')
conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['internet:']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
export default handler
      
