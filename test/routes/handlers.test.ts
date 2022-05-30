import "mocha";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon, { SinonSpy } from "sinon";
import { NextFunction, Request, Response } from "express";

// Set chaiAsPromised and expect assertion
chai.use(chaiAsPromised);
const expect = chai.expect;

var req: Request = {} as Request;
var res: Response = {} as Response;
var next: NextFunction = () => {};
var spy: SinonSpy;

// Import services and controllers
import { controller } from "../../src/controllers";
import * as service from "../../src/services/user_service";

// Import handler
import { retrieveHandler } from "../../src/routes/user/handler";

describe("retriveHandler test", async () => {
  describe("When getAllService rejects", () => {
    before(async () => {
      spy = sinon.spy(next);
      sinon.stub(service, "getAllService").rejects();
      await retrieveHandler(req, res, spy);
    });

    after(() => {
      sinon.restore();
    });

    it("Should reject", () => {
      return expect(spy.called).to.be.true;
    });
  });

  describe("When getAllService resolves", () => {
    describe("When fillUser rejects", () => {
      before(async () => {
        sinon.stub(service, "getAllService").resolves();
        sinon.stub(controller, "fillUser").rejects();
        spy = sinon.spy();
        await retrieveHandler(req, res, spy);
      });

      after(() => {
        sinon.restore();
      });

      it("Should reject", () => {
        return expect(spy.called).to.be.true;
      });
    });

    describe("When fillUser resolves", () => {
      before(() => {
        sinon.stub(service, "getAllService").resolves();
        sinon.stub(controller, "fillUser").resolves();
      });

      after(() => {
        sinon.restore();
      });

      it("Should reject", () => {
        return expect(retrieveHandler(req, res, next)).to.eventually.be
          .fulfilled;
      });
    });
  });
});
