import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import { Navbar } from './component/Navbar/Navbar'
import { Main } from './component/Main/Main'
import {Header} from './component/Header/Header'
function App() {

  return (
    <div className={styles.App}>

        <Navbar />
        <Header/>
        <Main />
      
    </div>
  )
}

export default App
