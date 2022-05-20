import Button from "../Button"

const Course = ({course, onDelete, onToggle, onAdd}) =>{

    
    return(
        <div id="boxDiv" className={`course ${course.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(course.id)}>
            <div>
            <h3>{course.code}{' '} </h3>
            <div>{course.name}</div>
            <div>{course.assume}</div>
            </div>
            <div><Button color='blue' text=' Edit ' onClick={() => onAdd(course.id)} />
            <Button color='red' text='Delete' onClick={() => onDelete(course.id)} /></div>
        </div>
    )
}
export default Course