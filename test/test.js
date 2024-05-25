const chai = require("chai");
const chaiHttp = require("chai-http");
// import chai from "chai";
// import chaiHttp from "chai-http";
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
// import { setupServer } from "../src/server";
const knex = require("../src/knex");
// import knex from "../src/knex";

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
  describe("GET:/api/appliances", () => {
    it("全ての家電情報を返す", (done) => {
      request.get("/api/appliances").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
  });
  //   it("",(done)=>{})
  //   it("",(done)=>{})
  //   it("",(done)=>{})
});
