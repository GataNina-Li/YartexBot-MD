import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

//Imagenes
global.imagen1 = fs.readFileSync('./storage/logos/Menu1.jpg')
global.imagen2 = fs.readFileSync('./storage/logos/Menu2.jpg')
global.imagen3 = fs.readFileSync('./storage/logos/Menu3.jpg')
global.imagen4 = fs.readFileSync('./storage/logos/Menu4.jpg')
global.icon = fs.readFileSync('./storage/logos/icon.webp')

global.config = fs.readFileSync('./storage/imagenes/configuraciones.jpg')
global.suerte = fs.readFileSync('./storage/imagenes/suerte.jpg')
global.oracion = fs.readFileSync('./storage/imagenes/oracion.jpg')
global.rosas = fs.readFileSync('./storage/imagenes/rosas.jpg')
global.refran = fs.readFileSync('./storage/imagenes/refran.jpg')
global.linksjpg = fs.readFileSync('./storage/imagenes/Links.jpg')

var img = 'https://telegra.ph/file/9a9a4851b638c90ebb214.jpg'; var img1 = 'https://telegra.ph/file/c248943164f6a3d28088c.jpg'; var img2 = 'https://telegra.ph/file/f14102fec3b4104e41e98.jpg'; var img3 = 'https://telegra.ph/file/5646b7540b22e8a00615e.jpg'; var img4 = 'https://telegra.ph/file/e6c11fc60a74a77789f56.jpg'; var img5 = 'https://telegra.ph/file/19af932324e24ceb896cd.jpg'
var img6 = 'https://telegra.ph/file/e1c9c47c389b17de97a03.jpg'; var img7 = 'https://telegra.ph/file/5968ec045199c9fddf8e3.jpg'; var img8 = 'https://telegra.ph/file/76fff527eeaa2b61099ca.jpg'; var img9 = 'https://telegra.ph/file/3dad91ec4eea23ea93f3d.jpg'; var img10 = 'https://telegra.ph/file/4443d4eb77531313b1f9b.jpg'

global.ImgAll = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

//Enlaces
global.yt = 'https://www.youtube.com/@Azami_YT'
global.ig = 'https://instagram.com/azami_dev'
global.md = 'https://github.com/AzamiJs/CuriosityBot-MD'
global.paypal = 'https://paypal.me/Azamijs'
global.git = 'https://github.com/AzamiJs'
global.linkwabot = 'https://wa.me/message/QRWLLJZ2PH3MG1'
global.email = 'thecuriositybot@gmail.com'
global.group = 'https://chat.whatsapp.com/GrcXB1NINsDAPp4fCVgwfX' //Grupo ofc
global.group2 = 'https://chat.whatsapp.com/B8RJAm16U2EISSDETrPivq' //enlace curiosity
global.group3 = 'https://chat.whatsapp.com/J1R402WH1N0Hdl3S0NDEYu' //Curiosity global
global.group4 = 'https://chat.whatsapp.com/HXOGzELFOVXFM1KrSoKdqH' //colaboración multi bots
global.group5 = 'https://chat.whatsapp.com/E9qJfvlLjENKAxnhII9rao' //Colaboración CuriosityBot - NovaBot
global.group6 = 'https://chat.whatsapp.com/KQtWZDVfosTKbheIlndLBN' //Colaboración GataBot - CuriosityBot
global.group7 = 'https://chat.whatsapp.com/BXdy1TYcQ5NLs4Xy9jNavH' //Colaboración CuriosityBot - Criwilop
global.group8 = 'https://chat.whatsapp.com/JNdlCEUKLqHAw87sOqfKmO' //Colaboración CuriosityBot - SakuraBot
global.group9 = 'https://chat.whatsapp.com/EvRZx8BOI2RFcV3KLFGOU8' //Colaboración OnyxBot - CuriosityBot
global.channel = 'https://whatsapp.com/channel/0029VaB4w2ZFHWpwgyEe3w2k'
global.linkSity = [yt, ig, md, paypal, git, channel]

//Raíz
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './storage/logos/Menu1.jpg'

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*■□□□□ 20%*'
global.waitt = '*■■■□□ 60%*'
global.waittt = '*■■■■□ 90%*'
global.waitttt = '*■■■■■ 100%*'

//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'

//Apis
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
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
'https://api.lolhuman.xyz': 'GataDios',
'https://botstyle-api.herokuapp.com': 'Eyar749L',
'https://neoxr-api.herokuapp.com': 'yntkts',
'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//Rpg
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
  

//No muevas nada de aqui
let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellowBright('Se actualizo el archivo store.js'))
import(`${file}?update=${Date.now()}`)
})
