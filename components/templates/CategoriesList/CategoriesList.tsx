import clsx from 'clsx';

import { CategoriesListStyled } from './styled';

import { FaHotjar } from "react-icons/fa";
import { useState } from 'react';
import { StringDecoder } from 'string_decoder';
import { selectedProps } from "~/utils/types";

interface CategoriesListProps {
  className?: string;
  select: string;
  setSelect: any;
  effects: any;
  setAnimation?: any;
  animation: selectedProps;
}
const CategoriesList = ({ className, select, setSelect, effects, setAnimation, animation }: CategoriesListProps) => {
  const animationName = animation.name;

  // <FaHotjar size={18} />
  return (
    <CategoriesListStyled className={clsx('CategoriesList', className)}>
      {

        effects.map((effectVal: any, kk: number) => {
          return <div className='list' key={kk}>
            <div className={clsx("title", effectVal.name === select && "active")} onClick={() => setSelect(effectVal.name)}>{effectVal.name}</div>
            {
              <div className={clsx("item", effectVal.name === select && "show")}>
                {
                  effectVal.effects.map((name: any, k: number) => {
                    if (typeof name === "object") {

                      return <div className={clsx(animationName === name.name && "active")} key={k} onClick={() => {
                        setAnimation({
                          name: name.name,
                          type: "template",
                        });
                      }}>{name.name}</div>;
                    }

                    return <div className={clsx(animationName === name && "active")} key={k} onClick={() => {
                      setAnimation({
                        name: name,
                        type: "keyframes",
                      });
                    }}>{name}</div>
                  })
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
