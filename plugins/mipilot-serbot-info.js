import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
  function convertirMsADiasHorasMinutosSegundos(ms) {
  var segundos = Math.floor(ms / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var días = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  var resultado = "";
  if (días !== 0) {
    resultado += días + " días, ";
  }
  if (horas !== 0) {
    resultado += horas + " horas, ";
  }
  if (minutos !== 0) {
    resultado += minutos + " minutos, ";
  }
  if (segundos !== 0) {
    resultado += segundos + " segundos";
  }

  return resultado;
}

  const message = users.map((v, index) => `*${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n*🥏 wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n*Nombre:* ${v.user.name || '-'}\n*Uptime:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n');
  const replyMessage = message.length === 0 ? '*⚠️ NO HAY SUB BOTS DISPONIBLE POR EL MOMENTO . 🔰VERIFIQUE MÁS TARDE.*' : message;
  const totalUsers = users.length;
  const responseMessage = `${replyMessage.trim()}`.trim();
await m.reply(`*🚀 AQUÍ TIENE LA LISTA DE LOS SUBBOTS ACTIVÓS EN ESTOS MOMENTOS*\n\nSUB BOTS CONECTADO : ${totalUsers || '0'}`)
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;

/*async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]  
const message = users.map(v => '🥏 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n\n')
const replyMessage = (message.length === 0) ? "*⚠️ NO HAY SUB BOTS DISPONIBLE POR EL MOMENTO . 🔰VERIFIQUE MÁS TARDE.*" : message
await m.reply( '*🚀 AQUÍ TIENE LA LISTA DE LOS SUBBOTS ACTIVÓS EN ESTOS MOMENTOS*')
await m.reply(replyMessage.trim())}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler*/

