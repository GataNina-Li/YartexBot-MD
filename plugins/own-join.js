let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

var handler = async (m, { conn, text, isMods, isOwner }) => {

let users = '500'
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) return conn.reply(m.chat, `🎌 *Ingrese el enlace de un grupo*\n\nEjemplo, !unete`, m, fake, )

let gpData = await conn.groupGetInviteInfo(code).catch(e => {})
  
if ( isMods || isOwner || m.fromMe) {
m.reply(m.chat, `✅ ${cb} *Se unió al grupo*`, m, fake, )
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(1 * 1000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(m.chat, `🚩 *Solicitud*\n\n*Usuario*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*Enlace*\n ' + link, jid)

conn.reply(m.chat, `*✅ Su enlace se envió a Mí Propietario(a)*`, m, fake, )
}

}
handler.help = ['join']
handler.tags = ['own']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  
