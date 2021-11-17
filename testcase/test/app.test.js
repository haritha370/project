const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("check the post  api", done => {
    chai
      .request(app)
      .post("/api/register")
      .send({message:"User added successfully"})
      .end((err, res) => {
        expect(res.body.message).to.equals("User added successfully");
        done();
      });
  });
  it("check the post api", done => {
    chai
      .request(app)
      .post("/api/login")
      .send({message:"loginsuccess"})
      .end((err, res) => {
        expect(res.body.message).to.equals("loginsuccess");
        done();
      });
  });
  
})