/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { typeArticle } from './components/article';
import { typeCard } from './components/card';
import { typeUser } from './components/user';
import ArticlesExplore from './pages/articles/explore';

import Top from './pages/top';

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
        .get(`https://fetch-zenn-trend-api.vercel.app/api/${url}`)
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Top techs={techs} books={books} ideas={ideas} />}
        />
        <Route path="/articles/explore" element={<ArticlesExplore />} />
      </Routes>
    </BrowserRouter>
  );
}
