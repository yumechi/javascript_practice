# JavaScript Practice プロジェクト

このプロジェクトは JavaScript の学習と実践、および関数型プログラミング（Elm）の学習のためのリポジトリです。3つの独立したプロジェクトで構成されており、それぞれ異なる技術スタックと学習目標を持っています。

## 全体的な環境構築

このプロジェクトでは `mise` を使用してツールのバージョン管理を行っています。

### 共通要件
- **mise**: 開発環境管理ツール
- **Node.js**: 各プロジェクトでバージョン24を使用

## プロジェクト構成

### 1. start_elm - Elm言語学習プロジェクト

**技術スタック:**
- Elm 0.19.1-6（関数型プログラミング言語）
- Node.js 24 + yarn
- elm-format、elm-test

**学習内容:**
- The Elm Architecture（Model-View-Update パターン）
- 関数型プログラミングの基礎
- イベント処理とユーザーインタラクション
- HTTP通信とJSON処理
- 時間処理とランダム値生成

**セットアップ:**
```bash
cd start_elm
mise install          # Node.js 24とyarnをインストール
yarn install          # 依存関係をインストール
yarn build            # アプリケーションをビルド
yarn dev              # 開発サーバーを起動（elm reactor）
```

**サンプルファイル:**
- `ApplicationSample.elm`: メインアプリケーション
- `CountUp.elm`: カウンターサンプル
- `HttpSample.elm`: HTTP通信の実装例
- `RandomSample.elm`: ランダム値生成
- `TimeSample.elm`: 時間処理の例

---

### 2. unit_test_practice/jest_practice - Jest + TypeScriptテスト学習

**技術スタック:**
- Jest 29.7.0（テストフレームワーク）
- TypeScript 5.7.2（型安全性）
- ts-jest 29.2.5（TypeScript統合）
- Node.js 24

**学習内容:**
- 単体テストの基礎
- TypeScript環境でのテスト作成
- 非同期処理のテスト（コールバック、Promise）
- テストカバレッジの計測
- Jestマッチャーの活用

**セットアップ:**
```bash
cd unit_test_practice/jest_practice
mise install          # Node.js 24をインストール（上位ディレクトリ設定）
npm install           # 依存関係をインストール
npm test              # テスト実行
npm run test:coverage # カバレッジ付きテスト実行
```

**テストファイル:**
- `sum.test.ts`: 基本的な単体テスト
- `practice_macher.test.ts`: Jestマッチャーの練習
- `practice_Testing_Asynchronous.test.ts`: 非同期処理テスト

---

### 3. vue_practice - Vue.js 3 SQLジェネレーター

**技術スタック:**
- Vue.js 3（Composition API）
- jQuery 3.7.1
- Bootstrap 5.3.3

**学習内容:**
- Vue.js 3の基本的な使用法
- CSVデータの処理と変換
- DOM操作とイベントハンドリング
- Bootstrap 5のレスポンシブデザイン
- クリップボードAPI

**機能:**
- CSVデータからSQL INSERT文の自動生成
- テーブル名の指定
- 生成されたSQLのクリップボードコピー
- エラーハンドリングと警告表示

**使用方法:**
1. ブラウザで `SQL_Creator.html` を開く
2. テーブル名を入力
3. CSVデータを貼り付け
4. 「変換！」ボタンをクリック
5. 生成されたSQL文を確認・コピー

**⚠️ セキュリティに関する重要な注意:**
- このツールは**開発用途専用**です
- 生成されるSQL文にはSQLインジェクション対策が施されていません
- 出力されるSQL文は必ず人間が確認してから使用してください
- 本番環境での直接実行は避けてください

## 開発時の注意事項

### パッケージマネージャー
- **start_elm**: yarn を使用
- **unit_test_practice**: npm を使用
- **vue_practice**: パッケージマネージャー不要（CDN使用）

### 環境設定
- 各ディレクトリに `.mise.toml` ファイルがあり、適切な Node.js バージョンが設定済み
- `mise install` コマンドで各プロジェクトの要件を満たす環境を自動構築

### セキュリティ更新履歴
**2025年**: 全プロジェクトのセキュリティ脆弱性を修正
- 古いライブラリを最新の安全なバージョンに更新
- 現代的な開発環境とツールチェーンに移行
- TypeScriptの厳密モード対応

### 学習の進め方
1. **Elm（start_elm）**: 関数型プログラミングの基礎を学習
2. **テスト（unit_test_practice）**: テスト駆動開発の実践
3. **Vue.js（vue_practice）**: リアクティブなWebアプリケーション開発

各プロジェクトは独立しており、興味のある分野から開始できます。