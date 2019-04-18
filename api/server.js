const express = require('express');
const server = express();

// const Inventory = require('../inventory/model');

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'runnning' });
});

// server.get('/inventory', async (req, res) => {
//     const stock =  await Inventory.getAll();

//     res.status(200).json(stock);
// });

module.exports = server;