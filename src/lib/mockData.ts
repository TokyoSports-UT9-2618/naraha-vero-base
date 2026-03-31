// フォールバック用のモックデータ（Sanity APIが利用できない場合に使用）
export const mockNews = [
  {
    _id: '4',
    title: '宿泊キャンプチケット予約受付開始！ 4月1日スタート',
    slug: { current: 'camp-ticket-start' },
    date: '2026-04-01',
    excerpt: 'NARAHA VERO BASE 2026の宿泊キャンプチケット予約が4月1日からスタート。数量限定のため、お早めにご予約ください。',
    imageUrl: '/images/news-camp-ticket.jpg',
  },
  {
    _id: '1',
    title: 'NARAHA VERO BASE 2026 開催決定！',
    slug: { current: 'naraha-vero-base-2026' },
    date: '2026-01-15',
    excerpt: '福島県楢葉町で日本初の「自転車×キャンプ」旅フェスティバルを開催します。2026年6月13日-14日、天神岬スポーツ公園にて。',
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
    title: 'ツール・ド・ふくしまとの同時開催が決定',
    slug: { current: 'tour-de-fukushima-collaboration' },
    date: '2026-02-20',
    excerpt: 'ツール・ド・ふくしまとの同時開催により、楢葉町をサイクリストの聖地として盛り上げます。',
    imageUrl: null,
  },
];
