const countries = require("./countries");
const { find } = require("./find");

test("empty string returns empty array", () => {
    const result = find([]);
    expect(result).toBe([]);
});

test("the string contains no more than four matches ", () => {
    const result = countries.length <= 4;
    expect(result).toBe(true);
});

test("the search is case insenensitive", () => {
    const result = countries.toLowerCase;
    expect(result).toBe("x");
});

test("no matching countries ", () => {
    const result = countries.length[0];
    expect(result).toBe([0]);
});
