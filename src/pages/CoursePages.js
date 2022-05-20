import PropTypes from 'prop-types'
import Courses from '../components/Course/Courses'
import AddCourse from '../components/Course/AddCourse'
import AddButton from '../components/AddButton'
import { useState, useEffect } from "react"
import React from 'react'

const CoursePages = ({title}) =>{
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
    //Fetch Course
    const fetchCourse = async (id) => {
        const res = await fetch (`http://localhost:5000/courses/${id}`)
        const data = await res.json()
    
        return data
    }
    //Edit Courses

    //Add Courses
    const addCourse = async (course) => {
        const res = await fetch('http://localhost:5000/courses', {
            method: 'POST',
            headers: {
                'Content-type':  'application/json',
            },
            body: JSON.stringify(course),
        })

        const data = await res.json()

        setCourses([...courses, data])
    }
    // Delete Courses
    const deleteCourse = async (id) => {
        await fetch(`http://localhost:5000/courses/${id}`,{
            method: 'DELETE',
        })
        setCourses(courses.filter(course => course.id !== id))
    }
    //Toggle Reminer
     const toggleReminder = async (id) => {
         const courseToToggle = await fetchCourse(id)
         const updCourse = {...courseToToggle, 
            reminder: !courseToToggle.reminder}

        const res = await fetch(`http://localhost:5000/courses/${id}`,{
            method:'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updCourse)
        })

            const data = await res.json()

         setCourses(courses.map((course) => course.id === id
         ? {...course, reminder: !data.reminder} : course)
         )
    }
    const [showAddCourse, setShowAddCourse] = useState(false)
    const [courses, setCourses] = useState([])

    return(
        <div>
            <h1>{title}</h1>

            < AddButton onAdd={() => setShowAddCourse(!showAddCourse)} />
            {showAddCourse && <AddCourse onAdd={addCourse}/>}
            {courses.length > 0 ? <Courses courses={courses} 
            onDelete={deleteCourse} onToggle={toggleReminder}/>
            : ('No Courses To Show')}

        </div>
    )
}

CoursePages.defaultProps = {
    title: 'Course management',
}

CoursePages.propTypes = {
    title: PropTypes.string.isRequired,
}

export default CoursePages