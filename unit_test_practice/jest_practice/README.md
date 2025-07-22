# JEST をやってみる（TypeScriptで）

## 環境設定

### 必要な環境
- Node.js 24（miseで管理）
- npm（パッケージマネージャー）

### セットアップ
```bash
# mise でNode.js 24をインストール
mise install

# 依存関係をインストール
npm install
```

## テスト実行

```bash
# 全テスト実行
npm test

# ウォッチモードでテスト実行
npm run test:watch

# カバレッジ付きでテスト実行
npm run test:coverage
```

## 技術仕様

### 使用ライブラリ（最新版）
- **Jest**: 29.7.0（テストフレームワーク）
- **TypeScript**: 5.7.2（型システム）
- **ts-jest**: 29.2.5（TypeScript + Jest連携）
- **@types/jest**: 29.5.14（Jest型定義）
- **@types/node**: 22.10.2（Node.js型定義）

### ファイル構成
```
jest_practice/
├── __tests__/              # テストファイル
│   ├── sum.test.ts         # 基本的な計算テスト
│   ├── practice_macher.test.ts    # Jest matcherの練習
│   └── practice_Testing_Asynchronous.test.ts  # 非同期テスト
├── script/                 # ソースコード
│   └── sum.ts             # テスト対象の関数
├── package.json           # 依存関係とスクリプト定義
├── tsconfig.json          # TypeScript設定
└── README.md             # 本ドキュメント
```

## 学習内容

### JEST + TypeScript
- 公式のチュートリアルベース: https://jestjs.io/docs/getting-started
- TypeScript対応は ts-jest を使用

### 参考資料
- [Jest公式ドキュメント](https://jestjs.io/)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)

### TypeScript型定義例
```typescript
// Dictionary型の定義
var status: { [index: string]: number; } = { AC: 0 };
```

## セキュリティ更新履歴
- 2025年: 全依存関係を最新の安全なバージョンに更新
- Jest 24.9.0 → 29.7.0
- TypeScript 2.9.2 → 5.7.2
- その他関連パッケージも最新版に更新

