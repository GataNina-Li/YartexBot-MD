var handler = async (m, { conn, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*⚠️ RESPONDE AL VIDEO O AUDIO QUE DESEE CONVERTIR A NOTA DE VOZ*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
if (!media && !/audio/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
if (!audio.data && !/video/.test(mime)) throw '*⚠️ OCURRIÓ UN ERROR, VUELVA A INTENTARLO*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['convertidores']
handler.command = /^to(vn|(ptt)?)$/i
handler.diamond = true
handler.register
export default handler
