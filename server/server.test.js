const request = require('supertest');
const server = require('./server');

describe("SERVER", () => {
    describe("Environment", () => {
        it('should set test environment', () => {
            const env = process.env.DB_CONNECT;

            expect(env).toBe('testing');
        });
    });

    describe("GET", () => {
        describe('/', () => {
            it('should return a JSON packet with status 200', async () => {
                const res = await request(server).get('/');
    
                expect(res.status).toBe(200);
                expect(res.type).toBe('application/json');
            });
    
            it('should return the message \'server runnning\'', async () => {
                const res = await request(server).get('/');
    
                expect(res.body).toBe({ api: "Server Running" });
            });
        });

        describe('/inventory', () => {
            it('should return a JSON packet with status 200', async () => {
                const res = await request(server).get('/invetory');

                expect(res.status).toBe(200);
                expect(res.type).toBe('application/json');
            });

            it('should return an array', async () => {
                const res = await request(server).get('/inventory');

                expect(Array.isArray(res.body)).toBe(true);
            });
        });
    });
});