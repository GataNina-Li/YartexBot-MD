let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝗔𝘇𝗮𝗺𝗶 🍓/;;;\nFN:𝗔𝘇𝗮𝗺𝗶 🍓\nORG:𝗔𝘇𝗮𝗺𝗶/🍓\nTITLE:\nitem1.TEL;waid=5217294888993:+5217294888993\nitem1.X-ABLabel:𝗔𝘇𝗮𝗺𝗶/🍓\nX-WA-BIZ-DESCRIPTION:🐱 Creador oficial de CuriosityBot-MD.\nX-WA-BIZ-NAME:𝗔𝘇𝗮𝗺𝗶/🍓\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '𝗔𝘇𝗮𝗺𝗶 🍓', contacts: [{ vcard }] }}, {quoted: m})
}
handler.tags =['info']
handler.help = ['script']
handler.customPrefix = /^(@527294888993)$/i
handler.command = new RegExp
export default handler
