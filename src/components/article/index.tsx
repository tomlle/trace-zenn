import User, { typeUser } from '../user';

export type typeArticle = {
  title: string;
  link: string;
  price: number;
  coverImageSmallUrl: string;
  user: typeUser;
};

export default function Article(props: typeArticle) {
  return (
    <article>
      <a href={props.link} className="block mb-2">
        <div className="relative mb-2">
          <div className="shadow-md rounded">
            <img
              src={props.coverImageSmallUrl}
              alt={props.title}
              className="rounded"
            />
          </div>
          <div
            className={
              props.price
                ? 'absolute right-0 top-0 inline-flex items-center leading-[1.1] px-[6px] py-[4px] bg-gray-300 text-white text-[10px] font-bold rounded-tl-[1px] rounded-tr-[4px] rounded-br-[1px] rounded-bl-[3px]'
                : 'absolute right-0 top-0 inline-flex items-center leading-[1.1] px-[6px] py-[4px] bg-blue-400 text-white text-[10px] font-bold rounded-tl-[1px] rounded-tr-[4px] rounded-br-[1px] rounded-bl-[3px]'
            }
          >
            <span className="mr-1">¥</span>
            {props.price.toLocaleString()}
          </div>
        </div>
        <h3 className="font-bold text-sm">{props.title}</h3>
      </a>
      <User
        name={props.user.name}
        avatarSmallUrl={props.user.avatarSmallUrl}
        likedCount={props.user.likedCount}
        profileLink={props.user.profileLink}
        isMini
      />
    </article>
  );
}
