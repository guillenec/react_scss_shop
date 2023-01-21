import { useState } from 'react'
import './App.scss'
import ItemListContainer from './components/listaMenu/itemListContainer'
import NavBar from './components/nav/navBar'

function App() {
  const [count, setCount] = useState(0)

  const saludo = 'bienvenido user' 

  return (
    <div className="App">

      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <ItemListContainer greeting={saludo} />
      </main>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
