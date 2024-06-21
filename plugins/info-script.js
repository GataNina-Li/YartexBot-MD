import fetch from 'node-fetch'
import moment from 'moment-timezone'

var handler = async (m, { conn, usedPrefix }) => {

let res = await fetch('https://api.github.com/repos/GataNina-Li/YartexBot-MD')
let json = await res.json()
 
let git = `*乂  B O T  -  S C R I P T*\n\n◦ *Nombre* : ${json.name}\n◦ *Visitantes* : ${json.watchers_count}\n◦ *Peso* : ${(json.size / 1024).toFixed(2)} MB\n◦ *Actualizado* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n◦ *Url* : ${json.html_url}\n\n	   ${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues\n\n${gatanina}`
await conn.sendUrl(m.chat, git, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen2, thumbnailUrl: imagen1, title: '\t\t\t\t\t\t᭡͡ᩬ😊✩̣̣̣̣̣ͯ𝙔𝙖𝙧𝙩𝙚𝙭𝘽𝙤𝙩-𝙈𝘿᭡͡ᩬ😊✩̣̣̣̣̣ͯ', }})
 
}
handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script', 'codigo', 'git', 'github']

handler.register = true

export default handler
