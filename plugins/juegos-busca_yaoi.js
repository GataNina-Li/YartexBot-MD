var handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

let em = ['😀','😂','🍑','😍','🤤','🥵','😐','🙂','😎','👻','💩','🥴','🤑','🤓']

let toM = a => '@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let am = em.getRandom()
conn.reply(m.chat, `${toM(a)} Ese usuario busca yaoi ${am}`, m, {mentions: [a]})

}
handler.customPrefix = /^Yaoi|bl/i
handler.command = new RegExp
handler.tags = ['fun']

export default handler
