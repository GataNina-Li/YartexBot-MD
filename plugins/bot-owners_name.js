/*Codigo Actualizado Y Editado Para El Bot CuriosityBot-MD
Comando Actualizado Por AzamiJs*/

let handler = (m) => m
handler.before = async function (m) {

var chat = global.db.data.chats[m.chat]

if (/^Azami|azami|Zam|zam$/i.test(m.text) && !chat.isBanned) { 

let GB = `🚩 *Parece que se ha mencionado el nombre de mi creador* ( @59162714296 )`

m.reply(GB, m.chat, { mentions: conn.parseMention(GB)})

}

{
if (/^kitsune|arumi|ari|aruu$/i.test(m.text) && !chat.isBanned) { 

let KIT = `🚩 *Mencionaste el nombre de un colaborador* ( @5215610314499 )`

m.reply(KIT, m.chat, { mentions: conn.parseMention(KIT)})
}

}
return !0

}
export default handler
