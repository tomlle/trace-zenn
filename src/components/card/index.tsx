// eslint-disable-next-line import/no-unresolved
type propsCard = {
  title: string,
  link: string,
  emoji: string,
  user: JSX.Element,
}

export default function Card(props: propsCard) {
  return (
    <>
      <a href={props.link} className="flex justify-center items-center w-[92px] h-[92px] bg-white rounded-lg">
        <span className="text-5xl">{props.emoji}</span>
      </a>
      <div className="w-[calc(100%-108px)]">
        <h3 className="font-bold text-gray-600">{props.title}</h3>
        <div className="mt-2">{props.user}</div>
      </div>
    </>
  )
}
