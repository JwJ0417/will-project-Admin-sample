import Course from './Course'

const Courses = ({courses, onDelete, onToggle}) =>{
    return(
        <>
         {courses.map((course) => (
         <Course key={course.id} course = {course}
         onDelete={onDelete} onToggle={onToggle}/> 
         ))}
        </>
    )
}
export default Courses