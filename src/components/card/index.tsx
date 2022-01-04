// eslint-disable-next-line import/no-unresolved
import User, { typeUser } from '../user';

export type typeCard = {
  title: string;
  link: string;
  emoji: string;
  user: typeUser;
};

export default function Card(props: typeCard) {
  return (
    <article className="flex justify-between py-4">
      <a
        href={props.link}
        className="flex justify-center items-center sm:w-[92px] sm:h-[92px] w-[76px] h-[76px] bg-white rounded-lg"
      >
        <span className="sm:text-5xl text-4xl">{props.emoji}</span>
      </a>
      <div className="sm:w-[calc(100%-108px)] w-[calc(100%-92px)]">
        <h3 className="font-bold text-gray-600">{props.title}</h3>
        <div className="mt-2">
          <User
            name={props.user.name}
            avatarSmallUrl={props.user.avatarSmallUrl}
            readingTime={props.user.readingTime}
            likedCount={props.user.likedCount}
            profileLink={props.user.profileLink}
          />
        </div>
      </div>
    </article>
  );
}
