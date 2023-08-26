let handler = async(m, { conn, text, usedPrefix, command }) => {
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2023,
    status: 1,
    surface : 1,
    message: `Hola!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: imagen1,
    sellerJid: '0@s.whatsapp.net' 
    }
    }
}
 await conn.reply(m.chat, '*Prueba . . .*', ftrol) 
let str = '*🍧 CuriosityBot-MD*'
await conn.sendUrl(m.chat, str, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '🍓 Azami', }})
 
}
handler.command = /^((a|a)a)$/i
handler.owner = true

export default handler
