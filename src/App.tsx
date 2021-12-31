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
  const [ideaCards,setideaCards] = useState<card[] | []>([]);
  useEffect(()=>{
    async function getTrendTech(): Promise<void> {
      const options: AxiosRequestConfig = {
        url: 'https://zenn-api.netlify.app/.netlify/functions/trendTech',
        method: "GET",
      };
      try {
        const trendTechs = await axios(options);
        console.log(trendTechs);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        const formatTrendTech: trendTechType[] = trendTechs.data.map((trendTech: trendTechType) => ({
          slug: trendTech.slug,
          publishedAt: trendTech.publishedAt,
          emoji: trendTech.emoji,
          likedCount: trendTech.likedCount,
          readingTime: trendTech.readingTime,
          title: trendTech.title,
          user: {
            avatarSmallUrl: trendTech.user.avatarSmallUrl,
            name: trendTech.user.name,
            username: trendTech.user.username,
          }
        }));
        const formatCards: card[] = formatTrendTech.map((trendTech: trendTechType): card => ({
          title: trendTech.title,
          link: `https://zenn.dev/${trendTech.user.username}/articles/${trendTech.slug}`,
          emoji: trendTech.emoji,
          user: <User name={trendTech.user.name} avatarSmallUrl={trendTech.user.avatarSmallUrl} readingTime={trendTech.readingTime} profileLink={`https://zenn.dev/${trendTech.user.username}`}/>,
        }));
        setTechCards(formatCards);
      // eslint-disable-next-line no-empty
      } catch (e) {
      
      }
    }
    void getTrendTech();
  });
  useEffect(()=>{
    async function getTrendIdea(): Promise<void> {
      const options: AxiosRequestConfig = {
        url: 'https://zenn-api.netlify.app/.netlify/functions/trendIdea',
        method: "GET",
      };
      try {
        const trendTechs = await axios(options);
        console.log(trendTechs);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        const formatTrendTech: trendTechType[] = trendTechs.data.map((trendTech: trendTechType) => ({
          slug: trendTech.slug,
          publishedAt: trendTech.publishedAt,
          emoji: trendTech.emoji,
          likedCount: trendTech.likedCount,
          readingTime: trendTech.readingTime,
          title: trendTech.title,
          user: {
            avatarSmallUrl: trendTech.user.avatarSmallUrl,
            name: trendTech.user.name,
            username: trendTech.user.username,
          }
        }));
        const formatCards: card[] = formatTrendTech.map((trendTech: trendTechType): card => ({
          title: trendTech.title,
          link: `https://zenn.dev/${trendTech.user.username}/articles/${trendTech.slug}`,
          emoji: trendTech.emoji,
          user: <User name={trendTech.user.name} avatarSmallUrl={trendTech.user.avatarSmallUrl} readingTime={trendTech.readingTime} profileLink={`https://zenn.dev/${trendTech.user.username}`}/>,
        }));
        setideaCards(formatCards);
      // eslint-disable-next-line no-empty
      } catch (e) {
      
      }
    }
    void getTrendIdea();
  });

  return (
    <div className="SiteWrapper">
      <Header />
      <Navigation />
      <main className="Main" id="main">
        <section className="py-10 bg-blue-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-4xl font-bold flex">
              <h2 className="mr-2">Tech</h2>
              <button type="button" className="flex justify-center items-end translate-y-[-5px]">
                <span className="flex justify-center items-center w-[17px] h-[17px] bg-gray-400 text-white rounded-full text-sm" aria-label="詳細を確認する">?</span>
              </button>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-x-5">
                {techCards.map((cardItem) => (
                  <div className="">
                    <Card title={cardItem.title} link={cardItem.link} emoji={cardItem.emoji} user={cardItem.user} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 text-center">
              <a href="/" className="text-blue-700">
                トレンドをもっと見る →
              </a>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-4xl font-bold flex">
              <h2 className="mr-2">Ideas</h2>
              <button type="button" className="flex justify-center items-end translate-y-[-5px]">
                <span className="flex justify-center items-center w-[17px] h-[17px] bg-gray-400 text-white rounded-full text-sm" aria-label="詳細を確認する">?</span>
              </button>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-x-5">
                {ideaCards.map((cardItem) => (
                  <div className="">
                    <Card title={cardItem.title} link={cardItem.link} emoji={cardItem.emoji} user={cardItem.user} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 text-center">
              <a href="/" className="text-blue-700">
                記事をさらに探す →
              </a>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="max-w-5xl mx-auto">
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

