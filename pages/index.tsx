import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import CategoriesList from '~/components/templates/CategoriesList';
import FlippingLoading from '~/components/templates/FlippingLoading';
// import styles from '../styles/Home.module.css'

import cityImage from '~/assets/image/cityImage.jpg';
import HomeStyled from './styled';
import effect from '~/utils/effects';

// className={styles.container}

const Home: NextPage = () => {
  const [select, setSelect] = useState(effect[0].name);
  const [animation, setAnimation] = useState('');

  const [rotateDeg, setRotateDeg] = useState(0);
  const [scale, setScale] = useState(0);
  const [time, setTime] = useState(0);
  const [timing, setTiming] = useState('ease-in-out');
  const [opacity, setOpacity] = useState(0);

  return (
    <HomeStyled>
      <div className="container">
        <div className="left">
          <CategoriesList
            effect={effect}
            select={select}
            setSelect={setSelect}
            setAnimation={setAnimation}
          />
        </div>
        <div className="right">
          {/* <div className="miniTitle">
            Left
          </div> */}
          <div className="title">{select} Example</div>

          <div className="whiteBox">
            <div
              className="animationBox"
              style={{ animation: `${animation} 1s forwards` }}
            >
              {
                ["shadow-inset"].some(str => str === select) ? null : <Image src={cityImage} />
              }

            </div>

            {/* <div className="loading">
              <div>
                <FlippingLoading color="#ec407a" />
              </div>
              Loading
            </div> */}
          </div>

          {/* <div className="rap buttons">
        {
          Array(30).fill("").map((x: any, k: number) => <button key={k}>Effect{k + 1}</button>)
        }
      </div> */}

          {/* <div className="rap uploadInput">
        <input type="file" />
        <p>+</p>
      </div> */}
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
