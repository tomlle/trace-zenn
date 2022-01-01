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
import Card from './components/card'
import User from './components/user'
import LoginCta from './components/loginCta'
import Cards from './components/card/cards'

type card = {
  title: string,
  link: string,
  emoji: string,
  user: JSX.Element
}

type trendTechType = {
  slug: string,
  publishedAt: string,
  emoji: string,
  likedCount: number,
  readingTime: number,
  title: string,
  user: {
    avatarSmallUrl: string,
    name: string,
    username: string
  }
}

export default function App() {
  const [techCards,setTechCards] = useState<card[] | []>([]);
  const [ideaCards,setIdeaCards] = useState<card[] | []>([]);
  useEffect(()=>{
    async function getTrend(url: string): Promise<void> {
      const options: AxiosRequestConfig = {
        url: `https://zenn-api.netlify.app/.netlify/functions/${url}`,
        method: "GET",
      };
      try {
        const trends = await axios(options);
        console.log(trends);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        const formatTrends: trendTechType[] = trends.data.map((trend: trendTechType) => ({
          slug: trend.slug,
          publishedAt: trend.publishedAt,
          emoji: trend.emoji,
          likedCount: trend.likedCount,
          readingTime: trend.readingTime,
          title: trend.title,
          user: {
            avatarSmallUrl: trend.user.avatarSmallUrl,
            name: trend.user.name,
            username: trend.user.username,
          }
        }));
        const cards: card[] = formatTrends.map((trend: trendTechType): card => ({
          title: trend.title,
          link: `https://zenn.dev/${trend.user.username}/articles/${trend.slug}`,
          emoji: trend.emoji,
          user: <User name={trend.user.name} avatarSmallUrl={trend.user.avatarSmallUrl} readingTime={trend.readingTime} profileLink={`https://zenn.dev/${trend.user.username}`}/>,
        }));
        // eslint-disable-next-line default-case
        switch (url) {
          case 'trendTech':
            setTechCards(cards);
            break;
          case 'trendIdea':
            setIdeaCards(cards);
            break;
        }
        setTechCards(cards);
      // eslint-disable-next-line no-empty
      } catch (e) {
      
      }
    }
    void getTrend('trendTech');
    void getTrend('trendIdea');
  },[]);

  return (
    <div className="SiteWrapper">
      <Header />
      <Navigation />
      <main className="Main" id="main">
        <section className="py-10 bg-blue-100">
          <div className="max-w-5xl mx-auto px-4 md:p-8">
            <div className="text-4xl font-bold flex">
              <h2 className="mr-2">Tech</h2>
              <button type="button" className="flex justify-center items-end translate-y-[-5px]">
                <span className="flex justify-center items-center w-[17px] h-[17px] bg-gray-400 text-white rounded-full text-sm" aria-label="詳細を確認する">?</span>
              </button>
            </div>
            <div className="mt-6">
              <Cards cards={techCards}/>
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
            <div className="text-4xl font-bold flex">
              <h2 className="mr-2">Ideas</h2>
              <button type="button" className="flex justify-center items-end translate-y-[-5px]">
                <span className="flex justify-center items-center w-[17px] h-[17px] bg-gray-400 text-white rounded-full text-sm" aria-label="詳細を確認する">?</span>
              </button>
            </div>
            <div className="mt-6">
              <Cards cards={ideaCards}/>
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
                {/* {cards.map((cardItem) => (
                  <div className="">
                    <Card title={cardItem.title} link={cardItem.link} emoji={cardItem.emoji} user={cardItem.user} />
                  </div>
                ))} */}
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

