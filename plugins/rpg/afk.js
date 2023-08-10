//import db from '../lib/database.js'
let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    if (!text) return m.reply(`*⚠️ POR FAVOR COLOQUE SU MOTIVO PARA ESTAR AFK*\n\n💡 EJEMPLO\n*#afk Voy a comer*`)
    if (text.length < 10) return m.reply(`*⚠️ EL MOTIVO ES MUY CORTO, MINIMO 10 CARÁCTERES*`)
    user.afk = + new Date
    user.afkReason = text
    conn.reply(m.chat, `
\t\t\t\t *「 ⚠️ ESTADO AFK ⚠️ 」*
 
*► Estarás afk hasta que envíes un mensaje.*

👤 *Usuario:* @${m.sender.split`@`[0]} 
👀 *Razón:* ${text ? ': ' + text : ''}
  `, m, { mentions: [m.sender]})
}
handler.help = ['afk *<razón>*']
handler.tags = ['rg']
handler.command = ['afk']
handler.register = true

export default handler
