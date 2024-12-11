let handler = async (m, { conn, args, usedPrefix, command }) => {

  conn.reply(m.chat, `🧀zo`, m, null, fake)
}

handler.customPrefix = /^(Que|que|qe|ke|Qe|k|Ke|Kee|Quee)$/i
handler.command = new RegExp
export default handler
