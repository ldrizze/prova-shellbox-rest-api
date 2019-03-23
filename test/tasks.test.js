process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const { Task } = require('../app/models');

chai.use(chaiHttp);

describe('[CRUD] Tasks', () => {
  let id, server;

  before(() => {
    server = require('../server');
    Task.truncate();
  });

  after(() => {
    console.log('closing server');
    server.close();
    console.log('server has been closed');
  });

  it('/GET empty list', done => {
    chai.request(server)
    .get('/tasks')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('count');
      res.body.should.have.property('rows');
      // res.body.rows.length.should.be.eql(0);
      done();
    });
  });

  it('/POST create new task', done => {
    chai.request(server)
    .post('/tasks')
    .send({ title: 'Test task' })
    .end((err, res) => {
      res.should.have.status(201);
      res.text.should.be.string('Created');
      done();
    });
  });

  it('/PUT update task', done => {
    chai.request(server)
    .put('/tasks/1')
    .send({title: 'CHANGED'})
    .end((err, res) => {
      res.body.should.have.property('title');
      res.should.have.status(200);
      done();
    })
  });

  it('/DELETE delete a task', done => {
    chai.request(server)
    .delete('/tasks/1')
    .end((erro, res) => {
      res.should.have.status(200);
      res.text.should.be.string('OK');
      done();
    });
  });
});
