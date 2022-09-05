import { stockLevel } from './../../src/types/stockLevel.type';
const chai = require('chai');
const chaiHttp = require('chai-http');
import app from '../../src/app';

chai.should(); 
chai.use(chaiHttp);

const expect = chai.expect;    // Using Expect style
const should = chai.should();

describe('integration-> Test -> GET /stockLevel', () => {
    it('it should return stock level object with sku and qty', (done) => {
        chai.request(app)
            .post('/stockLevel')
            .send({ sku: 'SAL508741/19/43' })
            .end((err: Error, res: any) => {
                // expect.
                res.should.have.status(200);
                res.should.be.a('object');
                done();
            });
    });

    it('sku not found for stock level', (done) => {
        chai.request(app)
            .post('/stockLevel')
            .send({ sku: 'SAL508741/19/41' })
            .end((err: Error, res: any) => {
                res.should.have.status(404);
                done();
            });
    });
});
