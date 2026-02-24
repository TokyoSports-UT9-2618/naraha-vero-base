import { sanityClient } from 'sanity:client';

// GROQ queries
export const newsQuery = `*[_type == "news"] | order(date desc) [0...3] {
  _id,
  title,
  slug,
  date,
  excerpt,
  "imageUrl": image.asset->url
}`;

export const allNewsQuery = `*[_type == "news"] | order(date desc) {
  _id,
  title,
  slug,
  date,
  excerpt,
  content,
  "imageUrl": image.asset->url
}`;

export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  date,
  content,
  "imageUrl": image.asset->url
}`;

// Sanity API からデータ取得する関数
export async function getLatestNews() {
  try {
    const data = await sanityClient.fetch(newsQuery);
    if (data && data.length > 0) {
      return data;
    }
    return null; // Sanityにデータがない場合
  } catch (e) {
    console.warn('Sanity API fetch failed, using mock data:', e);
    return null;
  }
}

export async function getAllNews() {
  try {
    const data = await sanityClient.fetch(allNewsQuery);
    if (data && data.length > 0) {
      return data;
    }
    return null;
  } catch (e) {
    console.warn('Sanity API fetch failed:', e);
    return null;
  }
}

export async function getNewsBySlug(slug: string) {
  try {
    const data = await sanityClient.fetch(newsBySlugQuery, { slug });
    return data;
  } catch (e) {
    console.warn('Sanity API fetch failed:', e);
    return null;
  }
}

// フォールバック用のモックデータ
export const mockNews = [
  {
    _id: '1',
    title: 'NARAHA VERO BASE 2026 開催決定！',
    slug: { current: 'naraha-vero-base-2026' },
    date: '2026-01-15',
    excerpt: '福島県楢葉町で日本初の「自転車×キャンプ」旅フェスティバルを開催します。2026年6月13日-14日、天神御崎公園にて。',
    imageUrl: null,
  },
  {
    _id: '2',
    title: '出展者・スポンサー募集開始',
    slug: { current: 'exhibitor-sponsor-recruitment' },
    date: '2026-02-01',
    excerpt: 'NARAHA VERO BASEへの出展やスポンサーシップに関心をお持ちの企業・団体を募集しています。',
    imageUrl: null,
  },
  {
    _id: '3',
    title: 'ツールド福島との同時開催が決定',
    slug: { current: 'tour-de-fukushima-collaboration' },
    date: '2026-02-20',
    excerpt: 'ツールド福島との同時開催により、楢葉町をサイクリストの聖地として盛り上げます。',
    imageUrl: null,
  },
];
