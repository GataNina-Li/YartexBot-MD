async function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {

let user = a => '@' + a.split('@')[0]

if (!text) return conn.reply(m.chat, `🚩 *Ejemplo de uso:*\n!${command} Pros`, m, fake, )
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
let k = Math.floor(Math.random() * 70)
let x = `${pickRandom(['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🤩', '😏', '😳', '🥵', '🤯', '😱', '😨', '🤫', '🥴', '🤧', '🤑', '🤠', '🤖', '🤝', '💪', '👑', '😚', '🐱', '🐈', '🐆', '🐅', '⚡️', '🌈', '☃️', '⛄️', '🌝', '🌛', '🌜', '🍓', '🍎', '🎈', '🪄', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '💘', '💝', '💟', '🌝', '😎', '🔥', '🖕', '🐦'])}`
let l = Math.floor(Math.random() * x.length)
let vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`
let top = `*${x} Los 10 ${text} ${x}*
    
*1. ${user(a)}*
*2. ${user(b)}*
*3. ${user(c)}*
*4. ${user(d)}*
*5. ${user(e)}*
*6. ${user(f)}*
*7. ${user(g)}*
*8. ${user(h)}*
*9. ${user(i)}*
*10. ${user(j)}*`

await m.reply(top, m.chat, {mentions: conn.parseMention(top) })
    
}
handler.help = ['los10']
handler.command = ['los10']
handler.tags = ['juegos']

handler.group = true
handler.register = true

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
