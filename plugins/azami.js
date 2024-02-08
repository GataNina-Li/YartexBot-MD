/*Codigo Actualizado Y Editado Para El Bot CuriosityBot-MD
Comando Actualizado Por AzamiJs*/

let handler = (m) => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^Azami|azami|Zam|zam$/i.test(m.text) && !chat.isBanned) { 

var GB = `🚩 *Parece que se ha mencionado el nombre de mi creado (@${devnum})*`

m.reply(GB, m.chat, { mentions: conn.parseMention(GB)})

}
return !0

}
export default handler
