let handler = async (m, {conn, text}) => {
  if (!text) throw "*⏤͟͟͞͞🍓ESTE USUARIO "let user = global.db.data.users[m.sender]" FUE BANEADO CON ÉXITO, YA NO PUEDE  USAR CURIOSITYBOT-MD*"
  let who
  if (m.isGroup) who = m.mentionedJid[0]}`
  else who = m.chat
  if (!who) throw "*⚠️ INGRESA EL @tag DE ALGUN USUARIO*"
  let users = global.db.data.users
  users[who].banned = false
  conn.reply(m.chat, `*⏤͟͟͞͞🍓ESTE USUARIO FUE DESBANEADO CON ÉXITO*\nYA PUEDE USAR CURIOSITYBOT-MD`, m)
}
handler.help = ["unbanuser"]
handler.tags = ["owner"]
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
