import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import can from 'knights-canvas'

let handler = async (m, { conn }) => {

function test(num, size) {
var s = num+''
while (s.length < size) s = '0' + s
return s
}
/*let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
»»» 「 ✨ NIVEL ✨ 」
» *NOMBRE*
› ${name}
•-------------------
» *NIVEL:* 
› *${user.level}*
•-------------------
» *XP:*
› *${user.exp - min}/${xp}*

*Te falta ${max - user.exp} de XP para subir de nivel*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`
        let str = `
»»» 「 ✨ NIVEL ✨ 」
» *NIVEL ANTERIOR:*
› *${before}*
•-------------------
» *NIVEL ACTUAL:*
› *${user.level}*
•-------------------
» *FECHA:* 
› *${new Date().toLocaleString('id-ID')}*

*_Cuanto más interactúes con ${cb}, mayor será tu nivel!!_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }*/
}

handler.help = ['levelup']
handler.tags = ['rg']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
