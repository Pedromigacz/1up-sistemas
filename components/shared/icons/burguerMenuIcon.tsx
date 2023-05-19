const BurguerMenuIcon = (): JSX.Element => {
  return (
    <svg
      width='31'
      height='32'
      viewBox='0 0 31 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 8H25'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        className='topBar'
      />
      <path
        d='M6 16H25'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        className='middleBar'
      />
      <path
        d='M6 24H25'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        className='bottomBar'
      />
    </svg>
  );
};

export default BurguerMenuIcon;
