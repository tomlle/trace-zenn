import { useState } from 'react';
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Tooltip(props: {children: any, content: string}) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}

        >{props.children}
      </div>
      {
        show &&
        <p className="absolute left-1/2 top-full -translate-x-1/2 w-[140px] text-[10px] leading-tight text-white text-center inline-block bg-black rounded p-1">{props.content}</p>
      }
    </div>
  );
}