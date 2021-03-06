export default function Footer() {
  return (
    <footer className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 377.4 88.3"
                height={22}
              >
                <g fill="#111">
                  <path d="M233 56.8h-39c.5 3.5 2.2 6.8 4.8 9.2 2.7 2.3 6.2 3.5 9.8 3.4 2.8 0 5.6-.5 8.2-1.7 2.5-1.1 4.8-2.8 6.5-5l8.2 9.5c-2.5 3.4-5.7 6.1-9.5 7.9-4.6 2.2-9.6 3.3-14.7 3.2-5.7.1-11.4-1.2-16.5-4-4.5-2.5-8.2-6.3-10.7-10.9s-3.8-9.8-3.7-15.1v-2.2c-.1-5.7 1.1-11.3 3.5-16.5 2.2-4.7 5.7-8.6 10.1-11.3 4.7-2.8 10.1-4.2 15.5-4.1 5.2-.1 10.3 1.1 14.9 3.7 4.1 2.5 7.4 6.2 9.4 10.5 2.2 5.1 3.3 10.5 3.2 16.1v7.3zm-16.9-12.9c.1-2.9-.9-5.7-2.8-7.9-1.8-1.9-4.4-2.9-7.9-2.9-2.9-.1-5.8 1.1-7.7 3.2-2 2.6-3.3 5.7-3.6 9h22v-1.4zM128.3 67.9h36.1v14.7h-56.9V72l35.8-54.3h-36.2V2.9h56.6v10.4l-35.4 54.6zM248.8 50.7c0-19.1 12.7-29.2 28.2-29.2s27.9 10.1 27.9 29.2V82h-16V51.4c0-10.6-4.8-16.1-12-16.1s-12.4 5.5-12.4 16.1v30.7h-15.8l.1-31.4zM320.3 50.7c0-19.1 12.7-29.2 28.2-29.2s27.9 10.1 27.9 29.2V82h-16V51.4c0-10.6-4.8-16.1-12-16.1S336 40.8 336 51.4v30.7h-15.8l.1-31.4z" />
                </g>
                <path
                  fill="#3EA8FF"
                  className="logo_svg__st0"
                  d="M2.4 83.3h17c.9 0 1.7-.5 2.2-1.2L68.4 5.2c.6-1-.1-2.2-1.3-2.2H51c-.8 0-1.5.4-1.9 1.1L1.6 81.9c-.3.6.1 1.4.8 1.4zM61 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5h-16c-.6 0-1.2.3-1.5.8L41.5 81.2c-.6.9.1 2.1 1.2 2.1H59c.8 0 1.6-.4 2-1.2z"
                />
              </svg>
            </a>
            <p className="text-gray-400 text-sm mt-3">
              エンジニアのための
              <br />
              情報共有コミュニティ
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 pb-1 border-solid border-b-gray-200 border-b md:border-none md:pb-0">
              About
            </h4>
            <ul>
              <li>
                <a
                  href="https://zenn.dev/about"
                  className="text-sm my-2 block hover:underline"
                >
                  Zennについて
                </a>
              </li>
              <li>
                <a
                  href="https://zenn.dev/faq"
                  className="text-sm my-2 block hover:underline"
                >
                  よくある質問
                </a>
              </li>
              <li>
                <a
                  href="https://zenn.dev/changelog"
                  className="text-sm my-2 block hover:underline"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="https://zenn.dev/zenn"
                  className="text-sm my-2 block hover:underline"
                >
                  使い方
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zenn-dev/zenn-community/projects/1"
                  className="text-sm my-2 block hover:underline"
                >
                  開発ロードマップ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 pb-1 border-solid border-b-gray-200 border-b md:border-none md:pb-0">
              Legal
            </h4>
            <ul>
              <li>
                <a
                  href="https://zenn.dev/terms"
                  className="text-sm my-2 block hover:underline"
                >
                  利用規約
                </a>
              </li>
              <li>
                <a
                  href="https://zenn.dev/privacy"
                  className="text-sm my-2 block hover:underline"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="https://zenn.dev/terms/transaction-law"
                  className="text-sm my-2 block hover:underline"
                >
                  特定法表記
                </a>
              </li>
              <li>
                <a
                  href="https://classmethod.jp/"
                  className="text-sm my-2 block hover:underline"
                >
                  運営会社
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 pb-1 border-solid border-b-gray-200 border-b md:border-none md:pb-0">
              Links
            </h4>
            <ul>
              <li>
                <a
                  href="https://zenn.dev/mediakit"
                  className="text-sm my-2 block hover:underline"
                >
                  メディアキット
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/zenn_dev"
                  className="text-sm my-2 block hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zenn-dev"
                  className="text-sm my-2 block hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://zenn.dev/zenn/articles/zenn-feed-rss"
                  className="text-sm my-2 block hover:underline"
                >
                  RSS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 py-4 flex justify-center border-gray border-t">
          <a href="https://classmethod.jp/">
            <img
              src="https://zenn.dev/images/classmethod-logo-small.png"
              width={115}
              height={24}
              loading="lazy"
              alt="Classmethod inc."
            />
          </a>
        </p>
      </div>
    </footer>
  );
}
