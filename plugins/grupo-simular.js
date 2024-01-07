var handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {

if (!event) return await conn.reply(m.chat, `🚩 *Ejemplo de uso*

${usedPrefix + command} welcome @user
${usedPrefix + command} bye @user
${usedPrefix + command} promote @user
${usedPrefix + command} demote @user`, m, fake, )

let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
conn.reply(m.chat, `🎌 *Simulando ${event}...*`, m, fake, )
switch (event.toLowerCase()) {
case 'add':
case 'invite':
case 'welcome':
case 'bienvenida':       
act = 'add'
break
case 'bye':
case 'kick':
case 'leave':
case 'remove':
case 'sacar':
act = 'remove'
break
case 'promote':
case 'daradmin':
case 'darpoder':
act = 'promote'
break
case 'demote':
case 'quitaradmin':
case 'quitarpoder':
act = 'demote'
break
default:
return conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, )
}
if (act) return conn.participantsUpdate({ id: m.chat, participants: part, action: act })

}
handler.help = ['simulate'] 
handler.tags = ['grupo']
handler.command = /^simulate|simular$/i
handler.group = true

export default handler
