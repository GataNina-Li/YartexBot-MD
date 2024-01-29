var handler = async (m, {conn, text, usedPrefix, command}) => {

const regex = /x/g
  
if (!text) return conn.reply(m.chat, '🚩 *Número faltante*', m, fake, )
if (!text.match(regex)) return conn.reply(m.chat, `🚩 *Ejemplo de uso*\n${usedPrefix + command} 5217299999x*`, m, fake, )
let random = text.match(regex).length
let total = Math.pow(10, random)
let array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then((v) => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch((_) => {})
array.push({exists: true, jid: result, ...info})
} else {
array.push({exists: false, jid: result})}}
let txt = '🚩 *Registrados*\n\n' + array.filter((v) => v.exists).map((v) => `${readMore}• Nro: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'Sin descripcion'}\n*• Fecha:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*No registrados*\n\n' + array.filter((v) => !v.exists).map((v) => v.jid.split('@')[0]).join('\n')
conn.reply(m.chat, txt, m, fake, )

}
handler.help = ['nowa']
handler.tags = ['implementos']
handler.command = /^nowa$/i

export default handler

function formatDate(n, locale = 'id') {
var d = new Date(n)
return d.toLocaleDateString(locale, {timeZone: 'America/Los_Angeles'})
}
