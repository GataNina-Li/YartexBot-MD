let handler = async (m, { conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
    if (!m.quoted) throw `🫐 Etiqueta un mensaje con el comando *${usedPrefix + command}*`, m, fake, )
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj }, { quoted: fkontak })
}

handler.help = ['reenviar']
handler.tags = ['tools']
handler.command = ['reenviar']

export default handler