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
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from 'next/dist/server/api-utils';
import { FileUploader } from 'react-drag-drop-files';

import { BiImageAdd } from "react-icons/bi";
import styled from 'styled-components';
// className={styles.container}

const FileSelectStyled = styled.div`
  width: 100%;
  cursor: pointer;
  padding: .3rem 1rem .2rem 1.2rem;
  border-radius : 1rem;
  border : 2px dashed #aaa;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    transform: translateY(-.1rem);
  }

  p {
    margin-left : .3rem;
    color: #333;
  }
  
  
`;

const Home: NextPage = () => {
  const [select, setSelect] = useState(effect[0].name);
  const [animation, setAnimation] = useState('');
  const [file, setFile] = useState<any>(null);

  const fileTypes = ["JPG", "PNG", "GIF"];

  console.log(animation);

  const [rotateDeg, setRotateDeg] = useState(0);
  const [scale, setScale] = useState(0);
  const [time, setTime] = useState(0);
  const [timing, setTiming] = useState('ease-in-out');
  const [opacity, setOpacity] = useState(0);

  const handleChange = (file: any) => {
    setFile(file);
  };

  return (
    <HomeStyled>
      <div className="container">
        <div className="left">
          <CategoriesList
            animation={animation}
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
          <FileUploader multiple={false} handleChange={handleChange} name="file" types={fileTypes} >
            <FileSelectStyled>
              <BiImageAdd fontSize={30} />
              <p>이미지 파일을 드래그 또는 선택해서 업로드</p>
            </FileSelectStyled>
          </FileUploader>

          <div className="whiteBox">
            <div
              className="animationBox"
              style={{ animation: `${animation} 1s forwards` }}
            >
              {
                ["shadow-inset"].some(str => str === select) ?
                  null :
                  (
                    file ? <img className="uploadImagePreview" src={URL.createObjectURL(file)} alt="이미지" /> :
                      <Image src={cityImage} />
                  )
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
