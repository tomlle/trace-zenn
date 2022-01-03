import User, {typeUser} from "../user";

export type typeArticle = {
  title: string,
  link: string,
  coverImageSmallUrl: string,
  user: typeUser
}

export default function Article(props: typeArticle) {
  return (
    <article>
      <a href={props.link}>
        <div>
          <div>
            <img src={props.coverImageSmallUrl} alt={props.title} />
          </div>
          <div>
            <span>¥</span>0
          </div>
        </div>
        <h3>{props.title}</h3>
      </a>
      <User name={props.user.name} avatarSmallUrl={props.user.avatarSmallUrl} likedCount={props.user.likedCount} profileLink={props.user.profileLink} isMini/>
    </article>
  );
}