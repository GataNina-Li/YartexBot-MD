var handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {

if (!args[0]) return m.reply(`*⚠️ INGRESE EL PREFIJO DE UN PAÍS*`)
if (isNaN(args[0])) return m.reply(`*⚠️ INGRESA EL PREFIJO DE UN PAÍS*`)
 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol))
let bot = global.db.data.settings[conn.user.jid] || {}

if (ps == '') return m.reply(`*⚠️ EN ESTE GRUPO NO HAY NINGÚN NÚMERO CON EL PREFIJO +${lol}*`)
let numeros = ps.map((v)=> '• @' + v.replace(/@.+/, ''))
let delay = (time) => new Promise((res)=>setTimeout(res, time))
switch (command) {

case 'listanum':
conn.reply(m.chat, `*📑 LISTA DE NÚMEROS +${lol}*\n\n` + numeros.join`\n`, m, {mentions: ps})
break

case 'kicknum':
if (!bot.restrict) return m.reply('*⚠️ ESTA FUNCIÓN ESTA DESACTIVADA*')
if (!isBotAdmin) return m.reply('*⚠️ NO SOY ADMIN*');
conn.reply(m.chat, `*⚠️ SE ELIMINARAN A LOS NÚMEROS +${lol} CADA 10 SEGUNDOS*`, m)
const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol))
for (const user of users) {
const error = `⚠️ @${user.split('@')[0]} YA HA SIDO ELIMINADO A ABANDONADO DEL GRUPO*`
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
await delay(2000)
const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)})
await delay(10000)
} else return m.reply('404')
}
break
}

}
handler.command = /^(listanum|kicknum)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true

handler.fail = null

export default handler
