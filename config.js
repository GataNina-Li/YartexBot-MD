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
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

/*=========== OWNER ===========*/
global.owner = [
 ['5217294888993', 'Creador 🎨', true],
 ['593980586516', 'Colaborado', true], 
 ['5214531106422'], ['51918299647'], ['593968585383'], ['593993684821'], ['5492266613038'], ['5492266466080'],['50258115623'], ['573106040746'], ['50576390682'], ['50557637439'], ['51906662557'], ['59597574080'], ["51929972576"]]

global.animxscans = ['56962237366']
global.suittag = ['59894808483'] 
global.mods = ['59894808483'] 
global.prems = ['59894808483']

/*=========== IMÁGENES ===========*/
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './storage/menus/Menu1.jpg'
global.imagen1 = fs.readFileSync('./storage/menus/Menu1.jpg')
global.imagen2 = fs.readFileSync('./storage/menus/Menu2.jpg')
global.imagen3 = fs.readFileSync('./storage/menus/Menu3.jpg')
global.imagen4 = fs.readFileSync('./storage/menus/Menu4.jpg')
global.imagen7 = fs.readFileSync('./storage/menus/Menu3.jpg')
global.imagen8 = fs.readFileSync('./storage/menus/Menu4.jpg')
global.nuevobot = fs.readFileSync('./src/nuevobot.jpg')
global.prebot = fs.readFileSync('./src/Pre Bot Publi.png')

/*=========== IMÁGENES EN LINKS ===========*/
global.img = 'https://telegra.ph/file/76816166bd79aa848848d.jpg'
global.img1 = 'https://telegra.ph/file/fb67a56866c02ba02fa50.jpg'

/*=========== Total Imagenes ============*/
global.sityImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

/*=========== STICKERS ===========*/
global.packname = 'CuriosityBot-MD.js'
global.author = '@1.0.2'
global.stickerAMX = fs.readFileSync('./src/Curiosity.webp')

/*=========== LINKS ===========*/
global.yt = 'https://www.youtube.com/@Azami_Mods'
global.ig = 'https://instagram.com/azami_ofc'
global.md = 'https://github.com/AzamiJs/CuriosityBot-MD'
global.paypal = 'https://paypal.me/Azami19'
global.git = 'https://github.com/Undefined17'
global.nn = 'https://chat.whatsapp.com/LCAUbkf5kUz7jSxO6FADMU' //Grupo ofc
global.nnn = 'https://chat.whatsapp.com/J1R402WH1N0Hdl3S0NDEYu' //Curiosity global
global.nnnn = 'https://chat.whatsapp.com/KLpYFsitkgzJ15YQxZrBqO' //colaboración multi bots
global.nnnnn = 'https://chat.whatsapp.com/KlRcEfl8snBEEOA0JXzw5A' //enlace curiosity
global.nna2 = 'J1R402WH1N0Hdl3S0NDEYu' 

/*=========== NOMBRES ===========*/
global.wm = '© CuriosityBot-MD'
global.wm2 = 'CuriosityBot-MD 🚀'
global.azami = '🍓 Azami'
global.cb = 'CuriosityBot-MD'

/*=========== INFO ===========*/
global.vs = '1.0.2'
global.library = 'Baileys'
global.lenguaje = 'Español'
global.jadibts = join(__dirname, 'jadibts/')
global.menudi = ['⛶','❏','⫹⫺']

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
global.wait = '*_⌛ C A R G A N D O ▬▬▬▭_*'
global.waitt = '*_ P R E P A R A N D O_*'
global.waittt = '*_CASI LISTO 🚀_*'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999'
global.fpagedoc = '999'

global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

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
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
