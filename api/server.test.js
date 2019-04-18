const request = require('supertest');
const server = require('./server');

const db = require('../data/dbConfig');

beforeEach(() => {
    return db('inventory').truncate();
});

describe('SERVER', () => {
    describe('ENV', () => {
        it('should set test environment', () => {
            const env = process.env.DB_CONNECT;

            expect(env).toBe('testing');
        });
    });

    describe('GET', () => {
        it('/ should return a JSON packet with status 200, { api: "running" }', async () =>{
            const res = await request(server).get('/');

            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(res.body).toEqual({ api: 'running' });
        });

        it('/inventory should return a JSON packet with status 200, { id, make, year }', async () => {
            const res = await request(server).get('/inventory');

            expect(res.body).toBe(null);
        })
    });
});