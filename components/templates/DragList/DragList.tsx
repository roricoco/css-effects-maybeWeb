import clsx from 'clsx';
import { HTMLProps } from 'react';

import { DragListStyled } from './styled';

interface DragListProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
}

const DragList = ({ className }: DragListProps) => {
  return (
    <DragListStyled className={clsx('DragList', className)}>

    </DragListStyled>
  )
}

export default DragList
