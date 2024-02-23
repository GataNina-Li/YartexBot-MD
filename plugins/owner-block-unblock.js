var handler = async (m, { text, conn, usedPrefix, command }) => {

let why = `🚩 *Ejemplo de uso*\n!${command} @${m.sender.split('@')[0]}`
let user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) return conn.reply(m.chat, why, m, { mentions: [m.sender] })
let res = []
switch (command) {
for (let i = 0; i < global.owner.length; i++) {
let ownerNumber = global.owner[i][0]
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
let aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `🚩 *No puedo banear al propietario @${ownerNumber} de ${cb}*`, m, { mentions: [aa] })
return
case 'blok': case 'block':
if (who) await conn.updateBlockStatus(who, 'block').then(() => { res.push(who); })
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break
case 'unblok': case 'unblock':
if (who) await conn.updateBlockStatus(who, 'unblock').then(() => { res.push(who); })
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break

}
if (res[0]) conn.reply(m.chat, `*Se uso con éxito el comando ${command} para el usuario*  ${res ? `${res.map(v => '@' + v.split("@")[0])}` : ''}`, m, { mentions: res })}

handler.tags = ['own']
handler.help = ['block', 'unblock']
handler.command = /^(block|unblock)$/i

handler.rowner = true

export default handler
