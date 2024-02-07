var handler = async (m, { conn, text }) => {

let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat,`*⚠️ NO ESTAS EN UNA PARTIDA DE TICTACTOE*`, m)
delete conn.game[room.id]
await conn.reply(m.chat, `*✅ SE ELIMINÓ LA SESIÓN DE TICTACTOE*`, m)

}
handler.help = ['delttt', 'delttc', 'delxo']
handler.tags = ['juegos']
handler.command = ['delttc', 'delttt', 'delxo']

handler.register = true 
handler.group = true

export default handler
