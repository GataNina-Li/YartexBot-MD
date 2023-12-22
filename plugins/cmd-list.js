var handler = async (m, {conn}) => {

conn.reply(m.chat, `🎌 *LISTA - CMD*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}.-\n*Codigo:* ${value.locked ? `_bloqueado_ ${key}` : key}\n*Comando* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map((x) => x.mentionedJid).reduce((a, b) => [...a, ...b], [])}, fake, )

}
handler.tags = ['database']
handler.help = ['listcmd']
handler.command = ['listcmd', 'cmdlist'];
export default handler
