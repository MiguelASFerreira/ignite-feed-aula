import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Miguel Antonio"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure distinctio accusantium cum ipsam voluptatibus itaque quisquam, est ea autem quae! A labore fugit sit magnam ducimus dolores porro minima?"
          />

          <Post 
            author="Gabriel"
            content="Novo  Post"
          />
        </main>
      </div>
    </div>
  )
}