const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
const { validaSessao,
    validaOng,
    validaProfile,
    validaDeletaIncident,
    validaCriaIncident,
    validaPage } = require('./validation')

routes.post('/sessions', validaSessao(), SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', validaOng(), OngController.create);

routes.get('/incidents', validaPage(), IncidentController.index);
routes.post('/incidents', validaCriaIncident(), IncidentController.create);
routes.delete('/incidents/:id', validaDeletaIncident(), IncidentController.delete);

routes.get('/profile', validaProfile(), ProfileController.index);

module.exports = routes;