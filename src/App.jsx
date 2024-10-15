import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Miguel Antonio"
        content="Eu sou Miguel"
      />

      <Post 
        author="Gabriel"
        content="Novo  Post"
      />
    </div>
  )
}