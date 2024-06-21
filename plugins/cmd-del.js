var handler = async (m, {conn, usedPrefix, text, command}) => {
  
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) return conn.reply(m.chat, `🎌 *Ingrese el código de la asignación*\n\nUtilice !listcmd`, m, fake, )

let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '🚩 *¡Solo mi propietario puede usar esta función!*', m, fake, )
delete sticker[hash]
conn.reply(m.chat, `✅ *Eliminado correctamente*`, m, fake, )

}
handler.tags = ['database']
handler.help = ['delcmd']
handler.command = ['delcmd']

handler.rowner = true

export default handler
