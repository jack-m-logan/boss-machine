const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions');
apiRouter.use(minionsRouter);

const meetingsRouter = require('./meetings');
apiRouter.use('./meetings', meetingsRouter);

const ideasRouter = require('./ideas');
apiRouter.use('./ideas', ideasRouter);

module.exports = apiRouter;
