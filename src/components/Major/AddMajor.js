import { useState } from 'react';
import { Container } from 'react-bootstrap';

const AddMajor = ({onAdd}) => {
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    
    const onSubmit =(e) => {
        e.preventDefault()
        if(!code) {
            alert('Please add a Major Code')
            return
        }
        onAdd({code, name})
        setCode('')
        setName('')
    }
    return(
        <Container>
        <form className='formBox' onSubmit={onSubmit}>
            <div>
                <div>
                <label>Major Code</label>
                <input type ='text' placeholder='Major Code'
                value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <div>
                <label>Major Name</label>
                <input type ='text' placeholder='Major Name'
                value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                <input type='submit' value='submit' />
                </div>
            </div>
        </form>
        </Container>
    )
}

export default AddMajor;