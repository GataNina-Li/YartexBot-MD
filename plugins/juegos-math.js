var handler = async (m, { conn, args, usedPrefix, command }) => {

conn.math = conn.math ? conn.math : {}
    
if (args.length < 1) return conn.reply(m.chat, `
*CURIOSITY - MATES*
🧮 Dificultades disponibles : 
  
${Object.keys(modes).join(' | ')} 

_Ejemplo : ${usedPrefix+command} normal_
`, m, fake, )
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.reply(m.chat, `
*CURIOSITY - MATES*
🧮 Dificultades disponibles : 
  
${Object.keys(modes).join(' | ')}

_Ejemplo : ${usedPrefix+command} normal_
`, m, fake, )
    
let id = m.chat
if (id in conn.math) return conn.reply(m.chat, '🚩 *Todavía hay preguntas sin respuesta en este chat*', conn.math[id][0], fake, )
let math = genMath(mode)
conn.math[id] = [
await conn.reply(m.chat, `🧮 Cuanto es *${math.str}*=\n\n_Tienes: ${(math.time / 1000).toFixed(2)} segundos para responder_\n\n🎁 Recompensa: ${math.bonus} XP`, m, fake, ),
math, 4,
setTimeout(() => {
if (conn.math[id]) conn.reply(m.chat, `⏰ Se acabó el tiempo!\nLa respuesta es : *${math.result}*`, conn.math[id][0], fake, )
delete conn.math[id]
}, math.time)
]

}
handler.help = ['mates']
handler.tags = ['juegos']
handler.command = ['mates', 'mate', 'matemáticas', 'math'] 

handler.register = true


let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10],
fácil: [-10, 10, -10, 10, '*/+-', 20000, 40],
normal: [-40, 40, -20, 20, '*/+-', 40000, 150],
difícil: [-100, 100, -70, 70, '*/+-', 60000, 350],
extremo: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
imposible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
imposible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

handler.modes = modes

export default handler
