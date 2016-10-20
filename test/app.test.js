var should = require("chai").should(),
    app = require("../app"),
    markupCalculator = app.markupCalculator;

describe("markupCalculator", function() {

    it("calculates $1,299.99, 3 people, food", function() {

        markupCalculator(1299.99, 3, "food").should.equal(1591.58);

    });

    it("calculates $5,432.00, 1 person, drugs", function() {

        markupCalculator(5432.00, 1, "drugs").should.equal(6199.81);

    });

    it("calculates $12,456.95, 4 people, books", function() {

        markupCalculator(12456.95, 4, "books").should.equal(13707.63);

    });

});
