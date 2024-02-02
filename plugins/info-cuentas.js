var handler = async (m, { conn, command }) => {

let str = `🚩 *CUENTAS*

⬡ *Github*
${md}

⬡ *Instagram*
${ig}

⬡ *YouTube*
${yt}`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: 'CURIOSITY - CUENTAS', thumbnailUrl: 'https://telegra.ph/file/02c0a5281854538488c4c.jpg', sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
                    
}
handler.tags = ['main']
handler.command = /^cuentasoficiales|cuentasofc|cuentas$/i
handler.exp = 35
handler.register = true
export default handler
