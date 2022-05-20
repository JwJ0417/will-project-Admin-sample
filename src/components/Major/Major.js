import MajorButton from '../Button';
import React from 'react';

const Major = ({major, onDelete, onToggle, onAdd}) => {

    return (
        <div id="boxDiv" className={`major ${major.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(major.id)}>
            <div>
            <h3>{major.code}{' '} </h3>
            <div>{major.name}</div>
            </div>
            <div><MajorButton color='blue' text='Edit' onClick={() => onAdd(major.id)} />
                <MajorButton color='red' text='Delete' onClick={() => onDelete(major.id)} /></div>
        </div>
    );
};

export default Major;