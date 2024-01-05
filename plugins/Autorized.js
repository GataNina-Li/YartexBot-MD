const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/change', async (req, res) => {
    const { handler, command, tag } = req.body;
    const user = req.user; // Asegúrate de que este valor proviene de un middleware de autenticación y autorización

    if (!user.isAuthorized) {
        return res.status(403).json({ error: 'No tienes permiso para realizar cambios en el bot o código.' });
    }

    const handlerRecord = await handlersDatabase.getHandler(handler);

    if (!handlerRecord) {
        return res.status(404).json({ error: 'Handler no encontrado.' });
    }

    if (!handlerRecord.tags.includes(tag)) {
        return res.status(403).json({ error: 'No tienes permiso para realizar cambios en este handler.' });
    }

    // Realiza los cambios en el bot o código aquí
    console.log(`Se ha realizado un cambio en el handler ${handler} con el comando ${command} y la etiqueta ${tag}`);
    res.status(200).json({ message: 'Cambio realizado correctamente.' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
