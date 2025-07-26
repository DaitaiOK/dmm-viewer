'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const GENRES = [
  { label: 'すべて', genreId: null },
  { label: '巨乳', genreId: '4010' },
  { label: '美少女', genreId: '2009' },
  { label: '人妻', genreId: '4045' },
  { label: '素人', genreId: '4026' },
  { label: '制服', genreId: '4030' },
  { label: 'レズ', genreId: '4037' },
  { label: '羞恥', genreId: '4046' },
  { label: '中出し', genreId: '4008' },
  { label: '潮吹き', genreId: '4011' },
  { label: 'オナニー', genreId: '4006' },
  { label: 'フェラ', genreId: '4013' },
  { label: 'イラマチオ', genreId: '4068' },
  { label: '寝取られ', genreId: '4075' },
  { label: '痴女', genreId: '4018' },
  { label: 'お姉さん', genreId: '4023' },
  { label: 'パイズリ', genreId: '4022' },
  { label: 'スレンダー', genreId: '4042' },
  { label: '美乳', genreId: '4057' },
  { label: 'ハメ撮り', genreId: '4078' },
];

export default function Home() {
  const [videos, setVideos] = useState<any[]>([]);
  const [genreId, setGenreId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      const api_id = 'yBDgfQWq1EUKHPRR6KSy';
      const aff_id_api = 'b1219d-990';   // API用
      const aff_id_link = 'b1219d-001';  // アフィリンク用
      const offset = Math.floor(Math.random() * 100);

      const base = `https://api.dmm.com/affiliate/v3/ItemList?api_id=${api_id}&affiliate_id=${aff_id_api}&site=FANZA&service=digital&floor=videoa&hits=10&offset=${offset}&sort=date&output=json`;
      const url = genreId ? `${base}&genre_id=${genreId}` : base;

      try {
        const res = await fetch(url);
        const data = await res.json();
        const items = data.result?.items || [];

        const validItems = items
          .filter((item: any) => item.sampleImageURL?.sample_l?.image?.length > 0 && item.content_id)
          .map((item: any) => {
            const contentId = item.content_id;
            const dmmURL = `https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=${contentId}`;
            const encoded = encodeURIComponent(dmmURL);
            const affiliateURL = `https://al.dmm.co.jp/?lurl=${encoded}&af_id=${aff_id_link}`;
            return {
              ...item,
              affiliateURL,
            };
          });

        setVideos(validItems);
      } catch (err) {
        console.error('API fetch error:', err);
        setVideos([]);
      }
    }

    fetchVideos();
  }, [genreId]);

  return (
    <main className="h-screen w-screen bg-black text-white overflow-hidden">
      <div className="absolute top-2 left-2 z-20">
        <select
          className="rounded bg-gray-800 text-white px-2 py-1 text-sm"
          value={genreId ?? ''}
          onChange={(e) => setGenreId(e.target.value || null)}
        >
          {GENRES.map((g) => (
            <option key={g.label} value={g.genreId ?? ''}>
              {g.label}
            </option>
          ))}
        </select>
      </div>

      {videos.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p>読み込み中...</p>
        </div>
      ) : (
        <Swiper
          direction="vertical"
          slidesPerView={1}
          loop
          mousewheel
          modules={[Mousewheel]}
          className="w-screen h-screen"
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <Swiper
                direction="horizontal"
                slidesPerView={1}
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full h-full"
              >
                {item.sampleImageURL.sample_l.image.map((img: string, i: number) => (
                  <SwiperSlide
                     key={i}
                       className="relative w-full h-full cursor-pointer flex flex-col items-center justify-center"
                       onClick={() => window.open(item.affiliateURL, '_blank')}
                               >
                        <img
                             src={img}
                              alt={`サンプル${i + 1}`}
                              className="object-contain w-full h-[85vh]"
                                   />
  <div className="w-full bg-black bg-opacity-70 px-4 py-3 mt-2">
    <a
      href={item.affiliateURL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-base font-semibold block leading-snug hover:underline text-center"
    >
      {item.title}
    </a>
    <p className="text-gray-300 text-xs mt-1 text-center">
      ジャンル: {GENRES.find(g => g.genreId === genreId)?.label || 'すべて'}
    </p>
  </div>
</SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </main>
  );
}
