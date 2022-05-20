import { useState } from "react"
import { Container} from "react-bootstrap"

const AddCourse = ({onAdd}) => {
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [assume, setAssume] = useState('')
    const [reminder, setReminder] = useState('')
    
    const onSubmit =(e) => {
        e.preventDefault()
        if(!code) {
            alert('Please add a Course Code')
            return
        }
        onAdd({code, name, assume, reminder})
        setCode('')
        setName('')
        setAssume('')
        setReminder(false)
    }
    // const StyledBoxDiv = styled.div`
    // padding: 10px;
    // margin-top: 20px;
    // margin-bottom: 50px;
    // width: 250px;
    // height: 250px;
    // position: relative;
    // `;
    return(
        <Container>
        <form className='formBox' onSubmit={onSubmit}>
            <div>
                <div>
                <label>Course Code</label>
                <input type ='text' placeholder='Course Code'
                value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <div>
                <label>Course Name</label>
                <input type ='text' placeholder='Course Name'
                value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                <label>Assume Knowledage</label>
                <input type ='text' placeholder='Assume Knowledage'
                value={assume} onChange={(e) => setAssume(e.target.value)} />
                </div>
                <div>
                <label>smester available</label>
                <input type ='checkbox'
                checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
                </div>
                <div>
                <input type='submit' value='submit' />
                </div>
            </div>
        </form>
        </Container>
    )
}

export default AddCourse