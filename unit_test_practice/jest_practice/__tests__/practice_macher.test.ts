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
    for(let add_num = 1: number;  add_num < 10; add_num++) {
        sum += add_num;
        expect(sum).not.toBe(0);
    }
});

// 続きは真偽値（およびそれらしく思える値）から
