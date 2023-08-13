import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*⚠️ INGRESE EL NOMBRE DE UNA CANCIÓN*\n\n❕ EJEMPLO:\n*${usedPrefix + command}* another love`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
m.reply(`
*• Título:* ${result.title}

*• Autor:* ${result.author}

*• Url* ${result.link}

*• Letra:*
${result.lyrics}
`.trim())
 }
  
 handler.help = ['lirik'].map(v => v + ' <Apa>')
 handler.tags = ['internet']
 handler.command = /^(lirik|lyrics|lyric)$/i
  
 export default handler
