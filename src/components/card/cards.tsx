/* eslint-disable react/no-array-index-key */
import Card, { typeCard } from './index';

export default function Cards(props: { cards: typeCard[] }) {
  console.log('props Card');
  console.log(props.cards);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
      {props.cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          link={card.link}
          emoji={card.emoji}
          user={card.user}
        />
      ))}
    </div>
  );
}
