import NavigationTab from "./navigation-tab";

const tabs = [
  {
    name: 'Trending',
    link: '#',
    isActive: true,
  },
  {
    name: 'Explore',
    link: '#',
    isActive: false,
  },
];

export default function Navigation() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex">
            {tabs.map((tab, index)=>(
              // eslint-disable-next-line react/no-array-index-key
              <NavigationTab key={index} name={tab.name} link={tab.link} isActive={tab.isActive} />
            ))}
        </div>
      </div>
    </nav>
  );
}
