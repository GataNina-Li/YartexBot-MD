var handler = async (m) => {

let tqto = `🚩 *Desarrollador*
⬡ *Azami*
https://github.com/AzamiJs

🎌 *Colaboradores*
⬡ *Mario* 
⬡ *GataDios*
⬡ *Endymion*
⬡ *Wotchito*
⬡ *HJ*
⬡ *Ender*
⬡ *Ax*
⬡ *Wilmer*
⬡ *Jose*
⬡ *Katashi*
⬡ *Daniel*
⬡ *Wilson*
⬡ *Cpw*

_Envie "colaboradores" para obtener el enlace del perfil de GitHub de los colaboradores_`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🚩 *GitHub - Colaboradores*

⬡ https://github.com/elrebelde21
⬡ https://github.com/GataNina-Li
⬡ https://github.com/ReyEndymion
⬡ https://github.com/WOTCHITO
⬡ https://github.com/HACHEJOTA
⬡ https://github.com/EnderLB
⬡ https://github.com/Jxtxn17
⬡ https://github.com/Wilsmac
⬡ https://github.com/KimdanBot-MD
⬡ https://github.com/KatashiFukushima
⬡ https://github.com/MoonContentCreator
⬡ https://github.com/WilsonWaoz
⬡ https://github.com/WorkCwp

_Envie "cc" para obtener el contacto de los colaboradores_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🎌 *Contacto - Colaboradores* 

⬡ *Gata Dios*
@593968263524

⬡ *ReyEndymion*
@5215517489568

⬡ *Wotchito*
@573027866596

⬡ *HJ*
@524437863111

⬡ *Ender*
@50558124470`
m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})
}
}
  
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

export default handler
