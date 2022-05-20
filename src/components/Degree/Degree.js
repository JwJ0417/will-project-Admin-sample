import DegreeButton from '../Button';
import React from 'react';

const Degree = ({degree, onAdd, onDelete,onToggle}) => {
    return (
        <div id="boxDiv" className={`degree ${degree.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(degree.id)}>
            <div>
            <h3>{degree.code}{' '} </h3>
            <div>{degree.name}</div>
            </div>
            <div><DegreeButton color='blue' text='Edit' onClick={() => onAdd(degree.id)} />
            <DegreeButton color='red' text='Delete' onClick={() => onDelete(degree.id)} /></div>
        </div>
    );
};

export default Degree;