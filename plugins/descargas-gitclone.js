import fetch from 'node-fetch'

const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
var handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) return conn.reply(m.chat, `🎌 *Enviar comando:*\n!gitclone repositorio\n\nEjemplo, !gitclone ${md}`, m, fake, )
if (!regex.test(args[0])) conn.reply(m.chat, `🚩 *No es un enlace válido*`, m, fake, )

let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.reply(m.chat, `⏰ Espere un momento`, m, fake, )
conn.sendFile(m.chat, url, filename, null, m)

}
handler.help = ['gitclone']
handler.tags = ['descargas']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i

handler.limit = true
handler.register = true

export default handler
