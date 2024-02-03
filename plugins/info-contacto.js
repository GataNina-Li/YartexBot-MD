import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => null)
let name = await conn.getName(who)
let biografia = await conn.fetchStatus('5217294888993' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus('5214531287294' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')

await conn.sendContactArray(m.chat, [
[devnum, `${await conn.getName('5217294888993'+'@s.whatsapp.net')}`, `🍭 Creador`, dev, `No correo`, `🇲🇽 México`, `https://www.youtube.com/@Azami_19`, biografia],
[`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🍧 CuriosityBot-MD`, `📵 No hacer spam`, `No correo`, `🇲🇽 México`, `https://github.com/AzamiJs/CuriosityBot-MD`, biografiaBot]
], fake)
} 

handler.command = /^(owner|creator|contacto?s)/i
export default handler
