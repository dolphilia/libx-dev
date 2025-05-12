# 統合ビルドの進捗状況

## 概要

複数のAstroプロジェクトをモノレポ構造で管理するドキュメントサイトの統合ビルドに関する進捗状況をまとめています。

## 現在の状態

- 統合ビルドスクリプト（`scripts/build-integrated.js`）を実装し、各アプリケーションのビルド出力を1つのディレクトリに統合できるようになりました
- ローカル開発環境用のビルドオプション（`--local`）を追加し、GitHub Pagesのベースパス（`/docs-astro`）を削除する機能を実装しました
- index.htmlのリダイレクト問題を解決し、ローカル環境で正しく`/en/`にリダイレクトするようになりました
- サイドバーJSONファイルを正しい場所にコピーする処理を追加しました

## 実装した機能

### 1. 統合ビルドスクリプト

- 各アプリケーション（top-page, sample-docs）のビルド出力を1つのディレクトリ（`dist`）に統合
- アプリケーションごとに適切なパスプレフィックスを設定
  - top-page: ルートに配置
  - sample-docs: `/docs/sample-docs/`に配置

### 2. ローカル開発環境対応

- コマンドライン引数 `--local` を追加
- ローカル開発環境用のビルドでは、GitHub Pagesのベースパス（`/docs-astro`）を削除
- HTMLファイル内のパス参照を修正する機能を実装
  - アセットパスの修正
  - リダイレクト先URLの修正
  - リンクのhref属性の修正
  - リダイレクトメッセージの修正
  - canonical URLの修正

### 3. index.htmlのリダイレクト問題の解決

- ルートのindex.htmlを直接修正する処理を追加
- ローカル環境で正しく`/en/`にリダイレクトするように修正
- 環境変数PORTからポート番号を取得するように改善（デフォルト: 8080）

### 4. サイドバーJSONファイルの対応

- サイドバーJSONファイルを正しい場所にコピーする処理を追加
- ビルド後の環境でも正しく読み込めるように、追加の場所にもコピーする処理を実装

## 現在の課題

1. **サイドバーJSONの読み込みエラー**
   - サイドバーJSONファイルを追加の場所にコピーしたが、まだ読み込みエラーが発生している
   ```
   [getSidebarAsync] Error during sidebar loading for en-v1: Error: ENOENT: no such file or directory, open '/Users/dolphilia/github/docs-astro-dev/apps/sample-docs/dist/pages/public/sidebar/sidebar-en-v1.json'
   ```
   - 現在はフォールバックとして手動サイドバーを使用しているため、機能的には問題ないが、エラーログが出力される

2. **パス解決の問題**
   - ビルド後の環境でのパス解決ロジックに問題がある可能性がある
   - sidebar.config.tsの`getSidebarAsync`関数内のパス解決ロジックを見直す必要がある

## 次のステップ

1. **サイドバーJSONの読み込みエラーの完全解決**
   - sidebar.config.tsの`getSidebarAsync`関数内のパス解決ロジックを修正
   - ビルド後の環境でのパス解決を正しく行えるように改善

2. **統合ビルドの検証**
   - ローカル環境での動作確認
   - GitHub Pages環境での動作確認

3. **ドキュメントの更新**
   - 統合ビルドの使用方法に関するドキュメントを作成
   - 開発者向けのガイドラインを追加

4. **パフォーマンス最適化**
   - ビルドプロセスの最適化
   - アセットの最適化（画像圧縮、CSSの最小化など）

## 使用方法

### 通常ビルド（GitHub Pages用）

```bash
node scripts/build-integrated.js
```

### ローカル開発環境用ビルド

```bash
node scripts/build-integrated.js --local
```

### ローカルサーバーの起動

```bash
cd dist && python3 -m http.server 8080
```

## 参考情報

- GitHub Pagesのベースパス: `/docs-astro`
- ローカル開発環境のURL: `http://localhost:8080`
