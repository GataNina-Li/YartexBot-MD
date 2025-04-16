import fs from 'fs'
import fetch from 'node-fetch'
import jimp from 'jimp'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import moment from 'moment-timezone'
import { join, dirname } from 'path'
import ct from 'countries-and-timezones'
import { parsePhoneNumber } from 'libphonenumber-js'

let handler = async (m, { conn, usedPrefix: _p, text, command }) => {
let editMenu = global.db.data.chats[m.chat].editMenu
let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'; moment.locale('es')
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) { fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1)
nombreLugar = countryData.name; const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
} else { 
lugarMoment = moment().tz('America/Quito')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1)
nombreLugar = 'America'; ciudad = 'Quito' 
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author, version, description, collaborators } = require(join(__dirname, '../package.json'))

let { money, joincount } = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
let menu = `
╭・・・・☆・・・・・・☆ ・・・・
┆ ⋮ . ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .
┆ ⋮ ⋅.⊹ *𐒄Ꮛ𐒐Ꮼ́ Ꮯ𐒀𐒄ᎵႱᏋᎿ𐒀* ⋅.⊹
┆ ⋮ . ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .
┆ ⋮
┆ ⋮  *Usuario* ${editMenu.mencion ? `@${m.sender.split("@")[0]}` : await conn.getName(m.sender) }
┆ ⋮  *Lugar* ${nombreLugar} - ${ciudad}
┆ ⋮  *Registrados* \`\`\`${Object.values(global.db.data.users).filter(user => user.registered == true).length}/${Object.keys(global.db.data.users).length}\`\`\`
┆ ⋮  *Versión* \`${version}\`
┆ ⋮  *Menú de Audios* \`${_p}menu2\`
╰・・・・☆・・・・・・☆ ・・・・
${editMenu.dividir ? readMore : ''}
${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ℹ :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍 
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ʜᴇʟᴘ
*. ⋅⊰ꕤ ┆* ${_p}ᴀʟʟᴍᴇɴᴜ 
*. ⋅⊰ꕤ ┆* ${_p}ʜᴏʀᴀʀɪᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴏᴡɴᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏɴᴛᴀᴄᴛᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀᴇᴀᴅᴏʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴛQᴛᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀᴇᴅɪᴛᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀᴇᴅɪᴛꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛʜᴀɴᴋꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛʜᴀɴᴋꜱᴛᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴜᴇɴᴛᴀꜱᴏꜰɪᴄɪᴀʟᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴜᴇɴᴛᴀꜱᴏꜰᴄ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴜᴇɴᴛᴀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴜᴘᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀꜱʜ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀꜱʜʙᴏᴀʀᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴠɪᴇᴡꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀᴛᴀʙᴀꜱᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴜꜱᴜᴀʀɪᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴜꜱᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏɴᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏɴᴀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏɴᴀꜱɪ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴏᴜᴘꜱ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴏᴜᴘʟɪꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴꜰɪɴɪᴛʏ
*. ⋅⊰ꕤ ┆* ${_p}ʜᴏꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʜᴏꜱᴛɪɴɢ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴꜰᴏʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴꜱᴛᴀʟᴀʀʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴄʀɪᴘᴛ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🪂 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐈𝐍𝐈𝐂𝐈𝐎
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴅꜱ
*. ⋅⊰ꕤ ┆* ${_p}ꜰɪxᴍɢᴇꜱᴘᴇʀᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪꜱᴛᴀꜰᴀᴋᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇɴᴜ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇɴᴜ2
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴜᴅɪᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴘɪɴɢ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴘᴏʀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇǫᴜᴇꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴘᴇᴇᴅᴛᴇꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴇꜱᴛᴀᴅᴏ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴛᴀᴛᴜꜱ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🔰 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐆𝐑𝐔𝐏𝐎𝐒
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅᴍɪɴꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴘʀᴏʙᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴏᴜᴘ ᴏᴘᴇɴ / ᴄʟᴏꜱᴇ
*. ⋅⊰ꕤ ┆* ${_p}ɢʀᴜᴘᴏ ᴀʙʀɪʀ / ᴄᴇʀʀᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇᴍᴏᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʜɪᴅᴇᴛᴀɢ
*. ⋅⊰ꕤ ┆* ${_p}ɪᴅɢᴄ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴғᴏɢʀᴜᴘᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴋɪᴄᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪɴᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪꜱᴛᴀɴᴜᴍ
*. ⋅⊰ꕤ ┆* ${_p}ᴋɪᴄᴋɴᴜᴍ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʀᴏᴍᴏᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴠᴏᴋᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛʙʏᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴅᴇꜱᴄ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛɴᴀᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴘᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴘᴘɢᴄ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴘᴘɢʀᴏᴜᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱɪᴍᴜʟᴀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴀɢᴀʟʟ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 💠 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐘𝐀𝐑𝐓𝐄𝐗 𝐈𝐀
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀʀᴅ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀʀᴅɪᴍɢ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀʟʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀʟʟ2
*. ⋅⊰ꕤ ┆* ${_p}ʜᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴏᴘᴇɴɪᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʜᴀᴛɢᴘᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɪᴀ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 👾 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐉𝐔𝐄𝐆𝐎𝐒
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ʟᴏᴠᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴜᴇʀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴜʟᴇᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴜʟᴇᴛᴀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴄᴇʀᴛɪᴊᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴄᴇʀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅɪᴠɪɴᴀɴᴢᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴇᴋᴀᴛᴇᴋɪ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅᴠᴘᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴅᴠ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʟıᴄᴜʟᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʟıᴄᴜʟᴀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴀɴᴄıᴏɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴛᴛᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴛᴛᴄ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟxᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏxᴇᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏxᴇᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴏxxᴇᴏ
*. ⋅⊰ꕤ ┆* ${_p}ɢᴀʏ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴏꜱ10
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴀᴛᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʀꜱᴏɴᴀʟɪᴅᴀᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴘᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʀᴇɢᴜɴᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴛᴏ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱʜɪᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱıᴍı
*. ⋅⊰ꕤ ┆* ${_p}ꜱʟᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴜꜱᴄᴀʀᴘᴀʟᴀʙʀᴀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴏᴘᴀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴏᴜᴘ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴘᴅᴇᴘᴀʟᴀʙʀᴀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛıᴄᴛᴀᴄᴛᴏᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴘɢᴀʏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴘᴏᴛᴀᴋᴜꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴘʜᴇᴛᴇʀᴏꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴘᴏꜱᴛᴀʀ \`ᴄᴀɴᴛɪᴅᴀᴅ\`
*. ⋅⊰ꕤ ┆* ${_p}ᴄʜɪꜱᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏɴꜱᴇᴊᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴏʀᴀᴄɪᴏɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴘɪʀᴏᴘᴏ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇꜰʀᴀɴ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 📥 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ꜰʙ
*. ⋅⊰ꕤ ┆* ${_p}ɢɪᴛᴄʟᴏɴᴇ
*. ⋅⊰ꕤ ┆* ${_p}ɪɢ
*. ⋅⊰ꕤ ┆* ${_p}ᴅʟᴍᴏᴅʟᴀᴛᴇꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇᴅɪᴀꜰɪʀᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴘᴋᴍᴏᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʟᴀʏ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʟᴀʏ2
*. ⋅⊰ꕤ ┆* ${_p}ᴘʟᴀʏ3
*. ⋅⊰ꕤ ┆* ${_p}ᴘʟᴀʏ4
*. ⋅⊰ꕤ ┆* ${_p}ᴛɪᴋᴛᴏᴋ
*. ⋅⊰ꕤ ┆* ${_p}ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʏᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʏᴛᴠ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ✨ :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐒𝐄𝐑𝐁𝐎𝐓
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ʙᴄʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴇᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴇʀʜᴇɴᴛɪ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴛᴏᴘ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪꜱᴛᴊᴀᴅɪʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴏᴛꜱ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴜʙꜱʙᴏᴛꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴊᴀᴅɪʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇʀʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɢᴇᴛᴄᴏᴅᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇɴᴛʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴋᴇɴ
*. ⋅⊰ꕤ ┆* ${_p}ɢᴇᴛᴛᴏᴋᴇɴ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇʀʙᴏᴛᴛᴏᴋᴇɴ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ⚙️ :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴇɴᴀʙʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅɪꜱᴀʙʟᴇ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🔎 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐁𝐔𝐒𝐂𝐀𝐑𝐃𝐎𝐑
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴇᴛᴄʜ
*. ⋅⊰ꕤ ┆* ${_p}ɢᴇᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʟɪꜱᴘʟᴜꜱ
*. ⋅⊰ꕤ ┆* ${_p}ɢɪᴛʜᴜʙꜱᴇᴀʀᴄʜ
*. ⋅⊰ꕤ ┆* ${_p}ɴᴘᴍꜱᴇᴀʀᴄʜ
*. ⋅⊰ꕤ ┆* ${_p}ʏᴛꜱᴇᴀʀᴄʜ
*. ⋅⊰ꕤ ┆* ${_p}ᴘᴇʟɪꜱᴘʟᴜꜱ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🗿 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴀɴɪᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏɢɪꜰᴀᴜᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏɪᴍɢ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴍᴘ3
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴠɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴜʀʟ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴠɪᴅᴇᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴛꜱ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🧩 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ꜱ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴛɪᴄᴋᴇʀꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴡᴍ \`ᴘᴀᴄᴋɴᴀᴍᴇ\`| \`ᴀᴜᴛʜᴏʀ\`
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ⚔️ :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐑𝐏𝐆
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴀꜰᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀʟ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀɪᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴀɪʟʏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʟᴀɪᴍ
*. ⋅⊰ꕤ ┆* ${_p}ʜᴇᴀʟ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴇᴠᴇʟᴜᴘ
*. ⋅⊰ꕤ ┆* ${_p}ᴍɪɴᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴍʏɴꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴘʀᴏꜰɪʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴘᴀɪʀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴀϙᴜᴇᴀʀ \`@ᴜꜱᴇʀ\`
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴀɢᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛʀᴀɴꜱꜰᴇʀ \`ᴛɪᴘᴏ ᴄᴀɴᴛɪᴅᴀᴅ @ᴛᴀɢ\`
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇɢ
*. ⋅⊰ꕤ ┆* ${_p}ᴡᴏʀᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪᴍɪᴛ \`@ᴜꜱᴇʀ\`
*. ⋅⊰ꕤ ┆* ${_p}ʙᴜʏ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇʟʟ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🎶 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐀𝐔𝐃𝐈𝐎𝐒 - 𝐄𝐅𝐄𝐂𝐓𝐎𝐒
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀss
*. ⋅⊰ꕤ ┆* ${_p}ʙʟᴏᴡɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇᴇᴘ
*. ⋅⊰ꕤ ┆* ${_p}ᴇᴀʀʀᴀᴘᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ɴɪɢʜᴛᴄᴏʀᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴠᴇʀꜱᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴏʙᴏᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱʟᴏᴡ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴍᴏᴏᴛʜ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴜᴘᴀɪ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🧰 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴇɴᴠɪᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴄᴏʀᴛᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴇᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅʀᴏᴘᴍᴀɪʟ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀᴋᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
*. ⋅⊰ꕤ ┆* ${_p}ɴᴏᴡᴀ
*. ⋅⊰ꕤ ┆* ${_p}ǫʀᴄᴏᴅᴇ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴘᴏɪʟᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇᴀᴅǫʀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴛʏʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴛʀᴀᴅᴜᴄɪʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏᴅᴇꜱɪᴅɪᴏᴍᴀꜱ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🍥 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐀𝐍𝐈𝐌𝐄
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴀɴɪᴍᴇʟɪɴᴋ
*. ⋅⊰ꕤ ┆* ${_p}ꜰᴀɴᴀʀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʜᴜꜱʙᴜ
*. ⋅⊰ꕤ ┆* ${_p}ᴋᴀɴɴᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇɢᴜᴍɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ɴᴇᴋᴏ
*. ⋅⊰ꕤ ┆* ${_p}ꜱʜᴏᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴡᴀɪꜰᴜ
*. ⋅⊰ꕤ ┆* ${_p}ᴇʟᴀɪɴᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴀɴɪᴍᴇɪɴꜰᴏ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴏʟɪᴄᴇ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🍷 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑/𝐀
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴜᴛᴏᴀᴅᴍɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀᴄᴋᴜᴘ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇꜱᴘᴀʟᴅᴏ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏᴘɪᴀ
*. ⋅⊰ꕤ ┆* ${_p}ʙᴀɴᴄʜᴀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʙʀᴏᴀᴅᴄᴀꜱᴛɢʀᴏᴜᴘ \`ᴛᴇxᴛᴏ\`
*. ⋅⊰ꕤ ┆* ${_p}ʙᴄɢᴄ \`ᴛᴇxᴛᴏ\`
*. ⋅⊰ꕤ ┆* ${_p}ʙʟᴏᴄᴋ
*. ⋅⊰ꕤ ┆* ${_p}ᴜɴʙʟᴏᴄᴋ
*. ⋅⊰ꕤ ┆* ${_p}ʙʟᴏᴄᴋʟɪꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʟᴇᴀʀᴛᴍᴘ
*. ⋅⊰ꕤ ┆* ${_p}ᴅꜱᴏᴡɴᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}$ ᴏ => ᴏ >
*. ⋅⊰ꕤ ┆* ${_p}ɢᴇᴛᴘʟᴜɢɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴊᴏɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴏᴜᴛ
*. ⋅⊰ꕤ ┆* ${_p}ʟᴇᴀᴠᴇɢᴄ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴀʟɪʀ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛʙᴏᴛɴᴀᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ʀᴇꜱᴛᴀʀᴛ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴀᴠᴇᴘʟᴜɢɪɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴜɴʙᴀɴᴜꜱᴇʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴜᴘᴅᴀᴛᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴀᴄᴛᴜᴀʟɪᴢᴀʀ
*. ⋅⊰ꕤ ┆* ${_p}ᴇɴᴀʙʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴅɪꜱᴀʙʟᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴄʀᴇᴀʀɢᴄ \`ɴᴏᴍʙʀᴇ\`
*. ⋅⊰ꕤ ┆* ${_p}ᴜɴʙᴀɴᴄʜᴀᴛ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🖼️ :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ɢɪᴍᴀɢᴇ
*. ⋅⊰ꕤ ┆* ${_p}ɪᴍᴀɢᴇɴ
*. ⋅⊰ꕤ ┆* ${_p}ᴘɪɴᴛᴇʀᴇꜱᴛ
*. ⋅⊰ꕤ ┆* ${_p}ᴀɴɪᴍᴇ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴇᴍᴇ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🗃️ :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴏᴛᴀʟꜰ
*. ⋅⊰ꕤ ┆* ${_p}ꜱᴇᴛᴄᴍᴅ
*. ⋅⊰ꕤ ┆* ${_p}ᴅᴇʟᴄᴍᴅ
*. ⋅⊰ꕤ ┆* ${_p}ʟɪꜱᴛᴄᴍᴅ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*

${editMenu.emoji ? '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ 🥵 :･ﾟ✧:･ﾟ✧･ﾟ✧*' : '*. ⋅ᘛ⁐̤ᕐ⩺┈•༶:･ﾟ✧:･ﾟ✧･ﾟ✧*'}
*. ⋅⊰ꕤ ┆* ⭔ 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎 +𝟏𝟖
*. ⋅⊰ꕤ ┆* ・・・・・・・・・・・
*. ⋅⊰ꕤ ┆* ${_p}ᴄʜɪɴᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴠɪᴇᴛɴᴀᴍɪᴛᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴛᴀɪʟᴀɴᴅᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ɪɴᴅᴏɴᴇꜱɪᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴊᴀᴘᴏɴᴇꜱ
*. ⋅⊰ꕤ ┆* ${_p}ᴄᴏʀᴇᴀɴᴀ
*. ⋅⊰ꕤ ┆* ${_p}ᴍᴀʟᴀʏᴀ
*. ⋅ ˚̣- : ✧ : – ⭒ ⊹ ⭒ – : ✧ : -˚̣⋅ .*
`.trim()

