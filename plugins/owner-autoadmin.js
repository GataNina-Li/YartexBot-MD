let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*[ 🍓 ] 𝙃𝙊𝙇𝘼 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝙐𝙎𝙏𝙀𝘿 𝙔𝘼 𝙏𝙄𝙀𝙉𝙀 𝙋𝙊𝘿𝙀𝙍  𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙰𝚁𝙻𝙴 𝙰𝙳𝙼𝙸𝙽*')}}
handler.tags = ['owner']
handler.command = /^autoadmin$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
