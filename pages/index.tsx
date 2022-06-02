import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import HomeStyled from "./styled";

// className={styles.container}
const Home: NextPage = () => {
  return (
    <HomeStyled>

      <div className="title">
        Css Effect
      </div>

      <div className="rap buttons">
        {
          Array(30).fill("").map((x: any, k: number) => <button key={k}>Effect{k + 1}</button>)
        }
      </div>

      <div className="rap uploadInput">
        <input type="file" />
        <p>+</p>
      </div>

      <div className="image">
        <div style={{ height: "200px", width: "200px", background: "black" }}>

        </div>
      </div>



    </HomeStyled>
  )
}

export default Home
