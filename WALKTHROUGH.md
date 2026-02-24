# NARAHA VERO BASE 公式LP - 開発ウォークスルー

> 最終更新: 2026-02-25

## 概要
福島県楢葉町で開催される「自転車×キャンプ」旅フェスティバル NARAHA VERO BASE の公式LPを、Astro + Sanity + Tailwind CSS で構築。

## 技術スタック
- **Astro 5** (SSG) + **Tailwind CSS 4** (`@tailwindcss/vite`)
- **Sanity CMS** (`@sanity/astro`) - ニュース管理
- **Cloudflare Pages** - デプロイ先

---

## Phase 1: 基盤構築 ✅
- Astro 5 プロジェクト初期化
- Tailwind CSS 4 統合
- デザインシステム（`global.css`）: CHILLな西海岸カラーパレット、Outfit + Noto Sans JP

## Phase 3: メインLP ✅
`contents.md` の正式文案に完全準拠した7セクション:

| セクション | コンポーネント | 概要 |
|---|---|---|
| Hero | `Hero.astro` | Unsplash背景+キャッチコピー+CTA |
| Introduction | `Introduction.astro` | Not a Race / The Vibe / Inclusivity |
| Naraha Special | `NarahaSpecial.astro` | 画像テキスト交互配置×3（★最重要） |
| Contents | `Experience.astro` | EXHIBITION / ACTIVITY / CAMPING カード |
| History & Trust | `HistoryTrust.astro` | BIKE&CAMP実績訴求 |
| CTA | `CallToAction.astro` | Join Us! チケット+問い合わせ |
| News | `News.astro` | Sanity API / モックデータ対応 |

## Phase 2: Sanity ニュース投稿 ✅
- `@sanity/astro` 統合（SSGモード、Studio埋め込みなし）
- API取得 + モックデータへのフォールバック
- ニュース一覧 `/news/` + 詳細 `/news/[slug]`
- Sanityスキーマ定義（`sanity.config.ts`）
- **※ Sanityプロジェクト作成 → `.env` 設定で即稼働**

## Phase 4: 公開・最適化 ✅
- SEO: OGP, Twitter Card, canonical, JSON-LD構造化データ
- PWA: `manifest.json` + Service Worker
- サイトマップ: `@astrojs/sitemap` 自動生成
- `robots.txt`, `favicon.svg`（NVBグラデーション）

---

## ビルド出力
```
dist/
├── index.html
├── news/index.html
├── news/naraha-vero-base-2026/index.html
├── news/exhibitor-sponsor-recruitment/index.html
├── news/tour-de-fukushima-collaboration/index.html
├── sitemap-index.xml / sitemap-0.xml
├── robots.txt, manifest.json, sw.js, favicon.svg
└── _astro/ (CSS)
```

## Cloudflare Pages デプロイ手順
1. GitHubにpush
2. Cloudflare Dashboard → Pages → 「Create a project」
3. Build command: `npm run build` / Output: `dist`
4. 環境変数: `PUBLIC_SANITY_PROJECT_ID`（Sanity使用時）
5. Deploy

## 残タスク
- [ ] 画像差し替え（Unsplash → 正式素材）
- [ ] Sanityプロジェクト作成 → `.env` 接続
- [ ] 独自ドメイン設定（Cloudflare管理画面）
