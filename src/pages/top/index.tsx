import Header from '../../components/header';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import Tooltip from '../../components/tooltip';
import LoginCta from '../../components/loginCta';
import Articles from '../../components/article/articles';
import Cards from '../../components/card/cards';
import { typeCard } from '../../components/card';
import { typeArticle } from '../../components/article';

export default function Top(props: {
  techs: typeCard[];
  ideas: typeCard[];
  books: typeArticle[];
}) {
  if (!props.books.length || !props.ideas.length || !props.techs.length) {
    return (
      <div className="flex justify-center items-center h-screen flex-wrap">
        <div className="animate-spin h-8 w-8 bg-blue-300 rounded-xl" />
        <p className="ml-3 font-bold text-lg">Loading...</p>
      </div>
    );
  }
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
              {!!props.techs.length && <Cards cards={props.techs} />}
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
              {!!props.ideas.length && <Cards cards={props.ideas} />}
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
              {!!props.books.length && <Articles articles={props.books} />}
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
