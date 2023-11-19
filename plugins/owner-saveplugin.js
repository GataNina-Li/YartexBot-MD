import fs from 'fs'

var handler = async (m, { text, usedPrefix, command }) => {

if (!text) throw `*⚠️ INGRESÉ EL NOMBRE DEL PLUGIN*`
if (!m.quoted.text) throw `*⚠️ INGRESA EL CONTENIDO DEL PLUGIN!*`

let path = `plugins/${text}.js`
await fs.writeFileSync(path, m.quoted.text)
m.reply(`*✅ Guardado en* ${path}`)

}
handler.help = ['saveplugin']
handler.tags = ['owner']
handler.command = ['salvar', 'saveplugin']

handler.rowner = true

export default handler
  
