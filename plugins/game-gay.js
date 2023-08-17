let handler = async (m, {conn}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(
m.chat,
global.API("https://some-random-api.com", "/canvas/gay", {
avatar: await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png"),
}),
"error.png",
"LGTB+ 🏳️‍🌈",
m
)
}
handler.help = ["gay"]
handler.tags = ["maker"]
handler.command = /^(gay)$/i
export default handler

/*let handler = async (m, { conn }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png'), 
}), 'gay.png', `*${name} es orgullosamente gay ❤️🏳️‍🌈*`, m)
}

handler.help = ['gay @user']
handler.tags = ['game']
handler.command = ['gay'] 
handler.register = true 
export default handler*/
