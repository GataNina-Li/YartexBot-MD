/*let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `*⚠️ DEBE DE SER UN ENLACE*\n*📝 Ingrese el enlace de un grupo.*\n\n💡 EJEMPLO\n*.join ${nn}*`

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
m.reply(`*${cb} SE HA UNIDO AL GRUPO!!✅*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`✉️ *SOLICITUD PARA UN GRUPO*\n\n*👤 SOLICITANTE*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*📝 ENLACE DEL GRUPO*\n ' + link, jid)

m.reply(`*✅ SU ENLACE SE ENVIO A MI PROPIETARIO*\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Su Grupo será Evaluado y Quedará a decisión de Mí Propietario(a) si ${cb} se une o no al Grupo.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*1️⃣ El Bot está Saturado.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de ${cb}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *No se agrega a Grupos según Mi Propietario.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia.*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.exp = 100
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
export default handler
*/
