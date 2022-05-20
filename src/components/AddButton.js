import Button from './Button'

const AddButton = ({onAdd}) =>{
    return(
        <div>
        <Button color='gray' text='Add New Course' onClick={onAdd}/>
        </div>
    )
}

export default AddButton