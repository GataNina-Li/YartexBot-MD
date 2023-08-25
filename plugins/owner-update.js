import {execSync} from "child_process"
let handler = async (m, {conn, text}) => {
  await m.reply(`*🚀 C A R G A N D O*`)
  try {
    if (global.conn.user.jid == conn.user.jid) {
      let stdout = execSync("git pull" + (m.fromMe && text ? " " + text : ""))
      await await await m.reply(update.toString())
    }
  } catch {
    var update = execSync("git remote set-url origin https://github.com/AzamiJs/CuriosityBot-MD.git && git pull")
    await conn.reply(m.chat, update.toString(), fakesmg, m)
  }
};
handler.help = ["update"]
handler.tags = ["owner"]
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler
