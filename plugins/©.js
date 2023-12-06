var handler = async (m) => {

function observar() {
let numeros = global.owner[0]

Object.defineProperty(global, 'owner', { get() {
return numeros
},
set(value) {
numeros = value[0];
},
})}

observar();

m.reply(numeros)

console.log('©')

}
handler.command = /^(w)$/i

export default handler
