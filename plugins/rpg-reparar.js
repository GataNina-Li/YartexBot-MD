

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let lgocraft = `
*「 R E P A I R」*`

let caption = `
▧ Pico ⛏️`

try {
if (/repair/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxedurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
if (user.pickaxe == 0) return m.reply('Kamu belum memilik ini')
if (user.diamond < 1 || user.stone < 3 || user.iron < 3 ) return m.reply(`Barang tidak cukup!`)
user.stone -= 3
user.iron -= 3
user.diamond -= 1
user.pickaxedurability = 100
m.reply("Sukses memperbaiki!")
break
default: 
return await conn.reply(m.chat, caption, m, fake, )
}
} else if (/enchant|enchan/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
switch (_type) {
case 't':
break
case '':
break

default:
return conn.reply(m.chat, caption, m, fake, )
}
}
} catch (err) {
m.reply("Error\n\n\n" + err.stack)}
 
}
handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(repair)/i

export default handler
