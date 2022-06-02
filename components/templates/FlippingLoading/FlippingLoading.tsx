import clsx from 'clsx';

import { FlippingLoadingStyled } from './styled';

interface FlippingLoadingProps {
  className?: string;
  color?: string;
}

const FlippingLoading = ({ className, color }: FlippingLoadingProps) => {
  return (
    <FlippingLoadingStyled color={color} className={clsx('FlippingLoading', className)}>
      {/* <div className="plane"></div> */}
    </FlippingLoadingStyled>
  )
}

export default FlippingLoading
