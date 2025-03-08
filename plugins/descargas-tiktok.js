const handler = async (m, { conn, text }) => {

if (!text) return conn.reply(m.chat, `✨ Ingrese un enlace de tiktok\nEjemplo: *${usedPrefix + command} https://vm.tiktok.com/ZM6n8r8Dk*`, m);
m.react(rwait);
const isUrl = /https:\/\/(vt\.tiktok\.com|vm\.tiktok\.com)/gi.test(text);
if (!isUrl) {
return conn.reply(m.chat, '🚩 El enlace enviado no es un enlace de tiktok.', m);
}
const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${text}`;
try {
const res = await fetch(apiUrl);
if (!res.ok) throw new Error(`El servidor respondió con el estado ${res.status}`);
const json = await res.json();
if (!json || !json.data) return conn.reply(m.chat, '❌ El enlace proporcionado no es válido o no contiene datos de video. Por favor, intenta con otro enlace.', m);
const videoData = json.data.meta.media.find(media => media.type === 'video');
if (!videoData) return conn.reply(m.chat, '❌ El enlace proporcionado no parece ser un video de TikTok.', m);
const { title, author, like, comment, repro, share, download } = json.data;
const videoUrl = videoData.hd;
const caption = createCaption(title, author?.nickname, like, comment, repro, share, download);
await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption }, { quoted: m });
m.react(done);
} catch (e) {
conn.reply(m.chat, `❗ *Error:* ${e.message}`, m);
m.react(error);
console.error('Error:', e);
}};
function createCaption(creator) {
return `🍧 *Usuario* ${creator || 'No disponible'}\n\n${wm}`;
}

handler.help = ['tiktok'];
handler.tags = ['dl'];
handler.command = /^(tt|tiktok)(dl|nowm)?$/i;
handler.limit = 2;

export default handler;