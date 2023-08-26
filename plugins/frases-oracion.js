/*---------------------------------------------------------------------------------------
  😎 • By https://github.com/HACHEJOTA
-----------------------------------------------------------------------------------------*/
import db from '../lib/database.js'

let handler = async (m, { conn, text}) => {

let hasil = Math.floor(Math.random() * 5000)

  m.reply(`
*┏━✞✞︎✞︎🝮︎︎︎︎︎︎︎✞︎✞︎✞︎🝮︎︎︎︎︎︎︎✞︎✞︎✞︎┓*\n
*➳"${pickRandom(global.oracion)}*"\n\n\t➳ *_By ${hj}_*\n*┗━✞︎✞︎✞︎🝮︎︎︎︎︎︎︎✞︎✞︎✞︎🝮︎︎︎︎︎︎︎✞︎✞︎✞︎━┛*

`)
}
handler.tags = ['frases']
handler.command = handler.help = ['oracion']


handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.oracion = ["LA SEÑAL DE LA CRUZ: Por la señal + de la Santa Cruz, de nuestros + enemigos líbranos Señor, + Dios nuestro.En el nombre del Padre, y del + Hijo, y del Espíritu Santo. Amén.","EL PADRE NUESTRO: Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad, en la tierra como en el cielo.Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal Amén.","GLORIA: Gloria al Padre y al Hijo y al Espíritu Santo.Como era en el principio, ahora y siempre, por los siglos de los siglos Amén.","EL AVE MARÍA: Dios te salve, María, llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.","SALVE: Dios te salve, Reina y Madre de misericordia, vida y dulzura y esperanza nuestra: Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas.Ea, pues, Señora abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre.¡Oh clementísima! ¡Oh piadosa! ¡Oh dulce Virgen María! Ruega por nosotros santa Madre de Dios, para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo. Amén.","AL ÁNGEL CUSTODIO: Ángel de Dios, que eres mi custodio, pues la bondad divina me ha encomendado a ti, ilumíname, dirígeme, guárdame. Amén.",
"AL ÁNGEL DE LA GUARDA: Ángel de mi guarda dulce compañía, no me desampares ni de noche ni de día. No me dejes sólo que sin ti me perdería. Amén.","A LA SAGRADA FAMILIA: Jesús, José y María, os doy el corazón y el alma mía. Jesús, José y María, asistidme en mi última agonía. Jesús, José y María, con vos descanse en paz el alma mía.",
"EL CREDO: Creo en un sólo Dios, Padre Todopoderoso, Creador del cielo y de la tierra, de todo lo visible y lo invisible. Creo en un sólo Señor, Jesucristo, Hijo único de Dios nacido del Padre antes de todos los siglos: Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no creado, de la misma naturaleza del Padre, por quien todo fue hecho; que por nosotros, los hombres, y por nuestra salvación bajo del cielo, y por obra del Espíritu Santo se encarnó de María, la Virgen, y se hizo hombre; y por nuestra causa fue crucificado en tiempos de Poncio Pilato; padeció y fue sepultado, y resucitó al tercer día, según las Escrituras, y subió al cielo, y está sentado a la derecha del Padre; y de nuevo vendrá con gloria para juzgar a vivos y muertos, y su reino no tendrá fin. Creo en el Espíritu Santo, Señor y dador de vida, que procede del Padre y del Hijo, que con el Padre y el Hijo recibe una misma adoración y gloria, y que habló por los profetas. Creo en la Iglesia, que es una, santa, católica y apostólica. Confieso que hay un sólo Bautismo para el perdón de los pecados. Espero la resurrección de los muertos y la vida del mundo futuro. Amén.","ANTES DE LA COMIDA: Señor Dios, te damos gracias porque nos haces partícipes de tus maravillas; te alabamos por los dones de tu amor y te bendecimos por la amistad que nos concedes vivir en torno a esta mesa. Que esta comida en sencillez de corazón y en alegría sea profecía del banquete del reino.Por Jesucristo, nuestro Señor. Amén.","BENDICIÓN DE LA COMIDA (Sencilla): Bendícenos, Señor, y bendice éstos alimentos que recibimos de tu generosidad. Te lo pedimos por Cristo Nuestro Señor. Amén.","DESPUÉS DE LA COMIDA: Nos hemos saciado, Señor, con los bienes que nos has dado; cólmanos también de tu misericordia. Tú que vives y reinas por los siglos de los siglos. Amén.","YO CONFIESO (Acto Penitencial): Yo confieso ante Dios Todopoderoso, y ante vosotros hermanos que he pecado mucho de pensamiento, palabra, obra y omisión. Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a Santa María siempre Virgen, a los ángeles, a los santos y a vosotros hermanos, que intercedáis por mí ante Dios, Nuestro Señor. Amén.","ACTO DE CONSTRICCIÓN: Señor mío, Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío; por ser Vos quien sois, Bondad infinita, y porque os amo sobre todas las cosas, me pesa de todo corazón de haberos ofendido; también me pesa porque podéis castigarme con las penas del infierno. Ayudado de vuestra divina gracia, propongo firmemente nunca más pecar, confesarme, y cumplir la penitencia que me fuere impuesta. Amén.","MAGNIFICAT: Oración cristiana basada en palabras de María, madre de Jesús, citadas en el Evangelio. Proclama mi alma la grandeza del Señor, y se alegra mi espíritu en Dios, mi Salvador; porque ha mirado la humillación de su esclava. Desde ahora me felicitarán todas las generaciones, por el Poderoso ha hecho obras grandes en mí: su nombre es santo, y su misericordia llega a sus fieles de generación en generación. Él hace proezas con su brazo: dispersa a los soberbios de corazón, derriba del trono a los poderosos y enaltece a los humildes, a los hambrientos los colma de bienes y a los ricos los despide vacíos. Auxilia a Israel, su siervo, acordándose de la misericordia como lo había prometido a nuestros padres en favor de Abraham y su descendencia por siempre."]
