var handler = async (m, { conn, isOwner }) => {
    if (!isOwner) return; // Solo el owner puede ejecutar esta prueba

    try {
        await conn.reply(m.chat, '🚧 *Soy un texto de Prueba de Owner* 🚀', m)
    } catch (e) {
        await conn.reply(m.chat, '🪛 *Ocurrió un error al ejecutar la prueba* ⚙️', m)
    }
}

handler.help = ['prueba']
handler.tags = ['owner']
handler.command = /^prueba$/i

handler.rowner = true
handler.group = true
handler.botAdmin = true

export default handler
