var handler = async (m, { conn, command, text }) => {

if (!text) return conn.reply(m.chat, `🎌 *Escribe el nombre de dos personas para calcular su amor*`, m, fake, )
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `🚩 *Escribe el nombre de la segunda persona*`, m, fake, )
let love = `❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻`

m.reply(love, null, { mentions: conn.parseMention(love) })

}
handler.help = ['ship']
handler.tags = ['juegos']
handler.command = /^(ship)$/i

export default handler
