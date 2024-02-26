import { googleImage } from '@bochilteam/scraper'

var handler = async (m, { conn, text, usedPrefix, command }) => {

const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito', 'pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'xxx']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, '🚩 *No dare resultado a tu solicitud*', m, fake, )

if (!text) return conn.reply(m.chat, `🎌 *Bebera ingresar un texto*\n\nEjemplo, !${command} WhatsApp Bot`, m, fake, )
m.react(done)

const res = await googleImage(text)
let image = res.getRandom()
let link = image

conn.sendFile(m.chat, link, 'error.jpg', `🚩 *Resultado de:* ${text}`, m)

}
handler.help = ['gimage', 'imagen']
handler.tags = ['imagenes']
handler.command = /^(gimage|image|imagen)$/i

handler.limit = true
handler.register = true

export default handler
