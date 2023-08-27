var handler = async (msg, { 
client, usedPrefix, command, text
}) => {
if (command == 'cnn' || command == 'cnn-news' || command == 'cnnnews') {
var listBerita = []
var Berita = await require('dhn-api').CNNNews()
var forFirst = Func.pickRandom(Berita)
var firstNews = await client.sendImage(msg.from, forFirst.berita_thumb, `*乂 C N N  -  N E W S*\n\n  *◦ Noticias :* ${forFirst.berita}\n  *◦ Link :* ${forFirst.berita_url}`, msg, { isUrl:true })
Func.sleep(500)
for (let i of Berita) {
listBerita.push({
title: i.berita, rowId: `.madenewberita ${i.berita_thumb}|${i.berita_url}|${i.berita}`, description: `Link: ${i.berita_url}`})
}
const sections = [{
title: "LISTA DE NOTICIAS DE CNN HOY",
rows: listBerita
}]
const listMessage = {
text: 'Aquí tienes otras noticias de hoy, selecciona aquí la noticia que deseas leer.',
buttonText: "CNN TODAY",
sections
}
client.sendMessage(msg.from, listMessage, { quoted: firstNews })
} 
if (command == 'madenewberita') {
var [buf, link, ber] = text.split`|`
client.sendImage(msg.from, buf, `*🔎 C N N  -  N E W S🔍*\n\n  *◦📰 Noticia :* ${ber}\n  *◦🔗 Link :* ${link}`, msg, { isUrl:true })
}
}
handler.help = ['cnn-news']
handler.tags = ['internet']
handler.command = /^(cnn-news|cnnnews|noticias)$/i

handler.limit = true

module.exports = handler
