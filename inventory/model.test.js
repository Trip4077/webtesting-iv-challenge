const Inventory = require('./model');
const db = require('../data/dbConfig');

beforeEach(() => {
    return db('inventory').truncate();
});

describe('Inventory Model', () => {

    describe('insert()', () => {
        it('should insert a vehicle into the inventory', async () => {
            await Inventory.insert({ make: 'Jeep', year: '1964' });

            const inventory = await db('inventory');

            expect(inventory.length).toBe(1);
            expect(inventory[0].make).toBe('Jeep');
        })
    });

});