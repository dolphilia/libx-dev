// コンテンツコレクションの設定
import { defineCollection, z } from 'astro:content';

// ドキュメントコレクションのスキーマ定義
const docsSchema = z.object({
  // タイトル（必須）
  title: z.string(),
  // 説明（オプション）
  description: z.string().optional(),
  // 公開日（オプション）
  pubDate: z.date().optional(),
  // 更新日（オプション）
  updatedDate: z.date().optional(),
  // 著者（オプション）
  author: z.string().optional(),
  // 画像（オプション）
  image: z.string().optional(),
  // タグ（オプション）
  tags: z.array(z.string()).optional(),
  // ドラフトフラグ（オプション、デフォルトはfalse）
  draft: z.boolean().optional().default(false),
  // 順序（オプション）
  order: z.number().optional(),
  // 前のページへのリンク（オプション）
  prev: z.object({
    text: z.string(),
    link: z.string()
  }).optional(),
  // 次のページへのリンク（オプション）
  next: z.object({
    text: z.string(),
    link: z.string()
  }).optional(),
});

// コレクションの定義
export const collections = {
  // docsコレクション
  'docs': defineCollection({
    schema: docsSchema
  }),
};
