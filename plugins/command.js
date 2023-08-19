let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
        var fakec = "https://mfarels.my.id/api/fakechat-wa?nama=" + encodeURIComponent(name) + "&text=" + encodeURIComponent(text) + "&no=" + encodeURIComponent(who.split("@")[0])
        var out = await wibusoft.tools.makeSticker(fakec, {
    author: packname,
    pack: name,
    keepScale: true
})
        
        m.reply(wait)
        try {
        m.reply(out)
        } catch (e) {
        throw eror
        }
}
handler.help = ['fakechat (text)']
handler.tags = ['sticker']
handler.command = /^(fakechat)$/i

export default handler

