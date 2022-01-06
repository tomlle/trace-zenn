/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';
import { typeUser } from './components/user';
import LoginCta from './components/loginCta';
import Cards from './components/card/cards';
import { typeCard } from './components/card';
import Articles from './components/article/articles';
import { typeArticle } from './components/article';
import Tooltip from './components/tooltip';

type typeTrendTechIdea = {
  slug: string;
  publishedAt: string;
  emoji: string;
  readingTime: number;
  likedCount: number;
  title: string;
  coverImageSmallUrl: string;
  user: typeUser;
};

type typeTrendBook = {
  slug: string;
  likedCount: number;
  title: string;
  price: number;
  coverImageSmallUrl: string;
  user: typeUser;
};

function getCards(trends: any): typeCard[] {
  const cards: typeCard[] = trends.map(
    (trend: typeTrendTechIdea): typeCard => ({
      title: trend.title,
      link: `https://zenn.dev/${trend.user.username}/articles/${trend.slug}`,
      emoji: trend.emoji,
      user: {
        name: trend.user.name,
        avatarSmallUrl: trend.user.avatarSmallUrl,
        readingTime: trend.readingTime,
        profileLink: `https://zenn.dev/${trend.user.username}`,
        likedCount: trend.likedCount,
      },
    }),
  );

  return cards;
}

function getArticles(trends: any): typeArticle[] {
  const articles: typeArticle[] = trends.map(
    (trend: typeTrendBook): typeArticle => ({
      title: trend.title,
      coverImageSmallUrl: trend.coverImageSmallUrl,
      link: `https://zenn.dev/${trend.user.username}/articles/${trend.slug}`,
      price: trend.price,
      user: {
        name: trend.user.name,
        avatarSmallUrl: trend.user.avatarSmallUrl,
        profileLink: `https://zenn.dev/${trend.user.username}`,
        likedCount: trend.likedCount,
      },
    }),
  );

  return articles;
}

export default function App() {
  const [techs, setTechs] = useState<typeCard[]>([]);
  const [ideas, setIdeas] = useState<typeCard[]>([]);
  const [books, setBooks] = useState<typeArticle[]>([]);
  useEffect(() => {
    let unmounted = false;
    async function setTrend(url: string): Promise<void> {
      await axios
        .get(`https://zenn-api.netlify.app/.netlify/functions/${url}`)
        .then((res: AxiosResponse<any>) => {
          if (unmounted) return;

          const { data, status } = res;
          console.log(data);
          console.log(`status: ${status}`);

          switch (url) {
            case 'trendTech':
              if (!unmounted) {
                console.log('setTech');
                setTechs(getCards(data));
              }
              break;
            case 'trendIdea':
              if (!unmounted) {
                console.log('setIdea');
                setIdeas(getCards(data));
              }
              break;
            case 'trendBook':
              if (!unmounted) {
                console.log('setBook');
                setBooks(getArticles(data));
              }
              break;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    void setTrend('trendTech');
    void setTrend('trendIdea');
    void setTrend('trendBook');

    return () => {
      console.log('mounted');
      unmounted = true;
    };
  }, []);

  return (
    <>
      <Header />
      <Navigation />
      <main className="Main" id="main">
        <section className="py-10 bg-blue-100">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-4xl font-bold flex items-end">
              <h2 className="mr-1">Tech</h2>
              <Tooltip content="プログラミングなどの技術についての知見">
                <button
                  type="button"
                  className="flex justify-center items-end translate-y-[-5px]"
                >
                  <span
                    className="flex justify-center items-center w-[17px] h-[17px] bg-gray-400 hover:bg-gray-600 text-white rounded-full text-sm"
                    aria-label="詳細を確認する"
                  >
                    ?
                  </span>
                </button>
              </Tooltip>
            </div>
            <div className="mt-6">
              {!!techs.length && <Cards cards={techs} />}
            </div>
            <div className="mt-10 text-center">
              <a href="/" className="text-blue-700">
                トレンドをもっと見る →
              </a>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-4xl font-bold flex items-end">
              <h2 className="mr-1">Ideas</h2>
              <Tooltip content="キャリア、チーム、仕事論、ポエムなど">
                <button
                  type="button"
                  className="flex justify-center items-end translate-y-[-5px]"
                >
                  <span
                    className="flex justify-center items-center w-[17px] h-[17px] bg-gray-400 hover:bg-gray-600 text-white rounded-full text-sm"
                    aria-label="詳細を確認する"
                  >
                    ?
                  </span>
                </button>
              </Tooltip>
            </div>
            <div className="mt-6">
              {!!ideas.length && <Cards cards={ideas} />}
            </div>
            <div className="mt-10 text-center">
              <a href="/" className="text-blue-700">
                記事をさらに探す →
              </a>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-4xl font-bold flex">
              <h2>Books</h2>
            </div>
            <div className="mt-10">
              {!!books.length && <Articles articles={books} />}
            </div>
            <div className="mt-10 text-center">
              <a href="/" className="text-blue-700">
                ブックストアで本を探す →
              </a>
            </div>
          </div>
        </section>
      </main>
      <LoginCta />
      <Footer />
    </>
  );
}
