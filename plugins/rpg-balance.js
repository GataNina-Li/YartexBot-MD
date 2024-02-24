let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`╭─────✔⏍ *Balance* ⏍✔╮
├🛡️ *Nombre:* ${name}
├💎 *diamante*: ${global.db.data.users[who].diamond} 💎
├✨ *Exp:* ${global.db.data.users[who].exp}
╰─────────🎰─╯

*╭─╮──📝 Nota* ✔╮
├💵*puedes comprar diamantes 💎*
├📨*utilizando los comandos 👇*
├💲*${usedPrefix}buy <cantidad>*
├☑️*${usedPrefix}buyall*
*╰──────🔰──✔──⏍`)
}
handler.help = ['bal']
handler.tags = ['rg']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
