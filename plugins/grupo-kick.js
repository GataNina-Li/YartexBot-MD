var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '🎌 *Etiqueta o responde al mensaje de la persona que quieres eliminar*', m);
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const owner = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';

    if (user === conn.user.jid || user === owner) {
        return conn.reply(m.chat, '🚩 No puedo eliminar el bot ni el creador del grupo ', m);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = /^(kick|echar|hechar|sacar|ban)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;