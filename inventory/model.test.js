const Inventory = require('./model');
const db = require('../data/dbConfig');

beforeEach(() => {
    return db('inventory').truncate();
});

describe('Inventory Model', () => {

    describe('insert()', () => {
        it('should insert a vehicle into the inventory and return vehicle with id', async () => {
            await Inventory.insert({ make: 'Jeep', year: '1964' });

            const inventory = await db('inventory');

            expect(inventory.length).toBe(1);
            expect(inventory[0].id).toBe(1);
            expect(inventory[0].make).toBe('Jeep');
            expect(inventory[0].year).toBe(1964);
        });
    });

    describe('getAll()', () => {
        it('should fetch all inventory items', async () => {
            await db('inventory').insert([
                { make: 'Jeep', year: '1964' },
                { make: 'Mazda', year: '1999' }
            ]);

            const stock = await Inventory.getAll();

            expect(stock.length).toBe(2);
            expect(stock[0].name).toBe('Jeep');
            expect(stock[1].name).toBe('Mazda');
            expect(stock[1].id).toBe(2);
        });
    });
});