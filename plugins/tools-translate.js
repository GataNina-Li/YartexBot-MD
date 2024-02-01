import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'

var handler = async (m, { args, usedPrefix, command }) => {

let msg = `🚩 *Uso correcto*\n!${command} (idioma) (texto)\n\nEjemplo, !${command} es Hello`
if (!args || !args[0]) return conn.reply(m.chat, msg, m, fake, )
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
await conn.reply(m.chat, '*Traducción:* ' + result.text, m, fake, )
} catch {
try {
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await conn.reply(m.chat, '*Traducción:* ' + result2, m, fake, )
} catch {
await conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, )
}}

}
handler.help = ['traducir']
handler.tags = ['tools']
handler.command = /^(translate|traducir|trad)$/i

handler.register = true
handler.limit = true

export default handler
