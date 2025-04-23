import './Global.css'
import NavBar from './views/navbar/NavBar.jsx'
import Main from './views/main/main.jsx'
import About from './views/about/about.jsx'

function App() {
  return (
    <div className='gap-3'>
      <NavBar />
      <Main />
      <About />
    </div>
  )
}

export default App
