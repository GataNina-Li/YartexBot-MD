/*---------------------------------------------------------------------------------------
  😎 • By https://github.com/HACHEJOTA
-----------------------------------------------------------------------------------------*/
import db from '../lib/database.js'

let handler = async (m, { conn, text}) => {

let hasil = Math.floor(Math.random() * 5000)

  m.reply(`
 *┏━ꙬꙬꙬ᯽ꙬꙬꙬ᯽︎ꙬꙬꙬ┓*\n
*➳"${pickRandom(global.refran)}"*\n\n\t➳ *_By ${hj}_*\n*┗━ꙬꙬꙬ᯽ꙬꙬꙬ᯽ꙬꙬꙬ━┛*

`)
}
handler.tags = ['frases']
handler.command = handler.help = ['refran']


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

global.refran = ["Más vale estar solo que mal acompañado.",
 "Perro ladrador poco mordedor."," A caballo regalado no le mires el diente.", "A lo hecho, pecho."," Al mal tiempo, buena cara.","Cada loco con su tema.","De tal palo, tal astilla. ","El que la hace, la paga. ", "Dinero llama dinero. ", "El mundo es un pañuelo."," A la tercera va la vencida.","Cada oveja con su pareja."," Más vale prevenir que lamentar. ","Más vale tarde que nunca. "," En boca cerrada no entran moscas. ", "Al que madruga, Dios lo ayuda. "," El que calla otorga.","Amor con hambre no dura.","Tira la piedra y esconde la mano. ","El que ríe el último, ríe mejor. ","El hábito no hace al monje. "," A palabras necias, oídos sordos. ","Crea fama y acuéstate a dormir. "," Del dicho al hecho, hay mucho trecho. ", "Dios aprieta pero no ahorca."," Donde fueres, haz lo que vieres."," Quien mucho abarca, poco aprieta. ","Hombre precavido vale por dos. "," Preguntando se llega a Roma. ","Zapatero a sus zapatos.","Una golondrina no hace verano.","Obras son amores y no buenas razones."," Mucho ruido y pocas nueces. "," En la variedad está el gusto.","Tanto tienes, tanto vales.","Nadie es profeta en su tierra. "," ¿Dónde va Vicente? Donde va la gente. ","Dios los cría y ellos se juntan. ","El que espera desespera.","Escoba nueva barre bien.","No hay mal que dure cien años.","Guerra avisada no mata gente.","La fe mueve montañas.","El que no la debe, no la teme."," Perro que ladra, no muerde.","Si te he visto, no me acuerdo."," No hay mal que por bien no venga.","Si así llueve, que no escampe. ","Querer es poder.","Loro viejo no aprende a hablar.","Más es maña que fuerza.","El papel aguanta todo. ","Barriga llena, corazón contento. ","Casa de herrero, cuchillo de palo.","Poco a poco se anda lejos. ","Jaula nueva, pájaro muerto.","Nunca es tarde si la dicha es buena. ","Quien tiene boca se equivoca. ","El poeta nace, no se hace.","Haz bien y no mires a quien.","El que se excusa, se acusa. ","El pez grande se come al chico.","Lo barato sale caro. "," A rey muerto, rey puesto.","Hoy por ti, mañana por mí."," No hay rosa sin espinas. "," El que busca, encuentra. ","Quien se pica, ajos come. ","Gota a gota, el agua se agota.","Hierba mala nunca muere. ","El tiempo es oro."," Ojo por ojo, diente por diente.","Quien canta, su mal espanta. ","Del árbol caído, todos hacen leña.","El que a hierro mata, a hierro muere.","Por la boca muere el pez.","Palabra de piedra suelta, jamas sera duvuelta","Ojos que no ven, corazón que no siente."," La excepción hace la regla.","Como se vive, se muere. "," Un clavo saca otro clavo.","Decir refranes, es decir verdades."," La intención es lo que cuenta. "," La música amansa las fieras.","Más claro no canta un gallo.","El casado, casa quiere."," A mala vida, mala muerte. ","Caras vemos, corazones no sabemos.","Cría cuervos y te sacarán los ojos.","Más sabe el diablo por viejo, que por diablo.","Agua que no has de beber, déjala correr.","No es oro todo lo que reluce.","La cabra siempre tira al monte.","Siempre pagan justos por pecadores.","Primero es la obligación que la devoción.","Por un perro que maté, mataperros me llamaron.","Nunca digas de este agua no beberé.","No vendas la piel antes de cazar al oso.","El que roba a un ladrón tiene cien años de perdón.","Cada maestrillo tiene su librillo.","A grandes males, grandes remedios.","A la chita callando, hay quien se va aprovechando.","El ladrón juzga por su condición.","Cuando el gato está ausente, los ratones se diviertes.","Cuando el rió suena piedras lleva.","Tropezar y no caer, adelantar camino es.","No dejes para mañana lo que puedas hacer hoy.","La voz del culo no tiene remedio ni disimulo.","Por más vueltas que das, el culo siempre te queda atrás.","Hay un mundo mejor, pero es carísimo.","Abogado, juez y doctor, cuanto más lejos, mejor." ,"Celos y envidia, quitan al hombre la vida.","Come para vivir y no vivas para comer.","Come poco y cena más, duerme en alto y vivirás.","Come y bebe que la vida es breve.","Como se vive, se muere.","A mal vivir, mal morir.","A mis años llegarás o la vida te costará."," Año nuevo, vida nueva.","Beber con medida, alarga la vida."," Bicho malo nunca muere."," A juventud ociosa, vejez trabajosa.","Al que madruga Dios le ayuda.","Al viejo por su vejez, no le engañan ni una vez.","Criada trabajadora, hace perezosa a su señora.","De Dios para abajo, cada cual vive de su trabajo."," Echar por el atajo no siempre ahorra trabajo.","El brazo a trabajar, la cabeza a gobernar","El buen cirujano opera temprano."," El hombre a trabajar y la mujer a gastar.","El propósito de trabajar, es llegar a descansar","El que algo quiere, algo le cuesta.","El que de joven no trabaja, de viejo duerme en la paja.","El que trabaja no come paja.","Cada oveja con su pareja. ","A caballero nuevo, jinete viejo." ,"Caballo que vuela, no quiere espuela.","De potro sarnoso, caballo hermoso.","El ojo del amo engorda el caballo.","El que solo come su gallo, solo ensilla su caballo.","Hasta el 40 de mayo no visites al yayo."," En abril, contagios mil.","Aunque la mona se vista de seda, en casa se queda."," Amor y fortuna, resistencia ninguna.","A mucho amor, mucho perdón.","Adonde el corazón se inclina, el pie camina. ","Afortunado en el juego, desgraciado en el amor."," Al buen amar, nunca le falta qué dar.","Al bueno por amor y al malo por temor.","Ama y te amarán, odia y te odiarán.","Amar y no ser amado es tiempo mal empleado.","Amor, amor, malo el principio y el fin peor.","Amor con amor se cura.","Amor con casada, solo de pasada.","Amor con casada, vida arriesgada. "," Amor de madre, es incomparable.","Amor de niño, agua en cestillo."," Amor que del alma nace, al pie de la tumba muere."," Atardecer ‘colorao’, viento ‘asegurao’.","El ignorante afirma, el sabio duda y reflexiona.","Si quieres sardina y mujer fina, santanderina.","Quien compra lo que no puede, vende lo que le duele."," El necio es atrevido y el sabio, comedido."," Abril, aguas mil, cernidas por un mandil.","Agosto, frío al rostro.","Agua de San Juan, quita vino y no da pan. ","A la noche arreboles; a la mañana habrá soles. ","Al invierno lluvioso, verano abundoso.","Año de nieves, año de bienes. ","Buena es la nieve que en su tiempo viene.","Hablando de roma y el burro que se azoma","Aquel que hable mal de España, un castigo ha de tener, que se vaya a tierra extraña"," Boca española no se abre sola.","Cada gallo canta en su gallinero ","La ropa sucia, en casa se lava."," Todos de un vientre y cada uno de su miente.","A padre guardador, hijo gastador."," Al hombre venturero, la hija le nace primero.","El diablo a los suyos quiere."," El que a los suyos se parece, honra merece. "," Entre padres y hermanos, no metas tus manos.","Hijo sin dolor, madre sin amor. "," Mi hija venturosa y la tuya hermosa.","Mi hijo vendrá barbado, mas no parido ni preñado. ","Si el hijo sale al padre, de duda saca a la madre. ","A rico no debas, y a pobre no prometas. ","Al pobre no es provechoso acompañarse con el poderoso.","Al puerco gordo, untarle el rabo","Asno con oro, alcánzalo todo.","Bien, ¿adónde vas? A donde tienen más.","Dádivas y buenas razones, ablandan piedras y corazones.","Hombre pobre, con poco se alegra y socorre."," La pobreza hace al hombre estar en tristeza.","La pobreza no es vileza, más deslustra la nobleza. ","La riqueza, vecina es de la soberbia.","Lo que abunda no daña. ","Más ablanda el dinero que palabras de caballero.","Más vale algo que nada. ","Más vale poco y bueno que mucho y malo.","Mejor es ser envidiado que apiadado.","Pobreza nunca alza cabeza."," Poderoso caballero es don dinero.","Quien dice que la pobreza no es vileza, no tiene seso en la cabeza.","Camaron que se duerme se le lleva la coriente"]
 
 global.namere = 'HacheJota'
