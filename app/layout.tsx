import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI 绘本',
  description: '用 AI 创作个性化绘本',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN"> {/* 语言设置为中文 */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
