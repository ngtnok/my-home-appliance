const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
const knex = require("../src/knex");

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
  describe("POST:/api/appliances", () => {
    it("家電情報を追加する", (done) => {
      request
        .post("/api/appliances")
        .send({
          category: "hogecate",
          maker: "hogemaker",
          appliance_name: "hoge4",
        })
        .end(async (err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          console.log(res.body);
          expect(res.body.appliance_name).to.equal("hoge4");
          await knex("appliance").where("appliance_name", "hoge4").del();
          done();
        });
    });
    it("同じ名前の家電を追加しようとした時400", (done) => {
      request
        .post("/api/appliances")
        .send({
          category: "hogeCate",
          maker: "hogehogeMaker",
          appliance_name: "ホットクック",
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
    //   it("",(done)=>{})
    //   it("",(done)=>{})
  });
});
