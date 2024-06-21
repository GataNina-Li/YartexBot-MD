import fs from 'fs'

var handler = async (m, { conn, text, usedPrefix, command }) => {

await conn.reply(m.chat, `_*🗂️ Enviando base de datos. . .*_`, m, fake, )

try {

let d = new Date
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./database.json`)
let creds = await fs.readFileSync(`./sessions/creds.json`)

await conn.reply(m.sender, `*🗓️ Database:* ${date}`, fkontak)
await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: m })
await conn.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, { quoted: m })

} catch (e) {

await conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, )
console.log(`FALLO`)
console.log(e)}}

handler.tags = ['own']
handler.help = ['backup', 'respaldo', 'copia']
handler.command = /^(backup|respaldo|copia)$/i
handler.owner = true

export default handler
