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

// モックデータは lib/mockData.ts に分離
export { mockNews } from './mockData';
