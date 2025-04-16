import syntaxerror from 'syntax-error'
import { format } from 'util'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)

let handler = async (m, _2) => {
  let { conn, usedPrefix, noPrefix, args, groupMetadata } = _2
  if (m.fromMe) return

  let _return
  let _syntax = ''
  let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix
  let oldExp = m.exp || 0

  try {
    let executionLimit = 15 // Evita bucles infinitos o ejecuciones excesivas
    let f = { exports: {} }

    let exec = new (async function () {}).constructor(
      'print', 'm', 'handler', 'require', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument', 
      _text
    )

    _return = await exec.call(
      conn,
      (...args) => {
        if (--executionLimit < 1) return // Previene llamadas excesivas
        console.log(...args)
        return conn.reply(m.chat, format(...args), m)
      },
      m, handler, require, conn, CustomArray, process, args, groupMetadata, f, f.exports, [conn, _2]
    )

  } catch (e) {
    let err = syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
      sourceType: 'module'
    })

    if (err) _syntax = `\`\`\`${err}\`\`\`\n\n`
    _return = e
  } finally {
    conn.reply(m.chat, _syntax + format(_return), m)
    m.exp = oldExp // Restaurar el valor de experiencia original
  }
}

handler.help = ['> ', '=> ']
handler.tags = ['owner']
handler.customPrefix = /^=?> /
handler.command = /(?:)/i
handler.rowner = true

export default handler

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] === 'number') {
      super(Math.min(args[0], 10000)) // Límite de tamaño para evitar crashes
    } else {
      super(...args)
    }
  }
}
