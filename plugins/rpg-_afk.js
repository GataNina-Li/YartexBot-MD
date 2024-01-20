/*import db from '../lib/database.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
*「⏰ DEJASTE DE ESTAR AFK ⏰」*\n ${user.afkReason ? ' \n👀 Razón: ' + user.afkReason : ''}
⏱️ *Durante:* ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
️⚠️ *EL USUARIO QUE MENCIONASTE ESTA AFK*
${reason ? '👀 *Razón* : ' + reason : '*Sin razón*'}
⏱️ *Durante* : ${clockString(new Date - afkTime)}
  `.trim())
    }
    return true
}*/
