import fetch from 'node-fetch';
import axios from 'axios';
const handler = async (m, {conn, text, args, command, usedPrefix}) => {
if (!text) conn.reply(m.chat, `✨ Te faltó el enlace de instagram.\nEjemplo: *${usedPrefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=*`, m);
try {
m.reply('🚀 Descargando su archivo de instagram..');
const res = await fetch(`https://api.siputzx.my.id/api/d/igdl?url=${args[0]}`);
const data = await res.json();
const fileType = data.data[0].url.includes('.webp') ? 'image' : 'video'; 
const downloadUrl = data.data[0].url;
if (fileType === 'image') {
await conn.sendFile(m.chat, downloadUrl, 'ig.jpg', `${wm}`, m, null, fake);
} else if (fileType === 'video') {
await conn.sendFile(m.chat, downloadUrl, 'ig.mp4', `${wm}`, m, null, fake);
}
} catch {   
try {
const apiUrl = `delirius-apiofc.vercel.app/download/instagram?url=${encodeURIComponent(args[0])}`;
const apiResponse = await fetch(apiUrl);
const delius = await apiResponse.json();
if (!delius || !delius.data || delius.data.length === 0) return m.react("❌");
const downloadUrl = delius.data[0].url;
const fileType = delius.data[0].type;
if (!downloadUrl) return m.react("❌");
if (fileType === 'image') {
await conn.sendFile(m.chat, downloadUrl, 'ig.jpg', `${wm}`, m, null, fake);
} else if (fileType === 'video') {
await conn.sendFile(m.chat, downloadUrl, 'ig.mp4', `${wm}`, m, null, fake);
} else {
return m.react("❌"); 
}} catch {   
try {
const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`;
const responsel = await axios.get(apiUrll);
const resultl = responsel.data;
for (const item of resultl.message) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text();
let tXXxt = `🍧 *URL:* ${shortUrRRl}\n\n${wm}`.trim()  
conn.sendFile(m.chat, item._url, null, tXXxt, m);
await new Promise((resolve) => setTimeout(resolve, 10000));
}} catch {    
try {
const datTa = await instagram.v1(args[0]);
for (const urRRl of datTa) {
const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const tXXxt = `🍧 *URL:* ${shortUrRRl}\n\n${wm}`.trim();
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
await new Promise((resolve) => setTimeout(resolve, 10000));
}} catch {
try {
const resultss = await instagramGetUrl(args[0]).url_list[0];
const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt2 = `🍧 *URL:* ${shortUrl2}\n\n${wm}`.trim();
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
} catch {
try {
const resultssss = await instagramdl(args[0]);
const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt4 = `🍧 *URL:* ${shortUrl3}\n\n${wm}`.trim();
for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
} catch {
try {
const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
const json = await human.json();
const videoig = json.result;
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
const txt1 = `🍧 *URL:* ${shortUrl1}\n\n${wm}`.trim();
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
} catch (e) {
conn.sendMessage(m.chat, {text: `🚩 Ocurrió un error inesperado: ${e}`, { quoted: m });
console.log(e)
}}}}}}}}
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i
handler.limit = 2
handler.register = true
export default handler