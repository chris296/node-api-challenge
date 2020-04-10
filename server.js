const express = require('express');

const projectRouter = require('./data/helpers/projectRouter');
const actionRouter = require('./data/helpers/actionRouter');

const server = express();

server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

module.exports = server;