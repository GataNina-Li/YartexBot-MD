var handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner }) {

if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
  
if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
let forbidPrefixes = ['965', '966', '971', '974', '212', '213', '216', '44', '1', '62', '61', '64', '353', '33', '32', '41', '352', '377', '351', '244', '258', '91', '977', '880', '92', '94', '960', '7', '380', '375', '998', '996', '373', '374', '994', '992', '62', '49', '43', '39', '378', '379', '86', '886', '852', '853', '65', '850', '82', '93', '98', '48', '84', '856', '855', '254', '255', '256', '250', '257', '258', '252', '269', '243', '90', '998', '60', '222', '27', '265']

for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply('🚩 *Tu número es algo raro, seras eliminado/a*\n\nHasta pronto', m.sender)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
return false
}}}
  
return true

}

export default handler
