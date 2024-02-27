var handler = async (m, {usedPrefix}) => {

let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who)

conn.reply(m.chat, `╭─────── *Balance* ───────╮
├🛡️ *Nombre:* ${name}
├💎 *Diamante:* ${global.db.data.users[who].diamond}
├✨ *Exp:* ${global.db.data.users[who].exp}
╰───────────🎰───────────╯

╭─── *Nota* ───╮
├💵 *Puedes comprar más diamantes*
├📨 *Utilizando los comandos:* 👇
├💲 *${usedPrefix}buy <cantidad>*
├☑️ *${usedPrefix}buyall*
╰─────────────`, m, fake, )

}
handler.help = ['bal']
handler.tags = ['rg']
handler.command = ['bal', 'diamantes', 'diamond', 'balance']

handler.register = true 

export default handler
