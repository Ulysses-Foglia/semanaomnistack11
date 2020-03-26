const express = require('express');
const OngController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', OngController.index);//async (request, response) => {
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs);
// });

routes.post('/ongs', OngController.create); //async (request, response) => {
    // //const body = request.body; //request.params; //request.query;
    // const { name, email, whatsapp, city, uf } = request.body;

    // const id = crypto.randomBytes(4).toString('HEX');

    // await connection('ongs').insert({
    //     id,
    //     name,
    //     email, 
    //     whatsapp,
    //     city,
    //     uf,
    // })

    // //console.log(body);
    // //console.log(data);

    // // return responde.send('Hello World!');
    
    // // return responde.json({
    // // evento: 'Semana Omnistack 11',
    // // aluno: 'Ulysses Foglia'
    // // });

    // return response.json({ id });   /////// Foi tudo para a OngController.js

//}); //indacação da rota

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;