import clsx from 'clsx';

import { HeaderStyled } from './styled';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <HeaderStyled className={clsx('Header', className)}>
      <div className='left'>
        <div className="title white">animation Effects</div>
        {/* <div></div> */}
      </div>

      <div className="right">

      </div>
    </HeaderStyled>
  )
}

export default Header
