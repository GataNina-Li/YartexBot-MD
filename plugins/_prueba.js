let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[⚠️] ESCRIBE EL REPORTE*\n\n💡 EJEMPLO\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*`
let teks = `- PRUEBA -\nUsuario\nWa.me/${m.sender.split`@`[0]}\n${text}`
conn.reply('5217821153974@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(` ❕ `)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.exp = 100 
handler.command = /^(prueba)$/i 
export default handler
