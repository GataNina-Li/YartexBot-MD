import { toDataURL } from 'qrcode'

var handler = async (m, { text, conn }) => {

if (!text) throw `*⚠️ INGRESE EL TEXTO QUE QUIERE CONVERTIR EN CÓDIGO QR*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '*🧃 CÓDIGO QR*', m)

}
handler.help = ['qrcode']
handler.tags = ['implementos']
handler.command = /^qrcode$/i

export default handler