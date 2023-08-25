let handler = async(m, { conn, text, usedPrefix, command }) => {

let str = '*🍧 CuriosityBot-MD*'
 await conn.sendUrl(m.chat, str, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '🍓 Azami', }}})
}
handler.command = /^((a|a)a)$/i
handler.owner = true


export default handler
