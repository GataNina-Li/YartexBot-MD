var handler = async (m, {conn, text, usedPrefix, command}) => {

global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) return conn.reply(m.chat, '🎌 *Responda a un sticker o una imagen*', m, fake, )
if (!m.quoted.fileSha256) return conn.reply(m.chat, '🚩 *Solo puedes asignar comandos a stickers e imágenes*', m, fake, )
if (!text) return conn.reply(m.chat, `🎌 *Texto faltante*\n\nUso correcto:\n${usedPrefix + command} *<texto> <responder a sticker>*\n\nEjemplo, ${usedPrefix + command} *<!menu> <responder a sticker>*`, m, fake, )
  
const sticker = global.db.data.sticker
const hash = m.quoted.fileSha256.toString('base64')

if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '🚩 *¡Solo mi propietario puede usar esta función!*', m, fake, )
sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false}
conn.reply(m.chat, `✅ *Guardado correctamente*`, m, fake, )
}

handler.tags = ['database']
handler.help = ['setcmd']
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']

export default handler
