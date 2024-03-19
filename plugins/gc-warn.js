const handler = async (m, { conn, text, command, usedPrefix }) => {
    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0] ?
            m.mentionedJid[0] :
            m.quoted ?
            m.quoted.sender :
            text;
    } else who = m.chat;

    const user = global.db.data.users[who];

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '🚩 No puedo advertir al bot', m);
    }

    user.warn += 1;

    const msgtext = text || 'Sin motivo';
    const sdms = msgtext.replace(/@\d+-?\d* /g, '');
    const warntext = `*❌ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝚄𝙽𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙿𝙰𝚁𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝚁 𝙰𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} @0*`;

    await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} 𝚁𝙴𝙲𝙸𝙱𝙸𝙾 𝚄𝙽𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾!\nMotivo: ${sdms}\n*ADVERTENCIAS ${user.warn}/4*`, null, { mentions: [who] });

    if (user.warn >= 4) {
        user.warn = 0;
        await m.reply(`𝚃𝙴 𝙻𝙾 𝙰𝙳𝚅𝙴𝚁𝚃𝙸 𝚅𝙰𝚁𝙸𝙰𝚂 𝚅𝙴𝙲𝙴𝚂!!\n*@${who.split`@`[0]}* 𝚂𝚄𝙿𝙴𝚁𝙰𝚂𝚃𝙴 𝙻𝙰𝚂 *4* 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰𝚂, 𝙰𝙷𝙾𝚁𝙰 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾/𝙰 👽`, null, { mentions: [who] });
        await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
    }

    return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;