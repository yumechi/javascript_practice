it('[ts] 1 + 2 = 3', ()=> {
    let sum = require('../script/sum.ts');
    expect(sum.sum(1, 2)).toBe(3);
});
it('[ts] "Hell,"  + "World" = "Hell,World"', ()=> {
    let sum = require('../script/sum.ts');
    expect(sum.appender("Hell,", "World")).toBe("Hell,World");
});
