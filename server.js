const express = require('express');
const server = express('');

server.use(express.static("/home/dci/Desktop/float"));

const port = 3030;
server.listen(port);