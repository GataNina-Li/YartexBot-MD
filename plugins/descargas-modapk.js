/*import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*❗ ɪɴɢʀᴇsᴇ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇ ʟᴀ ᴀᴘᴋ ǫᴜᴇ ǫᴜɪᴇʀᴀ ʙᴜsᴄᴀʀ.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = ` *დ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙳𝙾𝚁 𝙳𝙴 𝙰𝙿𝙺𝚂 დ* \n\n📌 *𝙽𝙾𝙼𝙱𝚁𝙴:* ${data5.name}\n📦 *𝙿𝙰𝙲𝙺𝙰𝙶𝙴:* ${data5.package}\n🕒 *𝚄𝙻𝚃𝙸𝙼𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙲𝙸𝙾𝙽:* ${data5.lastup}\n📥 *𝚃𝙰𝙼𝙰𝙽̃𝙾:* ${data5.size}`
 await conn.sendMessage(m.chat, {
text: response,
contextInfo: {
externalAdReply: {
title: data5.name,
body: '𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐭𝐲𝐁𝐨𝐭',
sourceUrl: md,
thumbnailUrl: data5.icon, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   

//await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '* ⛔  𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙴𝚂 𝙳𝙴𝙼𝙰𝙲𝙸𝙰𝙳𝙾 𝙿𝙴𝚂𝙰𝙳𝙾 𝙿𝙾𝚁 𝙻𝙾 𝚀𝚄𝙴 𝙽𝙾 𝚂𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙰.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*❗ 𝙀𝙧𝙧𝙤𝙧 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙖𝙧𝙤𝙣 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙨𝙪 𝙗𝙪𝙨𝙦𝙪𝙚𝙙𝙖.*`;
  }    
};
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;*/
