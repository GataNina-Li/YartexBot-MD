let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './storage/menus/Menu1.jpg' 
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`*📍 INFORMACIÓN DEL GRUPO 📍*

📡 *ID*
${groupMetadata.id}

📑 *NOMBRE DEL GRUPO*
${groupMetadata.subject}

👥 *TOTAL DE PARTICIPANTES*
${participants.length} Participantes

👑 *CREADOR(A) DEL GRUPO*
@${owner.split('@')[0]}

🔰 *ADMINS DEL GRUPO*
${listAdmin}

⚙️ *CONFIGURACIONES ON/OFF*
WELCOME: ${welcome ? '✅' : '❌'}
DETECT ${detect ? '✅' : '❌'} 
ANTILINK ${antiLink ? '✅' : '❌'} 
ANTILINK 2 ${antiLink2 ? '✅' : '❌'}  

💬 *DESCRIPCIÓN*
${groupMetadata.desc?.toString() || '⚠️ No hay descripción!!'}
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
