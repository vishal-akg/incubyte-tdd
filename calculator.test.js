const { add } = require("./calulator");

describe("Calulator", () => {
  it("return 0 for empty string", () => {
    expect(add("")).toEqual(0);
  });
});
