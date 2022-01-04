/* eslint-disable react/no-array-index-key */
import Article, { typeArticle } from './index';

export default function Articles(props: { articles: typeArticle[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
      {props.articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          link={article.link}
          coverImageSmallUrl={article.coverImageSmallUrl}
          user={article.user}
        />
      ))}
    </div>
  );
}
