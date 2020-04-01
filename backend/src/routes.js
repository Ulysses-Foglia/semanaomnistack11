const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
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

// a ordem da estrutura abaxio importa... a validação deve vir antes do dado ser recebido
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11), // 11 2222-3333 ou 11 9 2222-3333
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create); //async (request, response) => {
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
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;