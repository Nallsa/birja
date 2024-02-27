export default function ArrowOrder({ width, height }) {
  return (
    <svg
      width={width ?? '29'}
      height={height ?? '22'}
      viewBox={`0 0 ${width ?? '29'} ${height ?? '22'}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 11L28 11M19 2L27.4697 10.4697C27.7626 10.7626 27.7626 11.2374 27.4697 11.5303L19 20'
        stroke='#070707'
        stroke-width='2'
        stroke-linecap='square'
      />
    </svg>
  );
}
