import CoursePages from './pages/CoursePages'
import MajorPages from './pages/MajorPages'
import DegreePages from './pages/DegreePages'
import Login from './pages/Login'
import Join from './pages/Join'
import Header from './components/Header'
import { Routes, Route} from "react-router-dom"
import { Container } from 'react-bootstrap'
import './index.css'

const App = () => {
  return (
    <div>
    <Container>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/coursePages" element={<CoursePages/>} />
      <Route path="/majorPages" element={<MajorPages/>} />
      <Route path="/majorPages" element={<MajorPages/>} />
      <Route path="/degreePages" element={<DegreePages/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/join" element={<Join/>} />

    </Routes>
    </Container>
    </div>
  )
}

export default App
