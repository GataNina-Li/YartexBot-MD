/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
import path, { join } from 'path'
import { getRandomImageBoys } from 'module-gatadios'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

global.owner = [
['5493873687620', '✨ YartexBot-MD', true],
['593968263524'],
['5214434703586'],
['595976126756'],
['593968585383'],
['50492280729'],
['573012482597']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

global.isdev = [['542215034412'], ['593968263524'], ['573012482597'], ['5492215034412'], ['5214434703586'], ['595976126756'], ['573012482597']]
 
global.packname = 'ʏᴀʀᴛᴇx ʙᴏᴛ ᴍᴅ ✨'
global.author = 'ɢᴀᴛᴀ ᴅɪᴏs 🫶'
global.wm = 'ʏᴀʀᴛᴇx ʙᴏᴛ ᴍᴅ | ɢᴀᴛᴀ ᴅɪᴏs 🫶'
global.wm2 = '                   ʏᴀʀᴛᴇx ʙᴏᴛ ᴍᴅ ✨\n> *♡º°‘¨ һᥱᥴһ᥆ ⍴᥆r 𝖿ᥲᥒs ⍴ᥲrᥲ 𝖿ᥲᥒs ¨‘°º♡*'
global.des = 'һᥱᥴһ᥆ ⍴᥆r 𝖿ᥲᥒs ⍴ᥲrᥲ 𝖿ᥲᥒs.'

global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'GataNina-Li'
global.devnum = '+593 96 826 3524'
 
global.dis = ':⁖֟⊱┈֟፝❥ '
global.cen1 = '✧──⭒─⊹ '
global.cen2 = ' ⊹─⭒──✧'

global.random1 = getRandomImageBoys

global.imagen1 = fs.readFileSync('./storage/logos/Menu1.jpg')
global.imagen2 = fs.readFileSync('./storage/logos/Menu2.jpg')
global.imagen3 = fs.readFileSync('./storage/logos/Menu3.jpg')
global.imagen4 = fs.readFileSync('./storage/logos/Menu4.jpg')

var img = 'https://telegra.ph/file/9a9a4851b638c90ebb214.jpg'; var img1 = 'https://telegra.ph/file/c248943164f6a3d28088c.jpg'; var img2 = 'https://telegra.ph/file/f14102fec3b4104e41e98.jpg'; var img3 = 'https://telegra.ph/file/5646b7540b22e8a00615e.jpg'; var img4 = 'https://telegra.ph/file/e6c11fc60a74a77789f56.jpg'; var img5 = 'https://telegra.ph/file/19af932324e24ceb896cd.jpg'
var img6 = 'https://telegra.ph/file/e1c9c47c389b17de97a03.jpg'; var img7 = 'https://telegra.ph/file/caa791fa59111b4b4311a.jpg'; var img8 = 'https://telegra.ph/file/76fff527eeaa2b61099ca.jpg'; var img9 = 'https://telegra.ph/file/3dad91ec4eea23ea93f3d.jpg'; var img10 = 'https://telegra.ph/file/4443d4eb77531313b1f9b.jpg'
global.ImgAll = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

let botImg1 = 'https://telegra.ph/file/75b8ee5025fea7ddddb41.jpg'
let botImg2 = 'https://telegra.ph/file/95dc64c1182fd7985c838.jpg'
let botImg3 = 'https://telegra.ph/file/e46ef0f31bc2bd030ce6b.jpg'
let botImg4 = 'https://telegra.ph/file/5895dd5bee8c8c24a0966.jpg'
let botImg5 = 'https://telegra.ph/file/96c870b2df851f15b000f.jpg'
global.yartexImg = [botImg1, botImg2, botImg3, botImg4, botImg5]

let botVid1 = 'https://telegra.ph/file/991f743c25817e4b94db5.mp4'
let botVid2 = 'https://telegra.ph/file/a45d4c28a7b57bf2b4e5c.mp4'
let botVid3 = 'https://telegra.ph/file/42628261be1a83c99907b.mp4'
let botVid4 = 'https://telegra.ph/file/579959f8734e12ee3d827.mp4'
let botVid5 = 'https://telegra.ph/file/7f9922e4d2cb2001b4682.mp4'
let botVid6 = 'https://telegra.ph/file/80527d2fae3aa79c71f05.mp4'
let botVid7 = 'https://telegra.ph/file/da87e85c1e17a51decea9.mp4' //bl
let botVid8 = 'https://telegra.ph/file/141ad86e7786dbf6ea2dc.mp4' //bl
let botVid9 = 'https://telegra.ph/file/b1c3f0ffd8d7af9740000.mp4' //bl
let botVid10 = 'https://telegra.ph/file/3a3e1bf3825add3679cb9.mp4' //bl
let botVid11 = 'https://telegra.ph/file/a3485e1c3b115ba186b45.mp4' //bl
let botVid12 = 'https://telegra.ph/file/1c5f62544f7278899a9be.mp4' //bl
global.yartexVid = [botVid1, botVid2, botVid3, botVid4, botVid5, botVid6, botVid7, botVid8, botVid9, botVid10, botVid11, botVid12]

global.yartexNavidad = ['https://qu.ax/UsZaq.png', 'https://qu.ax/rGvHH.png', 'https://qu.ax/vyHLe.png', 'https://qu.ax/pSeNy.jpg', 'https://qu.ax/xSOyA.jpg', 'https://qu.ax/hjNwc.jpg', 'https://qu.ax/yKVhD.jpg']
  
global.yt = 'https://youtube.com/@gatadios'
global.ig = 'https://instagram.com/gata_dios'
global.md = 'https://github.com/GataNina-Li/YartexBot-MD'
global.paypal = 'https://paypal.me/OficialGD'
global.git = 'https://github.com/GataNina-Li'
global.email = 'theyartexbot@gmail.com'
global.group = 'https://chat.whatsapp.com/EfWlxyVXlZ7AWVJ6sjJvyI' //Grupo ofc
global.channel = 'https://whatsapp.com/channel/0029VabS4KD8KMqeVXXmkG1D'
global.linkSity = [yt, ig, md, paypal, git, channel, email]

global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './storage/logos/Menu1.jpg'

global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

global.wait = '*■□□□□ 20%*'
global.waitt = '*■■■□□ 60%*'
global.waittt = '*■■■■□ 90%*'
global.waitttt = '*■■■■■ 100%*'

global.fsizedoc = '999999'
global.fpagedoc = '9999'

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'GataDiosV3'
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = {
amel: 'https://melcanz.com',
bx: 'https://bx-hunter.herokuapp.com',
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
bg: 'http://bochil.ddns.net',
fdci: 'https://api.fdci.se',
dzx: 'https://api.dhamzxploit.my.id',
bsbt: 'https://bsbt-api-rest.herokuapp.com',
zahir: 'https://zahirr-web.herokuapp.com',
zeks: 'https://api.zeks.me',
hardianto: 'https://hardianto-chan.herokuapp.com',
pencarikode: 'https://pencarikode.xyz',
LeysCoder: 'https://leyscoders-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
lol: 'https://api.lolhuman.xyz',
fgmods: 'https://api-fgmods.ddns.net',
pencarikode: 'https://pencarikode.xyz',
Velgrynd: 'https://velgrynd.herokuapp.com',
rey: 'https://server-api-rey.herokuapp.com',
hardianto: 'http://hardianto-chan.herokuapp.com',
shadow: 'https://api.reysekha.xyz',
apialc: 'https://api-alc.herokuapp.com',
botstyle: 'https://botstyle-api.herokuapp.com',
neoxr: 'https://neoxr-api.herokuapp.com',
ana: 'https://anabotofc.herokuapp.com/',
kanx: 'https://kannxapi.herokuapp.com/',
dhnjing: 'https://dhnjing.xyz'
},

global.APIKeys = {
'https://api-alc.herokuapp.com': 'ConfuMods',
'https://api.reysekha.xyz': 'apirey',
'https://melcanz.com': 'F3bOrWzY',
'https://bx-hunter.herokuapp.com': 'Ikyy69',
'https://api.xteam.xyz': '5bd33b276d41d6b4',
'https://zahirr-web.herokuapp.com': 'zahirgans',
'https://bsbt-api-rest.herokuapp.com': 'benniismael',
'https://api.zeks.me': 'apivinz',
'https://hardianto-chan.herokuapp.com': 'hardianto',
'https://pencarikode.xyz': 'pais',
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
'https://server-api-rey.herokuapp.com': 'apirey',
'https://api.lolhuman.xyz': 'GataDiosV2',
'https://botstyle-api.herokuapp.com': 'Eyar749L',
'https://neoxr-api.herokuapp.com': 'yntkts',
'https://anabotofc.herokuapp.com/': 'AnaBot'
}

global.multiplier = 200 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆', limit: '💎', exp: '✨',
health: '❤️',
money: '💵',
potion: '🥤',
pickaxe: '⛏️' 
}

let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

global.ch = {
ch1: '120363336642332098@newsletter',
ch2: '120363160031023229@newsletter',
ch3: '120363169294281316@newsletter',
ch4: '120363203805910750@newsletter',
ch5: '120363302472386010@newsletter',
ch6: '120363301598733462@newsletter',
ch7: '120363190430436554@newsletter',
ch8: '120363374372683775@newsletter', 
ch9: '120363167110224268@newsletter',
ch10: '120363323882134704@newsletter',
ch11: '120363370415738881@newsletter',
ch12: '120363385983031660@newsletter',
ch13: '120363343811229130@newsletter',
ch14: '120363305941657414@newsletter',
ch15: '120363263466636910@newsletter',
}