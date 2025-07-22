// using callback
// テストを空の引数でなく、doneという引数を利用する
// これでテストを終了する前に、doneというコールバックが呼ばれるのを待つ
it('[ts] callback test', (done) => {
    // テスト対象のメソッド
    function fetchData(callback: (data: string) => void): void {
        callback('this is callback desuyo');
    }

    function callbackHandler(data: string): void {
        expect(data).toBe('this is callback desuyo');
        done(); // need !!
    }

    fetchData(callbackHandler);
});

test('[ts] using promise', () => {
    // テスト対象のメソッド
    function fetchData(): Promise<string> {
        return new Promise((resolve) => {
            resolve('promise desuyo');
        });
    }

    expect.assertions(1);
    return fetchData().then((data: string) => {
        expect(data).toBe('promise desuyo');
    });
});
