import Home from './components/Home/Home'
import './App.scss'
import Nav from './components/Nav/Nav'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
