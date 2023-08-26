let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[⚠️] ESCRIBE EL REPORTE*\n\n💡 EJEMPLO\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*`
if (text.length < 8) throw `⚠️ *Mínimo 10 caracteres para hacer El Reporte.*`
if (text.length > 1000) throw `⚠️ *Máximo 1000 caracteres para hacer El Reporte.*`
let teks = `*⚠️ REPORTE ⚠️*\n*📞 NÚMERO*\nWa.me/${m.sender.split`@`[0]}\n*📝 MENSAJE*\n${text}`
conn.reply('5214531173598@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`*[⚠️] Exito el reporte ha sido enviado a mí Creadora. Tendrá una respuesta pronto. Si se detecta que el reporte es Falso será Ignorado el reporte.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.exp = 100 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
