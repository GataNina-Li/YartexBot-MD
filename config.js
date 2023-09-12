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
 ['5217294888993', 'Creador Azami🎨',true],
 ['595975740803', 'Colaborado 1💻, true], 
 ['50258115623', 'Colaborador 2 💋', true],
 ['50576390682', 'colaborador Ender GB ❄️', true],
 ['5214531106422'], ['593968585383'], ['593993684821'], ['5492266613038'], ['5492266466080'],['51992004117'], ['573106040746'], ['50576390682'], ['50558124470'], ['51906662557'], ['59597574080'], ['51929972576'], ['50250101139']]

global.animxscans = ['56962237366']
global.suittag = ['59894808483'] 
global.mods = ['59894808483'] 
global.prems = ['59894808483'],['50576390682']

/*=========== IMÁGENES MENU ===========*/
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
global.nuevobot = fs.readFileSync('./src/nuevobot.jpg')
global.prebot = fs.readFileSync('./src/Pre Bot Publi.png')

/*=========== IMÁGENES ===========*/
global.img = 'https://telegra.ph/file/814e64f578d98e4244a3d.jpg'
global.img1 = 'https://telegra.ph/file/74b7c003d04dec5875ba0.jpg'
global.img2 = 'https://telegra.ph/file/9223caecc3e7b731073e2.jpg'
global.img3 = 'https://telegra.ph/file/7deef65f6a53ecdd51cdd.jpg'
global.img4 = 'https://telegra.ph/file/4f023f918af2bde72c839.jpg'
global.img5 = 'https://telegra.ph/file/a34ebad4c9b5963c82f1a.jpg'
global.img6 = 'https://telegra.ph/file/4e69f6c48d99f6c1174a9.jpg'
global.img7 = 'https://telegra.ph/file/951275803faa754aff010.jpg'

/*=========== Total Imagenes ============*/
global.sityImg = [img, img1, img2, img3, img4, img5, img6, img7]

/*=========== STICKERS ===========*/
global.packname = 'CuriosityBot-MD'
global.author = '1.0.2'
global.stickerAMX = fs.readFileSync('./src/Curiosity.webp')

/*=========== LINKS ===========*/
global.yt = 'https://www.youtube.com/@Azami_Mods'
global.ig = 'https://instagram.com/azami_ofc'
global.md = 'https://github.com/AzamiJs/CuriosityBot-MD'
global.paypal = 'https://paypal.me/Azami19'
global.git = 'https://github.com/GataNina-Li'
global.nn = 'https://chat.whatsapp.com/LCAUbkf5kUz7jSxO6FADMU' //Grupo ofc
global.nnn = 'https://chat.whatsapp.com/J1R402WH1N0Hdl3S0NDEYu' //Curiosity global
global.nnnn = 'https://chat.whatsapp.com/KLpYFsitkgzJ15YQxZrBqO' //colaboración multi bots
global.nnnnn = 'https://chat.whatsapp.com/KlRcEfl8snBEEOA0JXzw5A' //enlace curiosity
global.nna2 = 'J1R402WH1N0Hdl3S0NDEYu' 
global.linkSity = [yt, ig, md, paypal, git, nn]
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
global.dev = '5217294888993'

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

/*=========== HORARIO ==========*/
global.d = new Date(new Date + 3600000) 
 global.locale = 'es' 
 global.dia = d.toLocaleDateString(locale, { weekday: 'long' }) 
 global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' }) 
 global.mes = d.toLocaleDateString('es', { month: 'long' }) 
 global.año = d.toLocaleDateString('es', { year: 'numeric' }) 
 global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })


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
