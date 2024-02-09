var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `*Ingrese un texto a preguntar*\n\nEjemplo, !${command} Hoy va llover?`
m.react('❔'); m.react(❓); m.react(❔)

conn.reply(m.chat, `> *Pregunta:* ${text}
> *Respuesta:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible','Por que haces estas preguntas','Por eso te dejo','Para que quieres saber','No te dire la respuesta'].getRandom()}
`, m, fake, )

}
handler.help = ['pregunta']
handler.tags = ['juegos']
handler.command = /^pregunta|preguntas|apakah$/i

export default handler
