var handler = async (m, { args, usedPrefix }) => {

let user = global.db.data.users[m.sender]
if (user.health >= 100) return conn.reply(m.chat, '❤️‍🩹 *Tu salud esta completa*', m, fake, )
let buf = user.cat
let buff = (buf == 0 ? '5' : '' || buf == 1 ? '10' : '' || buf == 2 ? '15' : '' || buf == 3 ? '20' : '' || buf == 4 ? '25' : '' || buf == 5 ? '30' : '' || buf == 6 ? '35' : '' || buf == 7 ? '40' : '' || buf == 8 ? '45' : '' || buf == 9 ? '50' : '' || buf == 10 ? '100' : '' || buf == 11 ? '100' : '') 
const heal = 15 + (buff * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
if (user.potion < count) return conn.reply(m.chat, `🥤 Tu Poción no es suficiente, solo tienes *${user.potion}*

> 🛍️ Compra
${readMore}

!buy potion ${count - user.potion}`, m, fake, )
user.potion -= count * 1
user.health += heal * count
conn.reply(m.chat, `Uso exitoso de *${count}* 🥤 Pocion(es)
`, m, fake, )
}

handler.help = ['heal']
handler.tags = ['rp']
handler.command = /^(heal)$/i

export default handler

function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}
