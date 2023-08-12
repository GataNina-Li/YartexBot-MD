var handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*⚠️ RESPONDA A UN VIDEO O NOTA DE VOS QUE DESEE CONVERTIR A AUDIO/MP3*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
if (!media && !/audio/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
if (!audio.data && !/video/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['convertidores']
handler.command = /^to(mp3|a(udio)?)$/i
handler.diamond = true
handler.register = true
export default handler
