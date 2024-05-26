const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
const knex = require("../src/knex");
// const { application } = require("express");

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
  describe("GET:/api/appliance/:id", () => {
    it("指定されたidの家電情報を返す", (done) => {
      request.get("/api/appliances/29").end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        // console.log(res.body);
        expect(res.body.appliance_name).to.equal("M2mac");
        done();
      });
    });
  });
  describe("POST:/api/appliances", () => {
    xit("家電情報を追加する", (done) => {
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
    xit("同じ名前の家電を追加しようとした時400", (done) => {
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
  });
  describe("PATCH:/api/appliances", () => {
    it("家電情報を更新する", (done) => {
      const patchData = { id: 29, appliance_name: "M2mac-chan" };
      request
        .patch("/api/appliances")
        .send(patchData)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          // done();
        });
      request.get(`/api/appliances/${patchData.id}`).end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        console.log(res.body);
        expect(res.body.appliance_name).to.equal(patchData.appliance_name);
        done();
      });
      // request.patch()
    });
  });
  describe("DELETE:/api/appliances", () => {
    xit("指定idの家電を削除する", (done) => {
      const id = 28;
      request
        .del("/api/appliances")
        .send({ id })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(204);
          // const target = await knex("appliance")
          //   .select()
          //   .where({ appliance_name });
          // .first();
          // .then((respo) =>
          // expect(target).to.not.be.undefined;
          // console.log(target);
          done();
        });
    });
    it("指定idが見つからなかったら404", (done) => {
      const id = 100;
      request
        .del("/api/appliances")
        .send({ id })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });
  });
  // it("",(done)=>{})
});
