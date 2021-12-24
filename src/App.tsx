import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';
import Card from './components/card';
import Avator from './components/avator';

type card = {
  title: string,
  link: string,
  icon: string,
  avator: JSX.Element,
}

const cards: card[] = [
  {
    title: `とってもやさしいGo言語入門`,
    link: "https://zenn.dev/ak/articles/1fb628d82ed79b",
    icon: "🍼",
    avator: <Avator />
  },
  {
    title: `あなたはTypeScriptの"型"で足し算、できますか？`,
    link: "https://zenn.dev/kerukukku1/articles/b66844ba02bc8c",
    icon: "🐱",
    avator: <Avator />
  },
  {
    title: "できるだけインフラ運用したくない Ruby on Rails on Google Cloud",
    link: "https://zenn.dev/nownabe/articles/rails-on-google-cloud",
    icon: "🚂",
    avator: <Avator />
  },
  {
    title: "Vitest はどれくらい早いのか ~ Jest と比較 ~",
    link: "https://zenn.dev/jay_es/articles/2021-12-22-vitest-comparison",
    icon: "⚡",
    avator: <Avator />
  },
];

export default function App() {
  return (
    <div className="SiteWrapper">
      <Header />
      <Navigation />
      <main className='Main' id='main'>
        <section className='py-10 bg-blue-100'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-4xl font-bold flex'>
              <h2>Tech</h2>
              <button type='button'>?</button>
            </div>
            <div className='mt-6'>
              <div className='grid grid-cols-2 gap-x-5'>
                {cards.map((cardItem)=>(
                  <div className=''>
                    <Card title={cardItem.title} link={cardItem.link} icon={cardItem.icon} avator={cardItem.avator}/>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-10 text-center'>
              <a href="/" className='text-blue-700'>トレンドをもっと見る→</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
