let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `*⚠️ ETIQUETA A UNA PERSONA*`
    if (global.owner.includes(who.split`@`[0])) throw '💥 El ya es owner'
    global.owner.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} Ahora es owner 🥳!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addowner [@user]']
handler.tags = ['owner']
handler.command = /^(add|sity|\+)owner$/i

handler.owner = true

export default handler
