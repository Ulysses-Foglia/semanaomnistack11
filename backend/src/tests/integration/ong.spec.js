const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        // é smepre bom zerar o banco de dados antes de rodar os testes, para evitar duplicidades,
        // o banco ficar grande, com informações antigas, e etc...
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato2@apad2.com.br",
            whatsapp: "11900000000",
            city: "São Paulo",
            uf: "SP"
        });

        // console.log(response.body); //deu undefined
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveLength(8);
    });
});