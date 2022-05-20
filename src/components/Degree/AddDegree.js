import { useState } from 'react';
import { Container } from 'react-bootstrap';

const AddDegree = ({onAdd}) => {
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    
    const onSubmit =(e) => {
        e.preventDefault()
        if(!code) {
            alert('Please add a Degree Code')
            return
        }
        onAdd({code, name})
        setCode('')
        setName('')
    }

    return (
    <Container>
        <form className='formBox' onSubmit={onSubmit}>
            <div>
                <div>
                <label>Degree Code</label>
                <input type ='text' placeholder='Degree Code'
                value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <div>
                <label>Degree Name</label>
                <input type ='text' placeholder='Degree Name'
                value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                <input type='submit' value='submit' />
                </div>
            </div>
        </form>
    </Container>
    );
};

export default AddDegree;