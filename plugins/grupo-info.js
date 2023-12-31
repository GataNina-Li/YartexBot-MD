var handler = async (m, { conn, participants, groupMetadata }) => {
 
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/logos/Menu1.jpg' 
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`*「 INFORMACIÓN DEL GRUPO 」*

• *Id*
${groupMetadata.id}

• *Nombre del grupo*
${groupMetadata.subject}

• *Total de participantes*
${participants.length} Participantes

• *Creador(a) del grupo*
@${owner.split('@')[0]}

• *Admins del grupo*
${listAdmin}

• *Configuraciones on/off*
welcome: ${welcome ? '✅' : '❌'}
detect ${detect ? '✅' : '❌'} 
antilink ${antiLink ? '✅' : '❌'} 
antilink 2 ${antiLink2 ? '✅' : '❌'}  

• *Descripción*
${groupMetadata.desc?.toString() || '⚠️ No hay descripción!!'}
`.trim()
//conn.sendMessage(m.chat, {text: text, mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), 'externalAdReply': {'showAdAttribution': true, 'containsAutoReply': true, 'renderLargerThumbnail': true, 'title': wm, 'containsAutoReply': true, 'mediaType': 1, 'thumbnail': pp, 'mediaUrl': global.ig, 'sourceUrl': global.ig}}}, {quoted: fkontak});
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['infogrupo']
handler.tags = ['grupo']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true

export default handler
