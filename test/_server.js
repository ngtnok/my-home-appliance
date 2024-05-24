const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");

const server = setupServer();
describe("knex server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server).keepOpen();
    expect = chai.expect;
  });
  afterEach(() => {
    request.close();
  });
  //   it("",(done)=>{})
  //   it("",(done)=>{})
  //   it("",(done)=>{})
  //   it("",(done)=>{})
});
