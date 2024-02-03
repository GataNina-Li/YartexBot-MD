var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *Escriba su reporte*\n\nEjemplo, !${command} el comando !infobot no funciona`, m, fake, )
if (text.length < 10) return conn.reply(m.chat, `🚩 *Mínimo 10 caracteres para hacer el reporte*`, m, fake, )
if (text.length > 1000) return conn.reply(m.chat, `🚩 *Máximo 1000 caracteres para hacer el reporte.*`, m, fake, )

let teks = `⚠️ *Reporte* ⚠️\n\n *\nWa.me/${m.sender.split`@`[0]}\n*📝 MENSAJE*\n${text}`
conn.reply('5217294888993@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*[⚠️] Exito el reporte ha sido enviado a mí Creadora. Tendrá una respuesta pronto. Si se detecta que el reporte es Falso será Ignorado el reporte.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.exp = 100 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
