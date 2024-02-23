var handler = async (m, { conn, text, command }) => {

let id = text ? text : m.chat  
await conn.reply(id, '**', m, fake, ) 
await conn.groupLeave(id)}

handler.help = ['out', 'leavegc', 'salir']
handler.tags = ['own']
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i

handler.group = true
handler.rowner = true

export default handler
