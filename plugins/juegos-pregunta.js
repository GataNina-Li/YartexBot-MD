var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) throw `*⚠️ INGRESE UN TEXTO A PREGUNTAR*\n\n❕ EJEMPLO:\n*${usedPrefix + command}* Hoy va llover?`
m.react('❓') 
m.reply(`*• 📝 Pregunta:* ${text}
*• 🧠 Respuesta:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible','Por que haces estas preguntas','Por eso te dejo','Para que quieres saber','No te dire la respuesta'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
handler.help = ['pregunta']
handler.tags = ['juegos']
handler.command = /^pregunta|preguntas|apakah$/i

export default handler
