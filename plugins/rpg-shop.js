/*const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `*NOTA DE PAGO 📝*
    
*COMPRA* : + ${count}💎 
*GASTADO* : -${xpperdiamond * count} XP`, m)
  } else conn.reply(m.chat, `*⚠️ NO TIENES SUFICIENTE XP PARA COMPAR ${count} DIAMANTES 💎*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['rg']
handler.command = ['buy', 'buyall'] 
handler.register = true
handler.disabled = false

export default handler
*/

const items = {
buy: {
limit: { exp: 350 },
potion: { money: 1 },
},
sell: {
potion: {
money: 10,
},
diamond: { money: 5 }
}}

var handler = async (m, { command, usedPrefix, args }) => {

let user = global.db.data.users[m.sender]
const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
const info = `🛍️ *Uso del formato*
!${command} [crate] [count]

Ejemplo de uso: !${command} potion 10
    
📍 *Lista de items:*
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `${global.rpg.emoticon(v)}${v} ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()}).join('\n')}`.trim()
  
const item = (args[0] || '').toLowerCase()
const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!listItems[item]) return conn.reply(m.chat, info, m, fake, )
if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.reply(m.chat, `🪙 No tienes suficiente *${global.rpg.emoticon(paymentMethod)}${paymentMethod}* para comprar *${total}* ${global.rpg.emoticon(item)}${item}. Necesitas *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* más ${paymentMethod} para poder comprar`, m, fake, )
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
return conn.reply(m.chat, `🛍️ Has comprado *${total}* ${global.rpg.emoticon(item)}${item}`, m, fake, )
} else {
if (user[item] < total) return m.reply(`You don't have enough *${global.rpg.emoticon(item)}${item}* to sell, you only have ${user[item]} items`)
user[item] -= total
user.money += listItems[item].money * total
return conn.reply(m.chat, `🛍️ Vendiste *${total}* ${global.rpg.emoticon(item)}${item}`, m, fake, )
}

}
handler.help = ['buy', 'sell']
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.register = true

export default handler

function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}
