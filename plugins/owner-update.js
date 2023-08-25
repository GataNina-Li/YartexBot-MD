import {execSync} from "child_process"
let handler = async (m, {conn, text}) => {
  await conn.reply(m.chat, '❕ *A C T U A L I Z A N D O* ❕', fkontak, m)
  try {
    if (global.conn.user.jid == conn.user.jid) {
      let stdout = execSync("git pull" + (m.fromMe && text ? " " + text : ""))
     await conn.reply(m.chat, update.toString(), fkontak, m)
      //await await await m.reply(update.toString())
    }
  } catch {
   var update = execSync("git remote set-url origin https://github.com/AzamiJs/CuriosityBot-MD.git && git pull")
// await await await m.reply(update.toString())
     await conn.reply(m.chat, update.toString(), fkontak, m)
  }
}
handler.help = ["update"]
handler.tags = ["owner"]
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler
