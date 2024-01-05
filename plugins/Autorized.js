var handler = m => m
    const authorizedUsers = ['id_del_creador', 'id_del_desarrollador'];

function esUsuarioAutorizado(senderId) {
    return authorizedUsers.includes(senderId);
}

function realizarCambioEnElBot() {
    // Realizar aquí la lógica para el cambio en el bot
    console.log('Cambio en el bot realizado con éxito.');
}

function intentarRealizarCambio(senderId) {
    if (esUsuarioAutorizado(senderId)) {
        realizarCambioEnElBot();
    } else {
        console.log('Usuario no autorizado para realizar cambios en el bot.');
    }
}

handler.tags = ['autorized']
handler.command = /^(Autorizar)$/i
handler.register = false

export default handler



const senderId = 'id_del_desarrollador'; // Cambiar esto con el ID del remitente real
intentarRealizarCambio(senderId);
