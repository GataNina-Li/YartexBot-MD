var handler = async (m, { conn, text }) => {

let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat,`🚩 *No estas registrado en una partida tic tac toe*`, m, fake, )
delete conn.game[room.id]
await conn.reply(m.chat, `✅ *Se eliminó la sesión de tic tac toe*`, m, fake, )

}
handler.help = ['delttt', 'delttc', 'delxo']
handler.tags = ['juegos']
handler.command = ['delttc', 'delttt', 'delxo']

handler.register = true 
handler.group = true

export default handler
