
let handler = async (m, { args, usedPrefix, text, command }) => {
let ar = Object.keys(plugins)
let ar1 = ar.map(v => v.replace('.js', ''))
let spas = "                "
    let listSections = []
    Object.keys(ar1).map((v, index) => {
	listSections.push([spas + "[ RESULT " + ++index + " ]", [
          [ar1[v].toUpperCase(), "/plugins " + ar1[v], "To Check"]
        ]])
        })
	if (!text) return conn.sendList(m.chat, "*[ CHECK PLUGINS ]*", "⚡ Silakan pilih PLUGINS yang ingin di cek...", author, "☂️ SELECT ☂️", listSections, m)

try {
    let { total, success, last, lastSuccess } = global.db.data.stats[text + '.js']
    conn.reply(m.chat, `
📑 *Plugins:* ${args[0]}
*💬 Total :* ${total}
*✔️ Succes :* ${success}
${readMore}
*🕔 Last time used:* ${new Date(last)}
*🕔 Last time it worked:* ${new Date(lastSuccess)}
`, m)
} catch (e) {
throw eror
}
}

handler.help = ['plugins'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^plugins$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
