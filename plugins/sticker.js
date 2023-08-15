//const require sticker from '../lib/sticker.js'
//const require uploadFile from '../lib/uploadFile.js'
//const require uploadImage from '../lib/uploadImage.js'
//const require webp2png from '../lib/webp2mp4.js'

//import {sticker} from "../lib/sticker.js";
//import uploadFile from "../lib/uploadFile.js";
//import uploadImage from "../lib/uploadImage.js";
//import {webp2png} from "../lib/webp2mp4.js";

let handler = async (m, {conn, args, usedPrefix, command}) => {
  let stiker = false;
  let username = conn.getName(m.sender);
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply("*⚠️ EL VÍDEO NO PUEDE DURAR MAS DE 7 SEGUNDOS*");
      let img = await q.download?.();
      if (!img)
        throw `*⚠️ RESPONDE A UNA IMAGEN O VIDEO CON ${usedPrefix + command}*`;
      let out;
      try {
        stiker = await sticker(img, false, global.packname, global.author);
      } catch (e) {
        console.error(e);
      } finally {
        await conn.reply(m.chat, `_Calma crack estoy haciendo tu sticker 👏_\n\n_*Recuerda los stickersgif son de 6 segundos*_\n\n_*by CuriosityBot*_`, m)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img);
          else if (/image/g.test(mime)) out = await uploadImage(img);
          else if (/video/g.test(mime)) out = await uploadFile(img);
          if (typeof out !== "string") out = await uploadImage(img);
          stiker = await sticker(false, out, global.packname, global.author);
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author);
      else return m.reply("*⚠️ EL ENLACE / URL / LINK NO ES VÁLIDO*");
    }
  } catch (e) {
    console.error(e);
    if (!stiker) stiker = e;
  } finally {
    if (stiker)
      conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else
      throw "❌ Error esta todo re mal (azami no le sabes)";
  }
};
handler.help = ["sticker"];
handler.tags = ["sticker"];
handler.command = ["s", "sticker", "stiker"];

export default handler;

const isUrl = (text) => {
  return text.match(
    new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, "gi")
  );
};
/*let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let stiker = false
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`*⚠️ RESPONDE A UNA IMAGEN O VIDEO CON ${usedPrefix + command}*`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*⚠️ EL VÍDEO NO PUEDE DURAR MAS DE 7 SEGUNDOS*')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `_Calma crack estoy haciendo tu sticker 👏_\n\n_*Recuerda los stickersgif son de 6 segundos*_\n\n_*by CuriosityBot*_`, m)
  
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
  
if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*⚠️ EL ENLACE / URL / LINK NO ES VÁLIDO*')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}*/
