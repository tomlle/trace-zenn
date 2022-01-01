// eslint-disable-next-line import/no-unresolved
import Card from './index';

type propsCard = {
  title: string,
  link: string,
  emoji: string,
  user: JSX.Element,
}

export default function Cards(props: {cards: propsCard[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
      {props.cards.map((card) => (
        <article className="flex justify-between py-5">
          <Card title={card.title} link={card.link} emoji={card.emoji} user={card.user} />
        </article>
      ))}
    </div>
  )
}
