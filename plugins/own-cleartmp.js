///////////////////////////////////////////
// ¡NO USAR ESTE COMANDO EN HEROKU! //////
/////////////////////////////////////////

import { tmpdir } from 'os'
import path, { join } from 'path'
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs'

var handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 

conn.reply(m.chat, `✅ *Archivos de la carpeta tmp fueron eliminados*`, m, fake, )

const tmp = [tmpdir(), join(__dirname, '../tmp')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file) })

}
handler.help = ['cleartmp']
handler.tags = ['own']
handler.command = /^(cleartmp|cleartemp|borrartmp|eliminartmp|borrartemp|borrartemp)$/i

handler.rowner = true

export default handler
