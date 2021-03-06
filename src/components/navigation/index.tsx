/* eslint-disable react/no-array-index-key */
import NavigationTab from './navigation-tab';

const tabs = [
  {
    name: 'Trending',
    link: '/',
    isActive: true,
  },
  {
    name: 'Explore',
    link: 'https://zenn.dev/articles/explore',
    isActive: false,
  },
];

export default function Navigation() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex">
          {tabs.map((tab, index) => (
            <NavigationTab
              key={index}
              name={tab.name}
              link={tab.link}
              isActive={tab.isActive}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
