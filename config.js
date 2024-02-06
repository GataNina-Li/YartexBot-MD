import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['524531287294', 'CuriosityBot-MD 🍧', true], ['573183650526'], ['5217294888993'], ['573155428601'], ['5214531287294'], ['51906662557'], ['5492266466080'], ['593968585383'], ['573026191480'], ['5492266613038'], ['573106040746'], ['5215610314499'], ['573107133321'], ['5217441298510'], ['5492964650915']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

global.packname = '© CuriosityBot'
global.author = 'Created By Azami'
global.wm = '© CuriosityBot-MD'
global.wm2 = '𝗖𝗎𝗋𝗂𝗈𝗌𝗂𝗍𝗒 : 𝗕𝗈𝗍'
global.azami = 'Azami'
global.cb = 'CuriosityBot-MD'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'Azami ~ ¿Zam?'
global.devnum = '+52 656 601 4078'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
