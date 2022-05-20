import React from 'react';
import PropTypes from 'prop-types'
import AddDegreeButton from '../components/AddButton'
import { useState, useEffect } from "react"
import Degrees from '../components/Degree/Degrees';
import AddDegree from '../components/Degree/AddDegree';

const DegreePages = ({title}) => {
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
        //Edit Courses
    
        //Add Degree
        const addDegree = async (course) => {
            const res = await fetch('http://localhost:5000/degrees', {
                method: 'POST',
                headers: {
                    'Content-type':  'application/json',
                },
                body: JSON.stringify(course),
            })
    
            const data = await res.json()
    
            setDegrees([...degrees, data])
        }
        // Delete Courses
        const deleteDegree = async (id) => {
            await fetch(`http://localhost:5000/degrees/${id}`,{
                method: 'DELETE',
            })
            setDegrees(degrees.filter(degree => degree.id !== id))
        }

        const [showAddDegree, setShowAddDegree] = useState(false)
        const [degrees, setDegrees] = useState([])
    
        return(
            <div className='box'>
                <h1>{title}</h1>
    
                <AddDegreeButton onAdd={() => setShowAddDegree(!showAddDegree)}/>
                {showAddDegree && <AddDegree onAdd={addDegree}/>}
                {degrees.length > 0 ? <Degrees degrees={degrees} 
                onDelete={deleteDegree}/> 
                : ('No Degrees To Show')}
            </div>
        )
}

DegreePages.defaultProps = {
    title: 'Degree management',
}

DegreePages.propTypes = {
    title: PropTypes.string.isRequired,
}


export default DegreePages;