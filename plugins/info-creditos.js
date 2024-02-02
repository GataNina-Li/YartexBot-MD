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
let texto = `🚩 *GitHub Colaboradores*

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
⬡ https://github.com/WorkCwp`
conn.reply(m.chat, texto, m, fake, )
}}
  
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

export default handler
