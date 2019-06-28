const express = require('express');
const server = express();

const Inventory = require('../model/model');

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ api: "Server Running" });
});

server.get('/inventory', async (req, res) => {
    const stock =  await Inventory.getAll();

    res.status(200).json(stock);
});

server.post('/inventory', async (req, res) => {
    const vehicle = req.body;

    const result = await Inventory.insert(vehicle);

    res.status(200).json(result);
});

server.delete('/inventory/:id', async (req, res) => {
    const result = await Inventory.remove(req.params.id);

    res.status(200).json(result);
});

module.exports = server;