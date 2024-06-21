import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'

let exec = promisify(_exec).bind(cp)

var handler = async (m, { conn, isOwner, command, text }) => {

if (conn.user.jid != conn.user.jid) return

let o
try {
o = await exec(command.trimStart()  + ' ' + text.trimEnd())
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) conn.reply(m.chat, stdout, m, fake, )
if (stderr.trim()) conn.reply(m.chat, stderr, m, fake, )
}
  
}
handler.help = ['$']
handler.tags = ['own']
handler.customPrefix = /^[$] /
handler.command = new RegExp

handler.rowner = true

export default handler
