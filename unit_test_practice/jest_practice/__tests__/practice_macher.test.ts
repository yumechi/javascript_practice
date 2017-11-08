it('[ts] three plus five equal eight, toBe', ()=> {
    // expect メソッドはexpectation オブジェクトを返す
    // これがマッチャーに活かされる
    // toBe は === を利用した、厳密な透過性を確認する
    expect(3 + 5).toBe(8);
});

test('[ts] object assignment', () => {
    // toEqual はオブジェクトの値を確認する
    // TypeScriptだとDictonaryは下記のような書き方になるっぽい
    // 参照: http://www.atmarkit.co.jp/ait/articles/1501/29/news117_4.html
    // toEqualはオブジェクトまたは配列のオブジェクトを再帰的に確認する
    var data: { [index: string]: string;} = {yui: 'guitar'};
    data['mio'] = 'base';
    expect(data).toEqual({yui: 'guitar', mio: 'base'});
});

test('[ts] adding positive numbers is not zero', () => {
    // not.toBeは一致しないことを確認可能
    var sum: number = 0;
    for(const add_num = 1: number;  add_num < 10; add_num++) {
        sum += add_num;
        expect(sum).not.toBe(0);
    }
});

test('[ts] null check', () => {
    const n: null = null;
    // null のみに一致
    expect(n).toBeNull();
    // undefined のみ一致
    expect(n).toBeDefined();
    // undefined でないとき一致、notが入るので今回は一致する
    expect(n).not.toBeUndefined();
    // if文がtrueのとき一致、notが入るので今回は一致する
    expect(n).not.toBeTruthy();
    // if文がfalseのとき一致
    expect(n).toBeFalsy();
});

test('[ts] three plus five', () => {
    const value: number = 3 + 5;
    expect(value).toBeGreaterThan(6);
    expect(value).toBeGreaterThanOrEqual(7.7);
    expect(value).toBeLessThan(9);
    expect(value).toBeLessThanOrEqual(8.2);

    // equals
    expect(value).toBe(8);
    expect(value).toEqual(8);
});

// 丸め誤差にテストを依存させない
// 浮動小数点は toBeCloseTo を使うと良い
test('[ts] add floating point numbers.', () => {
    const v = 1.4 + 1.23;
    expect(v).toBeCloseTo(2.63);
    // 当然、一致しない
    // expect(v).toBeCloseTo(2.64);
    expect(v).not.toBeCloseTo(2.64);
});

// 文字列のマッチング
test('[ts] there is no I in baseball', () => {
    expect('baseball').not.toMatch(/I/);
});
test('[ts] there is k in takoyaki', () => {
    expect('takoyaki').toMatch(/k/);
});
test('[ts] but there is a "rm" in starmine', () => {
    expect('starmine').toMatch(/rm/);
});

// 配列は toContain を使用して調べる
const sportList = [
    'baseball',
    'soccer',
    'basketball',
    'archery'
];
test('[ts] the sport list has soccer on it', () => {
    expect(sportList).toContain('soccer');
});

