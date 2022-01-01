import Button from '../button'

export default function LoginCta() {
  return (
    <aside className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:p-8">
        <div className="bg-blue-100 rounded-[16px] md:flex md:justify-between md:pt-12 md:pb-4 md:px-20 block p-8">
          <div className="w-auto">
            <p className="font-bold text-5xl leading-normal">Join Zenn</p>
            <p className="mt-3 text-gray-600 text-lg">あなたの知見やアイデアを共有しよう</p>
            <div className="mt-8">
              <Button addClass="shadow px-8">今すぐはじめる</Button>
            </div>
          </div>
          <div className="w-[210px] mt-8 ml-auto md:w-[260px] md:flex md:items-end">
            <img src="https://zenn.dev/images/drawing/man-working.svg" alt="" loading="lazy" className="w-full h-[203px]"/>
          </div>
        </div>
      </div>
    </aside>
  );
}