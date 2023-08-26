let handler = async(m, { conn, text, usedPrefix, command }) => {

    let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
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

    await conn.reply(m.chat, '*Enviando el menu . . .*', ftrol)
   // conn.sendMessage(m.chat, ftrol, { quoted: fload })}
 await conn.reply(m.chat, '*Pruebaaaaaaaaaaaa . . .*', fload) 
let str = `*🍧 CuriosityBot-MD*`.trim()
await conn.sendMessage(m.chat, { image: imagen4, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak }) 
    //await conn.sendUrl(m.chat, str, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen1, thumbnailUrl: imagen1, title: '🍓 Azami', }})
 
}
handler.command = /^((a|a)a)$/i
handler.owner = true

export default handler
