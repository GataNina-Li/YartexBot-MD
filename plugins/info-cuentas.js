var handler = async (m, { conn, command }) => {

let str = `🚩 *CUENTAS*

⬡ *Github*
${md}

⬡ *Instagram*
${ig}

⬡ *YouTube*
${yt}`

await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.tags = ['main']
handler.command = /^cuentasoficiales|cuentasofc|cuentas$/i
handler.exp = 35
handler.register = true
export default handler
