/*import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
let user = global.db.data.users[m.sender]
if (!user.autolevelup)
return !0
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier))
user.level++
if (before !== user.level) { 
m.reply(`*□ LEVEL UP 🆙✨*\n*╔━━━━━━━━━━━*\n*┃ ► _Genial subiste de nivel_*\n*┃◇┏─────────*\n*┃◇╎🍧⇨Nivel anterior:* ${before}\n*┃◇╎🍧⇨Nuevo nivel:* ${user.level}\n*┃◇╎🍧⇨Rango:* ${user.role}\n*┃◇╎🍧⇨Fecha:* ${new Date().toLocaleString('id-ID')}\n*┃◇┗─────────*\n*╚━━━━━━━━━━━*`.trim())
}}*/
