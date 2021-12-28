/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './App.css'
import axios, { AxiosRequestConfig, AxiosError } from "axios"
import { useEffect } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Card from './components/card'
import User, {userType} from './components/user'

type card = {
  title: string
  link: string
  emoji: string
  user: userType
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
  }
}

let cards: card[];

// eslint-disable-next-line consistent-return
async function getTrendTech(): Promise<trendTechType>[] {
  const options: AxiosRequestConfig = {
    url: 'https://zenn-api.netlify.app/.netlify/functions/trendTech',
    method: "GET",
  };

  let ret = [];

  try {
    const axiosData = await axios(options);
    console.log(axiosData);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    ret = axiosData.data.map((trendTech: trendTechType) => ({
      slug: trendTech.slug,
      publishedAt: trendTech.publishedAt,
      emoji: trendTech.emoji,
      likedCount: trendTech.likedCount,
      readingTime: trendTech.readingTime,
      title: trendTech.title,
      user: {
        avatarSmallUrl: trendTech.user.avatarSmallUrl,
        name: trendTech.user.name,
      }
    }));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return ret;
  // eslint-disable-next-line no-empty
  } catch (e) {
  }
}

export default function App() {
  useEffect(()=>{
    // void getTrendTech();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    cards = getTrendTech().map((trendTech: trendTechType) => ({
        title: trendTech.title,
        link: `https://zenn.dev/${trendTech.user.name}/articles/${trendTech.slug}`,
        emoji: trendTech.emoji,
        user: <User name={trendTech.user.name} avatarSmallUrl={trendTech.user.avatarSmallUrl} readingTime={trendTech.readingTime} profileLink={`https://zenn.dev/${trendTech.user.name}`}/>,
    }));
  });
  return (
    <div className="SiteWrapper">
      <Header />
      <Navigation />
      <main className="Main" id="main">
        <section className="py-10 bg-blue-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-4xl font-bold flex">
              <h2>Tech</h2>
              <button type="button">?</button>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-x-5">
                {cards.map((cardItem) => (
                  <div className="">
                    <Card title={cardItem.title} link={cardItem.link} emoji={cardItem.emoji} user={cardItem.user} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 text-center">
              <a href="/" className="text-blue-700">
                トレンドをもっと見る→
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

