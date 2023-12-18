import fetch from 'node-fetch';
const handler = (m) => m

handler.before = async (m) => {
  let Prefijo = false;
  const prefixRegex = global.prefix;
  if (prefixRegex.test(m.text)) Prefijo = true

  m.reply(wm)

};
export default handler;
