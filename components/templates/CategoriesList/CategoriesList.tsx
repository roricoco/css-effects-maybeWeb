import clsx from 'clsx';

import { CategoriesListStyled } from './styled';

import { FaHotjar } from "react-icons/fa";
import { useState } from 'react';

interface CategoriesListProps {
  className?: string;
  select: string;
  setSelect: any;
  effect: any;
  setAnimation?: any;
  animation?: string;
}
const CategoriesList = ({ className, select, setSelect, effect, setAnimation, animation }: CategoriesListProps) => {
  // <FaHotjar size={18} />
  return (
    <CategoriesListStyled className={clsx('CategoriesList', className)}>
      {

        effect.map((effectVal: any, kk: number) => {
          return <div className='list' key={kk}>
            <div className={clsx("title", effectVal.name === select && "active")} onClick={() => setSelect(effectVal.name)}>{effectVal.name}</div>
            {
              <div className={clsx("item", effectVal.name === select && "show")}>
                {
                  effectVal.effects.map((name: string, k: number) => <div className={clsx(animation === name && "active")} key={k} onClick={() => {
                    setAnimation(name);
                  }}>{name}</div>)
                }
              </div>
            }

          </div>
        })
      }


      {/* <div className='list'>
        <div className="title"><FaHotjar size={18} /> 메인 카테고리</div>
        <div className="item">
          <div>하위 아이템 1</div>
          <div>하위 아이템 2</div>
          <div>하위 아이템 3</div>
          <div>하위 아이템 4</div>
        </div>
      </div>

      <div className='list'>
        <div className="title">메인 카테고리2</div>
        <div className="item">
          <div>하위 아이템 1</div>
          <div>하위 아이템 2</div>
          <div>하위 아이템 3</div>
          <div>하위 아이템 4</div>
          <div>하위 아이템 5</div>
        </div>
      </div> */}
    </CategoriesListStyled>
  );
};

export default CategoriesList;
