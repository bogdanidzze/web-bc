import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Swipers from '../components/Swipers.js'
import Info from '../components/Info'
import Categories from '../components/Categories'


export default function Home() {
  return (
    <div className={styles.container}>
      <Swipers/>
      <Info/>
      <Categories/>
    </div>
  )
}
