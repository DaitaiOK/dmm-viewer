export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 mt-12">このサイトについて</h1>

        <p className="text-lg mb-6 leading-relaxed">
          このサイトは、“運命の夜のおかず”を探し求めるすべての人のために作られた、シンプルかつ直感的なAVサンプルビューワーです。
        </p>

        <ul className="list-disc list-inside text-lg mb-6 leading-relaxed">
          <li>無駄な機能を一切排除し、「おかずの吟味」にだけ集中できる男のための設計</li>
          <li>毎回ランダムに作品画像が表示され、運試し感覚で楽しめる</li>
          <li>ジャンルを選ぶことで、ある程度好みの系統に絞って作品を吟味できる</li>
        </ul>

        <p className="text-lg mb-6 leading-relaxed">
          「今日は何を見るか...」と迷ったとき、ピンとくる一本に出会えることを願って。
          このサイトが、あなたの今夜のパートナー探しに少しでも貢献できれば幸いです。
        </p>

        <hr className="border-gray-600 my-6" />

        <h2 className="text-2xl font-semibold mb-4">運営情報</h2>
        <p className="text-base text-gray-300 mb-2">運営者：DaitaiOK</p>
        <p className="text-base text-gray-300 mb-2">
          お問い合わせ：X（<a href="https://x.com/1PMbbb" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">@1PMbbb</a>）または{' '}
          <a href="https://github.com/DaitaiOK" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">GitHub</a>
        </p>

        <hr className="border-gray-600 my-6" />

        <p className="text-base text-gray-300 mb-2">
          ※ 本サイトはDMMアフィリエイトを利用しており、すべてのリンクは公式ページに遷移します。
        </p>
        <p className="text-base text-gray-300 mb-2">
          ※ 掲載されているサンプル画像はDMM公式APIを通じて取得されたもので、当サイトでは著作権を一切保有しておりません。
        </p>
        <p className="text-base text-gray-300 mb-2">
          ※ 当サイトは個人によって非公式に運営されており、DMMグループとは関係ありません。
        </p>
      </div>
    </main>
  );
}
