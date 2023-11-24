var handler = (m) => m
export async function all(m) {

for (let user of Object.values(global.db.data.users)) {

if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {

user.premiumTime = 0
user.premium = false
let JID = Object.keys(global.db.data.users).find((key) => global.db.data.users[key] === user)
let usuarioJid = JID.split`@`[0]
let textoo = `*😿 @${usuarioJid}, PARECE QUE TU TIEMPO PREMIUM SE A TERMINADO*`
await this.sendMessage(JID, {text: textoo, mentions: [JID]}, {quoted: ''})

}}}}
