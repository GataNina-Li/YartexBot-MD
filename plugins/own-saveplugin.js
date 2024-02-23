import fs from 'fs'

var handler = async (m, { text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *Ingresé el nombre del plugin*`, m, fake, )
if (!m.quoted.text) return conn.reply(m.chat, `🚩 *Ingresa el contenido del plugin*`, m, fake, )
let path = `plugins/${text}.js`
await fs.writeFileSync(path, m.quoted.text)
conn.reply(m.chat, `✅ *Guardado en* ${path}`, m, fake, )

}
handler.help = ['saveplugin']
handler.tags = ['own']
handler.command = ['salvar', 'saveplugin']

handler.rowner = true

export default handler
  
