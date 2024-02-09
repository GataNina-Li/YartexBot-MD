/*Este Codigo Fue Hecho Para El Bot CuriosityBot-MD
El Comando Se Actualizó Por AzamiJs*/

let handler = (m) => m
handler.before = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^kitsune|arumi|ari|aruu$/i.test(m.text) && !chat.isBanned) { 

var GB = `📍 *Oh no, Te has equivocado has mencionado a un colaborador* ( @5215610314499 )`

m.reply(GB, m.chat, { mentions: conn.parseMention(GB)})

}
return !0

}
export default handler
