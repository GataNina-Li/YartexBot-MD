/* Creado por https://github.com/FG98F */

var handler = async (m, { conn }) => {

await conn.fetchBlocklist().then(async data => {
let txt = `⬣ *LISTA DE BLOQUEADOS*

Total bloqueados : *${data.length}*\n\n`
for (let i of data) {
txt += `⬡ @${i.split('@')[0]}\n`}
txt += '────────────────────────'
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err)
return conn.reply(m.chat, '🚩 *No hay números bloqueados*', m, fake, )})

}
handler.help = ['blocklist']
handler.tags = ['own']
handler.command = ['blocklist', 'listblock'] 

handler.rowner = true

export default handler
