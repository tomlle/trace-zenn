type tab = {
  link: string;
  name: string;
  isActive: boolean;
};

export default function NavigationTab(props: tab) {
  let style = 'py-3 mr-5 last:mr-0 relative font-bold block';
  style += props.isActive
    ? ' border-b-2 border-black'
    : ' text-gray-500 hover:text-black';
  return (
    <a className={style} href={props.link}>
      {props.name}
    </a>
  );
}
