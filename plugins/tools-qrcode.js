import { toDataURL } from 'qrcode'

var handler = async (m, { text, conn }) => {

if (!text) return conn.reply(m.chat, `🎌 *Ingrese el texto que quiere convertir a código qr*\n\nEjemplo, !qrcode ${md}`, m, fake, )
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '🚩 *Código QR*', m)

}
handler.help = ['qrcode']
handler.tags = ['tools']
handler.command = /^qrcode$/i

handler.register = true
handler.limit = true

export default handler
