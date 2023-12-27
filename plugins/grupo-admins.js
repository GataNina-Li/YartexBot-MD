var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/logos/Menu2.jpg'
let groupAdmins = participants.filter(p => p.admin)
let listaAdmins = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
let owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

if (!text) return conn.reply(m.chat, `🎌 *Por favor coloque su motivo para invocar a los admins*`, m, fake, )
if (text.length < 10) return conn.reply(m.chat, `🚩 *El motivo es muy corto, minimo 10 carácteres*`, m, fake, )
let mensaje = args.join` `
let yo = `*Mensaje:* ${text}`
let texto = `${yo}

🚩 *Staff Del Grupo*
${listaAdmins}`.trim()

conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(admins|@admins|dmins)$/i

handler.group = true

export default handler
