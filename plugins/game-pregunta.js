let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*⚠️ INGRESE UN TEXTO A PREGUNTAR*\n\n💡 EJEMPLO:\n*${usedPrefix + command}* Hoy va llover?`
m.react('❓') 
m.reply(`🤔 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼: ${text}

✅ 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼: ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible', 'No sabría decirte'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
handler.help = ['pregunta <texto>?']
handler.tags = ['game']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
