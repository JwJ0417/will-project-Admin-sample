import React from 'react';
import Major from './Major';

const Majors = ({majors, onDelete, onToggle}) => {
    return (
        <>
         {majors.map((major) => (
         <Major key={major.id} major = {major}
         onDelete={onDelete} onToggle={onToggle}/> 
         ))}
        </>
    );
};

export default Majors;