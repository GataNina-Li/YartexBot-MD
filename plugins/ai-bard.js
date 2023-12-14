import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) throw `*⚠️ INGRESE UN TEXTO* `

try {

await m.reply('*🚀 C A R G A N D O*')
var apii = await fetch(`https://api.botcahx.live/api/search/bard-ai?apikey=btc&text=${text}`)
var res = await apii.json()
await m.reply(res.message)

} catch (error) {
console.error(error)
throw '⚠️ *OCURRIÓ UN ERROR*'
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']

handler.premium = false

export default handler
