var handler = async (m, { conn, command }) => {

if (command == 'cuentas' || command == 'cuentasoficiales' || command == 'cuentasof') {
let str = `🚩 *CUENTAS*

⬡ *Github*
${md}

⬡ *Instagram*
${ig}

⬡ *YouTube*
${yt}

⬡ *WhatsApp Bot*
${linkwabot}

⬡ *Email*
${email}`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
}

if (command == 'grupos') {
let text = `🚩 *Grupos oficiales*

⬡ *CuriosityBot-MD*
${nn}

⬡ *Multi Bots*
${nnnn}

⬡ *NovaBot - CuriosityBot*
${nnnnn}`

conn.reply(m.chat, text, m, fake, )
}

}
handler.help = ['cuentasoficiales', 'cuentasofc', 'cuentas', 'grupos']
handler.tags = ['info']
handler.command = /^cuentasoficiales|cuentasofc|cuentas|grupos$/i

handler.register = true

export default handler
