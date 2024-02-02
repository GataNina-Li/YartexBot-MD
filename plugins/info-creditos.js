var handler = async (m) => {

let tqto = `🚩 *Desarrollador*
⬡ *Azami*
https://github.com/AzamiJs

🎌 *Colaboradores*
⬡ *Mario* (Elrebelde21)
⬡ *GataDios* (GataNina-Li)
⬡ *Endymion* (ReyEndymion)
⬡ *Wotchito* (Aleixon127271)
⬡ *HJ* (HACHEJOTA)
⬡ *Ender* (EnderLB)
⬡ *Ax* (Jxtxn17)
⬡ *Wilmer* (Wilsmac)
⬡ *Jose* (KimdanBot-MD)
⬡ *Katashi* (KatashiFukushima)
⬡ *Daniel* (MoonContentCreator)
⬡ *Wilson* (WilsonWaoz)
⬡ *Cpw* (Criwilop)

_Envie "colaboradores" para obtener el enlace del perfil de los colaboradores_`

conn.reply(m.chat, tqto, m, fake, )


}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

export default handler
