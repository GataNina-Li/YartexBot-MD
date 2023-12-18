import fetch from 'node-fetch';
const handler = (m, { text }) => m

handler.before = async (m) => {
  let Prefijo = false;
  const prefixRegex = global.prefix;
  if (prefixRegex.test(m.text)) Prefijo = true

var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

}
export default handler;

