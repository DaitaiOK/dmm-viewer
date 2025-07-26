// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'AVサンプルビューワー',
  description: 'DMM APIを使用したサンプル画像表示',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className="m-0 p-0 overflow-hidden bg-black text-white">
        {children}
      </body>
    </html>
  );
}
