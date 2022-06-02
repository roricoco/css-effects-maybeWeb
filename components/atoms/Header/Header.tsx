import clsx from 'clsx';

import { HeaderStyled } from './styled';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <HeaderStyled className={clsx('Header', className)}>
      
    </HeaderStyled>
  )
}

export default Header
