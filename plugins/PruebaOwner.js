//Lleva una llave "}" sino va a mandar error.

var handler = async(m, { conn, isAdmin }) => {

if (m.fromMe) return
if (isAdmin) return conn.reply(m.chat, '🚧*Soy un texto de Prueba de Owner*', m, fake, )

} catch {

await conn.reply(m.chat, '🪛 *Paso un Error* ⚙️, m, fake, )}

}
handler.help = ['Esto es prueba']
handler.tags = ['owner']
handler.command = /^Prueba|Aprueba/

handler.rowner = true
handler.group = true
handler.botAdmin = true

export default handler
