# NARAHA VERO BASE — 作業メモ兼引継書

> 最終更新: 2026-02-25  
> 作業者: AntiGravity AI Agent

---

## 今回の作業内容（2026-02-25）

### 概要
メインLPに **新規7セクション追加**、**1セクション改修**、**ヘッダーナビ拡充** を実施。

---

## 追加・変更ファイル一覧

### 新規作成（7ファイル）

| ファイル | セクション | 概要 |
|---|---|---|
| `src/components/Overview.astro` | 概要（5W1H） | What/When/Where/Who/How Much/How の6カード |
| `src/components/Exhibitors.astro` | 出展ブランド | ロゴギャラリー形式（ダミー8社、クリックでURL遷移） |
| `src/components/Guests.astro` | スペシャルゲスト | 写真+名前+タイトル+紹介文カード×2（増設可） |
| `src/components/EventsWorkshops.astro` | イベント&WS | ワークショップ等のカードリスト（ダミー6件） |
| `src/components/Timetable.astro` | タイムテーブル | Day1/Day2を左右2カラム表示（モバイルは縦積み） |
| `src/components/Contact.astro` | お問い合わせ | 題名+メール+本文フォーム（フロントエンドのみ） |
| `src/components/FAQ.astro` | よくある質問 | `<details>`ネイティブアコーディオン（ダミー7問） |

### 改修（3ファイル）

| ファイル | 変更内容 |
|---|---|
| `src/components/Venue.astro` | 🚗車/🚃電車/🚌バス のアクセス情報カード＋住所・駐車場情報を追加 |
| `src/components/Header.astro` | ナビリンクを12項目に拡充、デスクトップ1024px〜表示、モバイルハンバーガー対応 |
| `src/pages/index.astro` | 全15セクションを配置 |

---

## 最終セクション順序（index.astro）

```
1.  Hero
2.  Introduction (ABOUT)
3.  NarahaSpecial
4.  Overview (概要) 🆕
5.  Exhibitors (出展社) 🆕
6.  Experience (CONTENTS)
7.  EventsWorkshops (イベント&WS) 🆕
8.  Guests (ゲスト) 🆕
9.  Timetable (タイムテーブル) 🆕
10. HistoryTrust
11. Venue (会場+アクセス) 🔧改修
12. News
13. CallToAction (TICKET)
14. FAQ 🆕
15. Contact (問い合わせ) 🆕
--- Footer (Layout内) ---
```

## ヘッダーナビリンク（12項目）

```
ABOUT → 概要 → 出展社 → CONTENTS → イベント → ゲスト → TIME TABLE → 会場 → NEWS → FAQ → TICKET → CONTACT
```

---

## ダミーデータの差し替えが必要な箇所

| コンポーネント | 差し替え箇所 | 備考 |
|---|---|---|
| `Overview.astro` | 参加費・参加方法の詳細 | 正式情報が決まったら更新 |
| `Exhibitors.astro` | ロゴ画像・ブランド名・URL（全8件） | 現在はイニシャルロゴのプレースホルダー |
| `Guests.astro` | ゲスト写真・名前・タイトル・紹介文（2件） | Unsplash画像を使用中 |
| `EventsWorkshops.astro` | WS名・時間・内容（6件） | プログラム確定後に更新 |
| `Timetable.astro` | 全スケジュール（Day1: 12件、Day2: 9件） | ダミーデータ |
| `FAQ.astro` | Q&A内容（7問） | 必要に応じて追加・修正 |
| `Contact.astro` | フォーム送信先バックエンド | 現在はフロントエンドのみ（デモ送信） |
| `Venue.astro` | アクセス情報の詳細、Google Map埋め込み | 住所はダミーの可能性あり |

---

## 技術メモ

### デザインシステム
- カラー: `global.css` の `@theme` ブロックで一元管理
- 全セクション共通: `.section-padding` + `.container` + `.reveal`（スクロールアニメーション）
- 見出し装飾: `.section-label`（英字ラベル）+ `.gradient-text`（グラデーション）

### インタラクション
- **タイムテーブル**: JSなし、CSS grid 2カラム。モバイルは `grid-template-columns: 1fr` で縦積み
- **FAQ**: `<details>/<summary>` ネイティブHTML。CSSアニメーション付き
- **問い合わせフォーム**: フロントエンドバリデーション + デモ送信（`setTimeout`でシミュレーション）
- **ヘッダー**: スクロール80px以上で背景表示、ハンバーガー開閉、リンクタップで自動クローズ

### Sanity CMS
- Newsセクションのみ Sanity 連携（モックデータフォールバックあり）
- `.env` に `SANITY_PROJECT_ID` と `SANITY_DATASET` を設定すれば接続可能
- 他セクションのCMS化は未対応（すべてハードコードされたデータ）

---

## 残タスク

- [ ] 画像差し替え（Unsplash → 正式素材）
- [ ] 出展社ロゴ・URL差し替え
- [ ] ゲスト情報差し替え
- [ ] タイムテーブル正式データ投入
- [ ] 問い合わせフォームのバックエンド実装（Cloudflare Workers / Formspree 等）
- [ ] Sanityプロジェクト作成 → `.env` 接続
- [ ] 独自ドメイン設定（Cloudflare管理画面）
- [ ] OGP画像の正式版作成
- [ ] Google Map 実埋め込み（iframe）
