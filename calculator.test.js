const { add } = require("./calulator");

describe("Calulator", () => {
  it("returns 0 for empty string", () => {
    expect(add("")).toEqual(0);
  });

  it("returns the number itself if only one number is given", () => {
    expect(add("1,")).toEqual(1);
  });

  it("returns 3 for the input 1,2", () => {
    expect(add("1,2")).toEqual(3);
  });

  it("throws expection for unknown amount of numbers", () => {
    expect(() => add("1,2,3,4,5")).toThrow(TypeError);
  });
});
