import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['51956972813', 'CuriosityBot-MD 🍧', true], ['5492266466080', 'Owner 🍧', true], ['5217294888993'], ['59162714296'], ['5214531287294'], ['5492964650915'], ['573013482814'], ['5215610314499']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

/*Esto Son Los Nombres Del Bot*/
global.packname = '© CuriosityBot'
global.author = 'Created By Azami'
global.wm = '© CuriosityBot-MD'
global.wm2 = '𝗖𝗎𝗋𝗂𝗈𝗌𝗂𝗍𝗒 : 𝗕𝗈𝗍'
global.azami = 'Azami'
global.cb = 'CuriosityBot-MD'

//versiones y otros
global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '¿Azami ~ Zam?'
global.devnum = '+591 62714296'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
