var activeGroups = [];

var handler = async (m, { conn, isOwner }) => {
    if (!isOwner) return; // Solo el owner puede ejecutar esta acción

    try {
        const groupId = m.chat;
        if (activeGroups.includes(groupId)) {
            const index = activeGroups.indexOf(groupId);
            activeGroups.splice(index, 1); // Elimina el grupo de la lista de grupos activos
            await conn.reply(m.chat, '✅ *El grupo ha sido desbloqueado y el bot está activo de nuevo* 🚀', m);
        } else {
            activeGroups.push(groupId); // Agrega el grupo a la lista de grupos activos
            await conn.reply(m.chat, '🚧 *Este grupo ha sido bloqueado y el bot está inactivo* 🛑', m);
        }
    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, '🪛 *Ocurrió un error al realizar la acción* ⚙️', m);
    }
}

handler.help = ['bloqueargrupo'];
handler.tags = ['owner'];
handler.command = /^bloqueargrupo$/i;

handler.rowner = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
