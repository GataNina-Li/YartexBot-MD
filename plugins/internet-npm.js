import fetch from 'node-fetch'

var handler = async (m, { text }) => {

if (!text) return conn.reply(m.chat, '🎌 *Ingrese lo que esta buscando*\n\nEjemplo, !npmjs module', m, fake, )
let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()
if (!objects.length) return conn.reply(m.chat, `🚩 *La solicitud "${text}" no funciona*`, m, fake, )

let txt = objects.map(({ package: pkg }) => {
return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_` }).join`\n\n`
conn.reply(m.chat, txt, m, fake, )

}
handler.help = ['npmsearch']
handler.tags = ['internet']
handler.command = /^npmjs|npmsearch?$/i

handler.register = true

export default handler
