// eslint-disable-next-line react/require-default-props
export default function Button(props: {children: string, addClass?: string | undefined}) {

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const classes = `px-3 py-2 bg-blue-400 text-white font-bold rounded hover:bg-blue-500 ${props.addClass}`;
  return (
    <button type='button' className={classes}>
      {props.children}
    </button>
  );
}