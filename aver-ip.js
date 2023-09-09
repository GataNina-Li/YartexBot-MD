/**
[ By @HACHEJOTA || https://github.com/HACHEJOTA/ ]
**/
var handler = async ( e, {conn:i,args:o}) => 
{if(!o[0])return m.reply("*[ ! ] Introduzca una direccion IP*");
if(!o[0].includes("19"))return e.reply('*[ ! ] Use una direcci\xf3n IP valida de clase "C" !*');
 let n=e.mentionedJid && e.mentionedJid[0]? e.mentionedJid[0]: e.fromMe? i.user.jid:e.sender,t
  await m.reply((await i.getName(e.sender)));try{let r=await fetchJson(`https://latam-api.vercel.app/api/verip?apikey=${MyApiKey}&q=${o[0]}`);if(!r.continente.nombre)return e.reply("No pude encontrar ninguna informaci\xf3n para esta direcci\xf3n IP ;-;");i.sendMessage(e.chat,{caption:`🗺️ INFO DE DIRECCION IP
🔖 Solicitado por : @${n.replace(/@.+/,"")}`,footer:`${cb} 🔥`,location:{degreesLatitude:r.latitud,degreesLongitude:r.longitud},buttons:[{buttonId:"</bromita>",buttonText:{displayText:`[ INFORMACI\xd3N ]
\`\`\`
➢ Direcci\xf3n IP : ${r.ip}
➢ Dispositivo mobil : ${r.mobil?"[✓]":"[X]"}
➢ Continente : ${r.continente.nombre}
➢ Codigo de continente : ${r.continente.codigo}
➢ Pais : ${r.pais.nombre}
➢ Codigo de pais : ${r.pais.codigo}
➢ Nombre de regi\xf3n : ${r.region.nombre}
➢ C\xf3digo de Region : ${r.region.codigo}
➢ Ciudad : ${r.ciudad}
➢ Distrito : ${r.distrito?r.distrito:"No encontrado u.u"}
➢ Codigo postal : ${r.ZIP?r.ZIP:"No encontrado u.u"}
➢ Latitud : ${r.latitud}
➢ Longitud : ${r.longitud}
➢ Zona horaria : ${r.zonaHoraria}
➢ Offset : ${r.offset}
➢ Moneda local : ${r.divisa}
➢ Proveedor de internet : ${r.isp}
➢ Organizaci\xf3n : ${r.organizacion}
➢ Sociedad : ${r.as} 
➢ DNS : ${r.reverse?r.reverse:"No encontrado u.u"}
➢ Servidor proxy : ${r.proxy?"[✓]":"[X]"}
➢ Alojamiento web : ${r.hosting?"[✓]":"[X]"}
\`\`\``},type:1}],headerType:"LOCATION",mentions:[e.sender]})}catch(a){e.reply(MultiNK.Error0())}};handler.help=["verip"].map(e=>e+" <IP>"),handler.tags=["busqueda"],handler.command=/^(verip)$/i,handler.limit=!0;export default handler;
