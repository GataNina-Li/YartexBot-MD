import cp from 'child_process'
import {promisify} from 'util'

const exec = promisify(cp.exec).bind(cp)

var handler = async (m) => {
  
const { key } = await conn.sendMessage(m.chat, {text: `🚀 Espere un momento`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `📑 Recuperando la lista de servidores speedtest.net...`, edit: key})
await delay(2000 * 1)
await conn.sendMessage(m.chat, {text: `🔎 Seleccionando el mejor servidor según el ping...`, edit: key})
await delay(2000 * 1)
await conn.sendMessage(m.chat, {text: `✅ *Hecho*`, edit: key})

let o
  
try {

o = await exec('python3 speed.py')
} catch (e) {
o = e
} finally {
let {stdout, stderr} = o


if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}

}
handler.help = ['speedtest']
handler.tags = ['bot']
handler.command = /^(speedtest?|test?speed)$/i

handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
