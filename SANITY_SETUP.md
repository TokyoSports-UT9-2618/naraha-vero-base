# Sanity セットアップ手順書

---

## STEP 1 — Sanityアカウント確認・プロジェクト作成

1. `https://sanity.io` にアクセス
2. 「Start for free」→ Googleアカウントでログイン
3. ダッシュボードで「Create new project」
4. プロジェクト名：`naraha-vero-base`（なんでもOK）
5. Dataset：`production`（デフォルトのまま）
6. **Project ID** をコピーしておく（`abc12345` みたいな文字列）

---

## STEP 2 — `.env` ファイルを作る

プロジェクトフォルダ直下に `.env` というファイルを作って以下を書く：

```
SANITY_PROJECT_ID=ここにProject IDを貼る
SANITY_DATASET=production
```

---

## STEP 3 — `sanity.config.ts` を更新

VSCodeで `sanity.config.ts` の103行目を修正：

```ts
// 変更前
projectId: 'placeholder',

// 変更後
projectId: import.meta.env.SANITY_PROJECT_ID,
```

---

## STEP 4 — Cloudflare Pages に環境変数を設定

Cloudflareのデプロイ先にも同じ値を登録する：

1. Cloudflare Dashboard → Workers & Pages → `naraha-vero-base`
2. 「Settings」→「Environment variables」
3. 以下を追加：
   - `SANITY_PROJECT_ID` ＝ Project IDの値
   - `SANITY_DATASET` ＝ `production`

---

## STEP 5 — 動作確認

Claudeに「プッシュして」と伝えてデプロイ。
NewsセクションにSanityから投稿した記事が表示されれば完了。

---

## 投稿方法（完了後）

- `https://[ProjectID].sanity.studio` にアクセス
- スマホからでも記事の投稿・編集・削除ができる
