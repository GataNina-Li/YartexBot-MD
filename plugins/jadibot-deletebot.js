/*

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo fue realizado por:
- ReyEndymion (https://github.com/ReyEndymion)

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

*/

import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from 'fs'
import path, { join } from 'path'

var handler  = async (m, { conn }, args) => {

let parentw = conn
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}` //parentw.getName(who)
if (global.conn.user.jid !== conn.user.jid) await conn.reply(m.chat, '🚩 *Ve directamente al número del bot*', m, fake, )
else {
await conn.reply(m.chat, '🚩 *Eliminando archivos*', m, fake, )
}

try {
        
fs.rmdir('./jadibts/' + uniqid, { recursive: true, force: true })
.then(() => {
console.log('✅ *Archivos eliminados correctamente*')
})
await conn.reply(m.chat, '✅ *Archivos eliminados correctamente*', m, fake, )

} catch(err) {
console.error('🚩 La carpeta o sesión no existe', err)
}
            
}
handler.help = ['delete']
handler.tags = ['jadibot']
handler.command = /^(deletebot)$/i

handler.fail = null
handler.register = true
  
export default handler
