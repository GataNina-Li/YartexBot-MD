let handler = async (m, { conn, usedPrefix, command }) => {
//let twa = {key: {participant: "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"}, "message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us", "inviteCode": "m", "groupName": "P", "caption": wm, 'jpegThumbnail': fs.readFileSync('./storage/menus/Menu3.jpg')}}}
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
handler.tags = ['convertido']
handler.command = /^to(mp3|a(udio)?)$/i
export default handler
