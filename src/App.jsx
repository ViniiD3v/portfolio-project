import './Global.css'
import NavBar from './views/navbar/NavBar.jsx'
import Main from './views/main/main.jsx'
import About from './views/about/about.jsx'
import Projects from './views/projects/projects.jsx'

function App() {
  return (
    <div className='gap-3'>
      <NavBar />
      <Main />
      <About />
      <Projects />
    </div>
  )
}

export default App
