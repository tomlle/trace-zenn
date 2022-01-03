/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './App.css'
import axios, { AxiosRequestConfig } from "axios"
import { useEffect, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Navigation from './components/navigation'
import {typeUser} from './components/user'
import LoginCta from './components/loginCta'
import Cards from './components/card/cards'
import {typeCard} from "./components/card"
import Articles from "./components/article/articles"
import {typeArticle} from "./components/article"
import Tooltip from "./components/tooltip"

type typeTrendTech = {
  slug: string,
  publishedAt: string,
  emoji: string,
  readingTime: number,
  likedCount: number,
  title: string,
  coverImageSmallUrl: string,
  user: typeUser
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCards(trends: any): typeCard[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const cards: typeCard[] = trends.map((trend: typeTrendTech): typeCard => ({
    title: trend.title,
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    link: `https://zenn.dev/${trend.user.username}/articles/${trend.slug}`,
    emoji: trend.emoji,
    user: trend.user
    }
  ));

  return cards;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getArticles(trends: any): typeArticle[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const articles: typeArticle[] = trends.map((trend: typeTrendTech): typeArticle => ({
    title: trend.title,
    coverImageSmallUrl: trend.coverImageSmallUrl,
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    link: `https://zenn.dev/${trend.user.username}/articles/${trend.slug}`,
    user: trend.user
    }
  ));

  return articles;
}

export default function App() {
  const [techs,setTechs] = useState<typeCard[]>([]);
  const [ideas,setIdeas] = useState<typeCard[]>([]);
  const [books,setBooks] = useState<typeArticle[]>([]);
  useEffect(()=>{
    async function getTrend(url: string): Promise<void> {
      const options: AxiosRequestConfig = {
        url: `https://zenn-api.netlify.app/.netlify/functions/${url}`,
        method: "GET",
      };
      try {
        const trends = await axios(options);
        // eslint-disable-next-line default-case
        switch (url) {
          case 'trendTech':
            // eslint-disable-next-line no-case-declarations
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setTechs(getCards(trends.data));
            break;
          case 'trendIdea':
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setIdeas(getCards(trends.data));
            break;
          case 'trendBook':
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setBooks(getArticles(trends.data));
            break;
        }
      // eslint-disable-next-line no-empty
      } catch (e) {
      
      }
    }
    void getTrend('trendTech');
    void getTrend('trendIdea');
    void getTrend('trendBook');
  },[]);

  return (
    <div className="SiteWrapper">
      <Header />
      <Navigation />
      <main className="Main" id="main">
        <section className="py-10 bg-blue-100">
          <div className="max-w-5xl mx-auto px-4 md:p-8">
            <div className="text-4xl font-bold flex items-end">
              <h2 className="mr-1">Tech</h2>
              <Tooltip content="プログラミングなどの技術についての知見">
                <button type="button" className="flex justify-center items-end translate-y-[-5px]">
                  <span className="flex justify-center items-center w-[17px] h-[17px] bg-gray-400 hover:bg-gray-600 text-white rounded-full text-sm" aria-label="詳細を確認する">?</span>
                </button>
              </Tooltip>
            </div>
            <div className="mt-6">
              {
                !techs.length &&
                <Cards cards={techs}/>
              }
            </div>
            <div className="mt-10 text-center">
              <a href="/" className="text-blue-700">
                トレンドをもっと見る →
              </a>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 md:p-8">
            <div className="text-4xl font-bold flex items-end">
              <h2 className="mr-1">Ideas</h2>
              <Tooltip content="キャリア、チーム、仕事論、ポエムなど">
                <button type="button" className="flex justify-center items-end translate-y-[-5px]">
                  <span className="flex justify-center items-center w-[17px] h-[17px] bg-gray-400 hover:bg-gray-600 text-white rounded-full text-sm" aria-label="詳細を確認する">?</span>
                </button>
              </Tooltip>
            </div>
            <div className="mt-6">
              {
                !ideas.length &&
                <Cards cards={ideas}/>
              }
              
            </div>
            <div className="mt-10 text-center">
              <a href="/" className="text-blue-700">
                記事をさらに探す →
              </a>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 md:p-8">
            <div className="text-4xl font-bold flex">
              <h2>Books</h2>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-x-5">
                {
                  !books.length &&
                  <Articles articles={books}/>
                }
              </div>
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
    </div>
  )
}

