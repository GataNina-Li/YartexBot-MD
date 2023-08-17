import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import moment from 'moment-timezone' 
import { platform } from 'process'
import uploadFile from './lib/uploadFile.js'
import uploadImage from './lib/uploadImage.js'
import { webp2png } from './lib/webp2mp4.js'
import { toAudio } from './lib/converter.js'
import { toPTT } from './lib/converter.js'
import { webp2mp4 } from './lib/webp2mp4.js'
import { ffmpeg } from './lib/converter.js'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

/*=========== OWNER ===========*/
global.owner = [
['593993684821', 'Creador 🎨', true], 
['593980586516', 'Colaborador', true],
['5492266466080'], ['51918299647'], ['593968585383'], ['5492266613038'], ['573106040746'], ['50576390682']]

global.suittag = []
global.prems = []

/*=========== IMPORTS ===========*/
global.uploadImage = uploadImage
global.uploadFile = uploadFile
global.fetch = fetch
global.webp2png = webp2png
global.toAudio = toAudio
global.toPTT = toPTT
global.ffmpeg = ffmpeg
global.webp2mp4 = webp2mp4
global.fs = fs
global.axios = axios

/*=========== IMÁGENES ===========*/
global.dirP = './'
global.media = dirP + 'media/'
global.raiz = './storage/menus/Menu1.jpg'
global.imagen1 = fs.readFileSync('./storage/menus/Menu1.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg')
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./storage/menus/Menu2.jpg')
global.imagen5 = fs.readFileSync('./storage/menus/Menu1.jpg')
global.imagen6 = fs.readFileSync('./storage/menus/Menu2.jpg')
global.imagen7 = fs.readFileSync('./storage/menus/Menu3.jpg')
global.imagen8 = fs.readFileSync('./storage/menus/Menu4.jpg')

/*=========== IMÁGENES EN LINKS ===========*/
global.img = 'https://telegra.ph/file/76816166bd79aa848848d.jpg'
global.img1 = 'https://telegra.ph/file/fb67a56866c02ba02fa50.jpg'

/*=========== STICKERS ===========*/
global.packname = ''
global.author = '𝘾𝙪𝙧𝙞𝙤𝙨𝙞𝙩𝙮𝘽𝙤𝙩-𝙈𝘿 🍓'
global.stickerAMX = fs.readFileSync('./src/Curiosity.webp')

/*=========== LINKS ===========*/
global.yt = 'https://www.youtube.com/@Azami_Mods'
global.ig = 'https://instagram.com/azami_ofc'
global.md = 'https://github.com/Undefined17/CuriosityBot-MD'
global.paypal = 'https://paypal.me/Azami19'
global.git = 'https://github.com/Undefined17'
global.nn = 'https://chat.whatsapp.com/LCAUbkf5kUz7jSxO6FADMU' //Grupo ofc
global.nnn = 'https://chat.whatsapp.com/J1R402WH1N0Hdl3S0NDEYu' //Curiosity global
global.nnnn = 'https://chat.whatsapp.com/KLpYFsitkgzJ15YQxZrBqO' //colaboración multi bots
global.nnnnn = 'https://chat.whatsapp.com/KlRcEfl8snBEEOA0JXzw5A' //enlace curiosity
global.nna2 = 'J1R402WH1N0Hdl3S0NDEYu' 

/*=========== NOMBRES ===========*/
global.wm = '© CuriosityBot-MD'
global.wm2 = '᭥𐨏𝑪𝒖𝒓𝒊𝒐𝒔𝒊𝒕𝒚𝑩𝒐𝒕-𝑴𝑫᭢ꪲ'
global.wm3 = '⎙ 𝙲𝚞𝚛𝚒𝚘𝚜𝚒𝚝𝚢'
global.wm4 = '🚀 𝘊𝘶𝘳𝘪𝘰𝘴𝘪𝘵𝘺𝘉𝘰𝘵-𝘔𝘋'
global.wm5 = '『 CuriosityBot-MD 』'
global.wm6 = 'CuriosityBot-MD • Azami'
global.azami = '*🍓 Azami*'
global.cb = 'CuriosityBot-MD'

/*=========== INFO ===========*/
global.vs = '1.0.2'
global.library = 'Baileys'
global.lenguaje = 'Español'
global.jadibts = join(__dirname, 'jadibts/')
global.menudi = ['⛶','❏','⫹⫺']
global.animxscans = [['56962237366']]

/*=========== REACCIONES ===========*/
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'
global.amoji = '👀'
global.bmoji = '🍀'
global.cmoji = '🚀'
global.dmoji = '☠️'

/*=========== TEXTOS ===========*/
global.wait = '*🚀 C A R G A N D O ▬▬▬▭*'
global.waitt = '*_ P R E P A R A N D O_*'
global.waittt = '*_CASI LISTO 🚀_*'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'

global.multiplier = 100

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆',
limit: '💎',
exp: '🕹️'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)
})
