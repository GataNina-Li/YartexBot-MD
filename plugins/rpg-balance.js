var handler = async (m, {usedPrefix}) => {

let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who)

conn.reply(m.chat, `🌱 *Balance*
*Nombre:* ${name}
*Diamantes:* ${global.db.data.users[who].diamond}

📄 *Nota*
Puedes comprar más diamantes tilizando los comandos:* 👇
${usedPrefix}buy <cantidad>
${usedPrefix}buyall`, m, fake, )

}
handler.help = ['bal']
handler.tags = ['rg']
handler.command = ['bal', 'diamantes', 'diamond', 'balance']

handler.register = true 

export default handler
