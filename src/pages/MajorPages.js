import React, { useEffect, useState } from 'react';
import MajorAddButton from '../components/AddButton';
import AddMajor from '../components/Major/AddMajor';
import Majors from '../components/Major/Majors';
import PropTypes from 'prop-types'

const MajorPages = ({title}) => {
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
    //Edit Courses

    //Add Degree
    const addMajor = async (major) => {
        const res = await fetch('http://localhost:5000/majors', {
            method: 'POST',
            headers: {
                'Content-type':  'application/json',
            },
            body: JSON.stringify(major),
        })

        const data = await res.json()

        setMajors([...majors, data])
    }
    // Delete Courses
    const deleteMajor = async (id) => {
        await fetch(`http://localhost:5000/majors/${id}`,{
            method: 'DELETE',
        })
        setMajors(majors.filter(major => major.id !== id))
    }

    const [showAddMajor, setShowAddMajor] = useState(false)
    const [majors, setMajors] = useState([])
    return (
        <div className='box'>
            <h1>{title}</h1>
            <MajorAddButton onAdd={() => setShowAddMajor(!showAddMajor)} />
            {showAddMajor && <AddMajor onAdd={addMajor}/>}
            {majors.length > 0 ? <Majors majors={majors} 
            onDelete={deleteMajor}/> 
            : ('No Courses To Show')}

        </div>
    )
}

MajorPages.defaultProps = {
    title: 'Major management',
}

MajorPages.propTypes = {
    title: PropTypes.string.isRequired,
}

export default MajorPages;