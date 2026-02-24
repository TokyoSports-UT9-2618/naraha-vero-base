/**
 * Sanity Schema: ニュース (News)
 * Sanity Studioで使用するスキーマ定義
 * 日本語ラベルで運用者が直感的に入力可能
 */
export default {
    name: 'news',
    title: 'ニュース',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'タイトル',
            type: 'string',
            description: 'ニュースのタイトルを入力してください',
            validation: (Rule: any) => Rule.required().max(100),
        },
        {
            name: 'slug',
            title: 'スラッグ（URL）',
            type: 'slug',
            description: 'URLに使われる文字列です（タイトルから自動生成できます）',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'date',
            title: '公開日',
            type: 'datetime',
            description: 'ニュースの公開日時を設定してください',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'excerpt',
            title: '概要',
            type: 'text',
            description: '一覧に表示する短い説明文（150文字以内推奨）',
            rows: 3,
        },
        {
            name: 'image',
            title: 'メイン画像',
            type: 'image',
            description: 'ニュースのメイン画像をアップロードしてください',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'content',
            title: '本文',
            type: 'array',
            description: 'ニュースの本文を入力してください',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: '通常', value: 'normal' },
                        { title: '見出し2', value: 'h2' },
                        { title: '見出し3', value: 'h3' },
                        { title: '引用', value: 'blockquote' },
                    ],
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            date: 'date',
            media: 'image',
        },
        prepare(selection: { title: string; date: string; media: any }) {
            const { title, date, media } = selection;
            return {
                title,
                subtitle: date ? new Date(date).toLocaleDateString('ja-JP') : '日付未設定',
                media,
            };
        },
    },
    orderings: [
        {
            title: '公開日（新しい順）',
            name: 'dateDesc',
            by: [{ field: 'date', direction: 'desc' }],
        },
    ],
};
