# Elm Tutorial - start_elm

Elm言語の学習と実践のためのプロジェクトです。

## 環境設定

### 必要な環境
- Node.js 24（miseで管理）
- yarn（パッケージマネージャー）

### セットアップ
```bash
# mise でNode.js 24とyarnをインストール
mise install

# 依存関係をインストール
yarn install
```

## 開発

### 利用可能なコマンド
```bash
# アプリケーションをビルド
yarn build

# 開発サーバーを起動
yarn dev

# コードフォーマット
yarn format

# テスト実行
yarn test

# Elmパッケージインストール
yarn install-elm
```

### ファイル構成
```
start_elm/
├── src/                    # Elmソースコード
│   ├── ApplicationSample.elm    # メインアプリケーション
│   ├── CountUp.elm             # カウンターサンプル
│   ├── GetJsonData.elm         # JSON取得サンプル
│   ├── HttpSample.elm          # HTTPリクエストサンプル
│   ├── MultiTextFieldSample.elm # 複数テキストフィールド
│   ├── RandomSample.elm        # ランダム値生成
│   ├── TextFieldSample.elm     # テキストフィールド
│   └── TimeSample.elm          # 時間処理サンプル
├── elm.json               # Elm依存関係設定
├── package.json          # Node.js依存関係とスクリプト
├── .mise.toml           # 開発環境設定
└── README.md            # 本ドキュメント
```

## 技術仕様

### 使用ライブラリ（最新版）
- **Elm**: 0.19.1-6（Elm言語コンパイラー）
- **elm-format**: 0.8.8（コードフォーマッター）
- **elm-test**: 0.19.1-revision9（テストフレームワーク）

### Elm依存パッケージ
- elm/browser: 1.0.2（ブラウザーAPI）
- elm/core: 1.0.4（コアライブラリ）
- elm/html: 1.0.0（HTML生成）
- elm/http: 2.0.0（HTTPリクエスト）
- elm/json: 1.1.3（JSON処理）
- elm/random: 1.0.0（ランダム値）
- elm/time: 1.0.0（時間処理）

## 学習内容

このプロジェクトには以下のElmの基本的な概念のサンプルが含まれています：

- **The Elm Architecture**: Model-View-Update パターン
- **イベント処理**: ボタンクリック、入力フィールド
- **HTTP通信**: APIからのデータ取得
- **JSON処理**: データの変換と表示
- **時間処理**: 現在時刻の表示
- **ランダム値**: 乱数生成とゲーム作成

## セキュリティ更新履歴
- 2025年: 全依存関係を最新の安全なバージョンに更新
- Elm: 0.19.1-3 → 0.19.1-6
- elm-format: 0.8.2 → 0.8.8
- elm-test: 0.19.1-revision2 → 0.19.1-revision9
