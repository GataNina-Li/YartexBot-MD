var handler = async (m, {conn, usedPrefix, command}) => {

if (!m.quoted) throw `*⚠️ RESPONDA A UN VÍDEO QUE DESEE CONVERTIR A GIF CON AUDIO*` 
const q = m.quoted || m
const mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*⚠️ MÍMICA ${mime} NO SOPORTADA*` 
m.reply('*🚀 C A R G A N D O*')
const media = await q.download()
conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*🚀🚀*'}, {quoted: m})

}
handler.help = ['togifaud']
handler.tags = ['transformador']
handler.command = ['togifaud']

handler.limit = true
 
export default handler