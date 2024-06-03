var handler = async (m, { conn, command }) => {

if (command == 'cuentas' || command == 'cuentasoficiales' || command == 'cuentasof') {
let str = `𝖡𝗂𝖾𝗇𝗏𝖾𝗇𝖽𝗂𝗈/A 𝖠 𝖫𝖺𝗌 𝖢𝗎𝖾𝗇𝗍𝖺𝗌 𝖮𝖿𝗂𝖼𝗂𝖺𝗅𝖾𝗌 😻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Github Del Bot* 🌟
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Canal Dedicado Para Yartex* 🌻
 *${channel}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Grupo Oficial De Yartex* 👑
 *${group}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Youtube* 🐈
${yt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Instagram* 🌩
${ig}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
}

if (command == 'grupos') {
let text = `🔗 *Grupo oficial*

*Yartex Bot - MD 👑*
${group}`
conn.reply(m.chat, text, m, fake, )
}

}
handler.help = ['cuentasoficiales', 'cuentasofc', 'cuentas', 'grupos']
handler.tags = ['info']
handler.command = /^cuentasoficiales|cuentasofc|cuentas|grupos$/i

handler.register = true

export default handler