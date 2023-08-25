/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/HACHEJOTA
  🍀 • ꧁༒︎⊱ꕥ 𝙷𝙰𝙲𝙷𝙴❦𝙹𝙾𝚃𝙰 ꕥ⊱༒︎꧂
-----------------------------------------------------------------------------------------*/

import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
try {    
    
if (command == 'consejo') {
let res = await fetch("https://zenzapis.xyz/randomtext/motivasi?apikey=hdiiofficial")
//let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
let json = await res.json()
let frase = json.result.message
let frase1 = await translate(frase, { to: 'es', autoCorrect: true })
await m.reply(`*┏━━━━━━━━━━━━━━━━┓*\n*┠❧  ${frase1.text}*\n*┗━━━━━━━━━━━━━━━━┚*`)}

if (command == 'fraseromantica') {
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
let frase1 = await translate(frase, { to: 'es', autoCorrect: true }).catch(_ => null)
m.reply(`*╭─◆────◈⚘◈─────◆─╮*\n*❥  ${frase1.text}*\n*╰─◆────◈⚘◈─────◆─╯*`)}

if (command == 'historiaromantica') {
let res = await fetch("https://api-xcoders.site/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
let storytime = await translate(story, { to: 'es', autoCorrect: true }).catch(_ => null)
let titletime = await translate(title, { to: 'es', autoCorrect: true }).catch(_ => null)
conn.reply(m.chat, `᭥🫐᭢ Título: ${titletime.text}
᭥🍃᭢ Autor: ${author_name}
────────────────
${storytime.text}`, m)}
    
} catch {    
await m.reply(`*[❗] OCURRIO UN ERROR, posiblemente la página (API) DE AYUDA ESTE CAÍDA TEMPORALMENTE, INTÉNTELO MÁS TARDE*`)
}}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica']
export default handler
