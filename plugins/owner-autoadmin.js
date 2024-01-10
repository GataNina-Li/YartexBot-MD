var handler = async (m, { conn, isAdmin) => {

if (m.fromMe) return
if (isAdmin) return conn.reply(m.chat, '✅📌 *USTED YA ES ADMIN*', m, fake, )

try {

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')

} catch {

await conn.reply(m.chat, '🏷️ *Ocurrió un fallo*', m, fake, )}

}
handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = /^autoadmin|tenerpoder$/i

handler.rowner = true
handler.group = true
handler.botAdmin = true

export default handler
