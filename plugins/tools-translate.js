import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'

var handler = async (m, { args, usedPrefix, command }) => {

if (command == 'translate' || command == 'traducir') {
let msg = `🚩 *Uso correcto*\n!${command} (idioma) (texto)\n\nEjemplo, !${command} es Hello\n\n_Utilice !codesidioma para ver los idiomas y sus códigos admitidos_`
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
}}}

if (command == 'codesidioma') {
let codesidioma = '🇲🇽 *Español:* es\n🏴󠁧󠁢󠁷󠁬󠁳󠁿 *Welsh:* cy\n🇻🇳 *Vietnamese:* vi\n🇹🇷 *Turkish:* tr\n🇹🇭 *Thai:* th\n🇰🇬 *Tamil:* ta\n🇸🇪 *Swedish:* sv\n🇰🇪 *Swahili:* sw\n🇸🇰 *Slovak:* sk\n🇷🇸 *Serbian:* sr\n🇷🇺 *Russian:* ru\n🇷🇴 *Romanian:* ro\n🇵🇹 *Portuguese:* pt\n🇵🇱 *Polish:* pl\n🇳🇴 *Norwegian:* no\n🇲🇰 *Macedonian:* mk\n🇱🇻 *Latvian:* lv\n🇻🇦 *Latin:* la\n🇰🇷 *Korean:* ko\n🇯🇵 *Japanese:* ja\n🇮🇹 *Italian:* it\n🇮🇩 *Indonesian:* id\n🇮🇸 *Icelandic:* is\n🇭🇺 *Hungarian:* hu\n🇮🇳 *Hindi:* hi\n🇭🇹 *Haitian Creole:* ht\n🇬🇷 *Greek:* el\n🇩🇪 *German:* de\n🇫🇷 *French:* fr\n🇫🇮 *Finnish:* fi\n🇨🇨 *Esperanto:* eo\n🇬🇧 *English:* en\n🇳🇱 *Dutch:* nl\n🇩🇰 *Danish:* da\n🇨🇿 *Czech:* cs\n🇭🇷 *Croatian:* hr\n🇨🇳 *Chinese:* zh\n🇲🇰 *Catalan:* ca\n🇦🇲 *Armenian:* hy\n🇦🇪 *Arabic:* ar\n🇦🇱 *Albanian:* sq\n🇿🇦 *Afrikaans:* af'
conn.reply(m.chat, codesidioma, m, fake, )
}

}
handler.help = ['traducir', 'codesidiomas']
handler.tags = ['tools']
handler.command = /^(translate|traducir|codesidioma)$/i

handler.register = true
handler.limit = true

export default handler
