import './Global.css'
import NavBar from './views/navbar/NavBar.jsx'
import Main from './views/main/main.jsx'
import About from './views/about/about.jsx'
import Projects from './views/projects/projects.jsx'
import { Skills } from './views/skills/skills.jsx'

function App() {
  return (
    <div className='gap-3'>
      <NavBar />
      <div className='mb-3'>
        <Main />
      </div>
      <div className='mb-3'>
        <About />
      </div>
      <div className='mb-5'>
        <Projects />
      </div>
      <div className='mb-3'>
        <Skills />
      </div>
    </div>
  )
}

export default App
