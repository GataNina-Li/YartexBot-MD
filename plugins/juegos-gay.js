var handler = async (m, {conn}) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', { avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), }), 'error.png', 'LGTBQ+ 🏳️‍🌈', m)

}
handler.help = ['gay']
handler.tags = ['juegos']
handler.command = /^(gay)$/i

handler.register = true

export default handler
