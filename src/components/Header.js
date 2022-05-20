import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Courses from '../components/Course/Courses'
import Degrees from '../components/Degree/Degrees'
import Majors from '../components/Major/Majors'

const Header = () =>{
      useEffect(() => {
        const getCourses = async () => {
            const coursesFromServer = await fetchCourses()
            setCourses(coursesFromServer)
        }
        getCourses()
    },[])

    //Fetch Courses
    const fetchCourses = async () => {
        const res = await fetch ('http://localhost:5000/courses')
        const data = await res.json()

        return data
    }
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getDegrees = async () => {
        const coursesFromServer = await fetchDegrees()
        setDegrees(coursesFromServer)
    }
    getDegrees()
},[])

//Fetch Degrees
const fetchDegrees = async () => {
    const res = await fetch ('http://localhost:5000/degrees')
    const data = await res.json()

    return data
}

const [degrees, setDegrees] = useState([])

useEffect(() => {
  const getMajors = async () => {
      const coursesFromServer = await fetchMajors()
      setMajors(coursesFromServer)
  }
  getMajors()
},[])

//Fetch Degrees
const fetchMajors = async () => {
  const res = await fetch ('http://localhost:5000/majors')
  const data = await res.json()

  return data
}

const [majors, setMajors] = useState([])

    return(
<>
  <Navbar bg="dark" variant="dark">
    <Container>
        <Link to="/" className="navbar-brand">Home</Link>
        <Nav className="me-auto">
        <Link to="/join" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/coursePages" className="nav-link">Course</Link>
        <Link to="/majorPages" className="nav-link">Major</Link>
        <Link to="/degreePages" className="nav-link">Degree</Link>
    </Nav>
    </Container>
  </Navbar>
  <div>
  <h1>Admin Home</h1>
  <h2>This list is going to be clickable, when clicking the one of the list, system allocate user to show the details</h2>
  <br />
  <h2>Degrees</h2>
  {degrees.length > 0 ? <Degrees degrees={degrees}/>
    : ('No Degrees To Show')}
  <h2>Majors</h2>
  {majors.length > 0 ? <Majors majors={majors}/>
    : ('No Majors To Show')}
  <h2>Courses</h2>
  {courses.length > 0 ? <Courses courses={courses}/>
    : ('No Courses To Show')}
  </div>
</>
    )
}

export default Header