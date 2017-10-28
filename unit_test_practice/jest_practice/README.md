# JEST をやってみる（TypeScirptで）
## どこみてやる？
公式のチュートリアルをやって見る感
https://facebook.github.io/jest/docs/ja/getting-started.html

## JEST + TypeScriptする方法
せっかくだからTypeScriptもやってみない？  ということで開始。

これとかこれとか見ながらなんとか… 変換かけるのが重要っぽい？
TypeScript自体あまりやったことがないので、よくわからんのです。

- https://github.com/facebook/jest/tree/master/examples/typescript
- https://github.com/kulshekhar/ts-jest

## TypeScirptのドキュメント
公式のやつが良さそう
https://www.typescriptlang.org/docs/handbook/basic-types.html

ただDictionaryが上手く発見できなかった。どこに書いてあるんだろう？

こうやって定義する。

```typescript
var status:{[[index: string]: number;]} = { AC: 0 };
```

