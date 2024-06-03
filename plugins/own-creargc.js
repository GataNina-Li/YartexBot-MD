/*
⚠ PROHIBIDO EDITAR ⚠
El código de este archivo fue actualizado por:
- Diego-YL-177 >> https://github.com/Diego-YL-177
*/

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 🌟')
  try {
    //m.react('🚀')
    m.reply('😊 𝗖𝗥𝗘𝗔𝗡𝗗𝗢 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢, 𝗕𝗬: 𝗬𝗔𝗥𝗧𝗘𝗫')
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' +  link
    m.reply(await conn.groupInviteCode(group.git)
  } catch (e) {
    m.reply(`❌ 𝗘𝗥𝗥𝗢𝗥`)
  }
}

handler.help = ['creargc *<nombre>*']
handler.tags = ['owner']
handler.command = /^(creargrupo|creargroup|creargc|gccreate)$/
handler.owner = true
//handler.premium = false

export default handler