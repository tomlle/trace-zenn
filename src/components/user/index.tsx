export type userType = {
  name: string,
  avatarSmallUrl: string,
  readingTime: number,
  profileLink: string
}

export default function User(props: userType) {
  return (
    <a href={props.profileLink} className="flex">
      <img className="w-8 h-8 rounded-full" src={props.avatarSmallUrl} alt=""  />
      <div className="ml-2 text-xs">
        <p className="">{props.name}</p>
        <div>
          <time dateTime="2021-12-20T15:28:33+00:00" className="text-gray-400">3日前</time>・
          <span className="ml-1 text-gray-400">{props.readingTime} min read</span>
          <span className="ml-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 " width={14} height={14} viewBox="0 0 110 110"><path fill="currentColor" d="M77.5 12.2c-7.3 0-14.4 2.8-19.8 7.7-1.5 1.3-3.7 1.3-5.2 0-5.4-5-12.5-7.7-19.9-7.7C17.3 12.2 5 24.5 5 39.7c0 20.8 24.5 41 31.4 47.4 3.5 3.3 7.7 7 11.1 10.2 4.2 3.8 10.6 3.8 14.9 0 3.5-3.1 7.6-6.8 11.1-10.2 6.9-6.4 31.4-26.6 31.4-47.4.1-15.2-12.2-27.5-27.4-27.5zm-8.4 65.4c-.9.8-1.6 1.5-2.3 2.1-3.1 2.9-6.7 6.2-9.9 9.1-1.1 1-2.7 1-3.7 0-3.1-2.9-6.7-6.1-9.9-9.1-.6-.6-1.4-1.2-2.3-2.1-7.1-6.4-26-23.4-26-37.9 0-9.7 7.8-17.5 17.5-17.5 5.5.1 10.8 2.4 14.6 6.5l5.9 6.2c1 1.1 2.8 1.2 3.9.2.1 0 .1-.1.2-.2l5.9-6.2c3.7-4.1 9-6.5 14.6-6.5C87.1 22.2 95 30 95 39.7c0 14.5-18.9 31.5-25.9 37.9z"/></svg>
            164
          </span>
        </div>
      </div>
    </a>
  )
}