/* eslint-disable react/no-array-index-key */
import Article, { typeArticle } from './index';

export default function Articles(props: { articles: typeArticle[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 ">
      {props.articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          link={article.link}
          coverImageSmallUrl={article.coverImageSmallUrl}
          price={article.price}
          user={article.user}
        />
      ))}
    </div>
  );
}
