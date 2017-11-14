// using callback
// テストを空の引数でなく、doneという引数を利用する
// これでテストを終了する前に、doneというコールバックが呼ばれるのを待つ
it('[ts] callback test', done => {
    // テスト対象のメソッド
    function fetchData(_callback: (data: string) => void) => void {
        _callback();
    }

    function callback(data) {
        expect(data).toBe('this is callback desuyo');
        done(); // need !!
    }

    fetchData(callback('this is callback desuyo'));
});

test('[ts] using promise', () => {
    // テスト対象のメソッド
    function fetchData(_callback: (data: string) => void) => Promise {
        return new Promise((resolve, reject) => {
            if(typeof _callback === 'undefined') {
                callback('promise dayo');
            }
            resolve();
        }
    }

    function callback(data) {
        expect(data).toBe('promise dayo');
    }

    expect.assertions(1);
    return fetchData().then(data => {
        expect(data).toBe('promise desuyo');
    });
});
