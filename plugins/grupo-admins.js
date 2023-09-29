var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/menus/Menu2.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`*⚠️ POR FAVOR COLOQUE SU MOTIVO PARA INVOCAR A LOS ADMINS*`)
if (text.length < 10) return m.reply(`*⚠️ EL MOTIVO ES MUY CORTO, MINIMO 10 CARÁCTERES*`)
let mensaje = args.join` `
let yo = `*📢 Mensaje:* ${text}`
let texto = `*⚠️ INVOCANDO ADMINS ⚠️*

${yo}

*❗ Staff Del Grupo ❗*
${listaAdmins}`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true

export default handler