let contextInfo = {
mentionedJid: await conn.parseMention(menu),
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363302472386010@newsletter',
newsletterName: 'YartexBot-MD ✨',
serverMessageId: 100
}}

if (editMenu.imagen) {
await conn.sendMessage(m.chat, { image: { url: yartexImg.getRandom() }, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else if (editMenu.video) {
await conn.sendMessage(m.chat, { video: { url: yartexVid.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else if (editMenu.dinamico) {
const mediaFiles = [{ image: { url: yartexImg.getRandom() } }, { video: { url: yartexVid.getRandom(), gifPlayback: true } }]
let randomMedia = getRandom(mediaFiles)
await conn.sendMessage(m.chat, { ...randomMedia, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else if (editMenu.simple) {
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else if (editMenu.personalizado) {
let newImg = await cropImageToSquare(editMenu.personalizado)
await conn.sendMessage(m.chat, { image: newImg, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
} else {
await conn.sendMessage(m.chat, { image: { url: yartexNavidad.getRandom() }, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: editMenu.verificado ? fkontak : m })
//await conn.sendMessage(m.chat, { video: { url: yartexVid.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender], contextInfo: contextInfo }, { quoted: fkontak })
}
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.command = ['help', 'menucompleto', 'allmenu'] 
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function getRandom(array) {
return array[Math.floor(Math.random() * array.length)];
}

async function cropImageToSquare(imageUrl) {
try {
let response = await fetch(imageUrl)
if (!response.ok) {
return console.log(`Error al descargar la imagen (${response.status} ${response.statusText})`)
}
let imageBuffer = await response.buffer()
let img = await jimp.read(imageBuffer)
let width = img.getWidth()
let height = img.getHeight()
let size = Math.min(width, height)
let x = (width - size) / 2
let y = (height - size) / 2
img.crop(x, y, size, size)
let croppedBuffer = await img.getBufferAsync(jimp.MIME_PNG)
return croppedBuffer
} catch (error) {
return console.error('Error:', error)
}}
