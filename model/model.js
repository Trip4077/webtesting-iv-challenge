const db = require('../data/dbConfig');

module.exports = {
    insert,
    remove,
    getAll
}

async function insert(vehicle) {
    const [ id ] = await db('inventory').insert(vehicle);

    return await db('inventory').where({ id });
}

async function remove(id) {
    const success = await db('inventory').where({ id }).del();

    return success;
}

async function getAll() {
    return db('inventory');
}