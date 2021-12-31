// eslint-disable-next-line import/no-unresolved
import { ReactElement } from 'react';
import { userType } from '../user';

type card = {
  title: string,
  link: string,
  emoji: string,
  user: JSX.Element,
}

export default function Card(props: card) {
  return (
    <article className="grid grid-cols-4 py-5">
      <a href={props.link} className="flex justify-center items-center w-24 h-24 bg-white rounded-lg">
        <span className="text-5xl">{props.emoji}</span>
      </a>
      <div className="col-span-3">
        <h3 className="font-bold text-gray-600">{props.title}</h3>
        <div className="mt-2">{props.user}</div>
      </div>
    </article>
  )
}
