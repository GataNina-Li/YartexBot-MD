import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '*⚠️ INGRESE EL ENLACE PARA ACORTAR*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*⚠️ ERROR, INTENTE DE NUEVO*`
let done = `*🔗 ENLACE ANTIGUO:*\n${text}\n\n*🚀 ENLACE NUEVO:*\n${shortUrl1}`.trim()   
conn.reply(m.chat, `${done}`, m)
}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.limit = 1
handler.register = true
handler.fail = null
export default handler
