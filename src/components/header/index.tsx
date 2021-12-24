export default function Header(){
  return(
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between py-4">
          <div className="flex items-center">
            <a href="/" className='py-1 block'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.4 88.3" height={22}><g fill="#111"><path d="M233 56.8h-39c.5 3.5 2.2 6.8 4.8 9.2 2.7 2.3 6.2 3.5 9.8 3.4 2.8 0 5.6-.5 8.2-1.7 2.5-1.1 4.8-2.8 6.5-5l8.2 9.5c-2.5 3.4-5.7 6.1-9.5 7.9-4.6 2.2-9.6 3.3-14.7 3.2-5.7.1-11.4-1.2-16.5-4-4.5-2.5-8.2-6.3-10.7-10.9s-3.8-9.8-3.7-15.1v-2.2c-.1-5.7 1.1-11.3 3.5-16.5 2.2-4.7 5.7-8.6 10.1-11.3 4.7-2.8 10.1-4.2 15.5-4.1 5.2-.1 10.3 1.1 14.9 3.7 4.1 2.5 7.4 6.2 9.4 10.5 2.2 5.1 3.3 10.5 3.2 16.1v7.3zm-16.9-12.9c.1-2.9-.9-5.7-2.8-7.9-1.8-1.9-4.4-2.9-7.9-2.9-2.9-.1-5.8 1.1-7.7 3.2-2 2.6-3.3 5.7-3.6 9h22v-1.4zM128.3 67.9h36.1v14.7h-56.9V72l35.8-54.3h-36.2V2.9h56.6v10.4l-35.4 54.6zM248.8 50.7c0-19.1 12.7-29.2 28.2-29.2s27.9 10.1 27.9 29.2V82h-16V51.4c0-10.6-4.8-16.1-12-16.1s-12.4 5.5-12.4 16.1v30.7h-15.8l.1-31.4zM320.3 50.7c0-19.1 12.7-29.2 28.2-29.2s27.9 10.1 27.9 29.2V82h-16V51.4c0-10.6-4.8-16.1-12-16.1S336 40.8 336 51.4v30.7h-15.8l.1-31.4z"/></g><path fill="#3EA8FF" className="logo_svg__st0" d="M2.4 83.3h17c.9 0 1.7-.5 2.2-1.2L68.4 5.2c.6-1-.1-2.2-1.3-2.2H51c-.8 0-1.5.4-1.9 1.1L1.6 81.9c-.3.6.1 1.4.8 1.4zM61 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5h-16c-.6 0-1.2.3-1.5.8L41.5 81.2c-.6.9.1 2.1 1.2 2.1H59c.8 0 1.6-.4 2-1.2z"/></svg>
            </a>
          </div>
          <div className="flex items-center">
            <div className='mr-5'>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>
            <div className='mr-5'>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </a>
            </div>
            <div className='mr-5'>
              <a href="/" className='block'>
                <img src="https://storage.googleapis.com/zenn-user-upload/avatar/7a22d8b360.jpeg" className="rounded-full h-10 w-10" alt="" />
              </a>
            </div>
            <div>
              <button type='button' className='px-3 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600'>Add new</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}