import axios from "axios"
import fg from 'api-dylux';
import cheerio from 'cheerio';
import { Tiktok } from '../lib/tiktok.js';
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) throw `✨ Ingrese un enlace de tiktok\nEjemplo: *${usedPrefix + command} https://vm.tiktok.com/ZM6n8r8Dk*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `🚩 El enlace enviado no es un enlace de tiktok.`  
try {
m.react(rwait)
const data = await Tiktok(args)
conn.sendMessage(m.chat, {video: {url: data.nowm}, caption: `🍧 Usuario: ${data.author}`}, {quoted: m})
} catch {
try {
const tTiktok = await tiktokdlF(args[0]);
await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: `${wm}`}, {quoted: m});            
} catch {
try {
const response = await axios.get(`https://api.dorratz.com/v2/tiktok-dl?url=${args}`);
if (response.data.status && response.data.data) {
const videoData = response.data.data.media;
const videoUrl = videoData.org; 
await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: `🍧 Usuario:\n${response.data.data.author.nickname}\n${wm}` }, { quoted: m });
}} catch {
try {
const p = await fg.tiktok(args[0]);
await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: `${wm}`}, {quoted: m}); 
} catch (e) {
console.log(e) 
m.react(`❌`)         
}}}}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 2
export default handler

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return `*Ejemplo:* _${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/_`;
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr( 'value' );
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
}