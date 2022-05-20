import Degree from './Degree';

const Degrees = ({degrees, onDelete, onToggle}) => {
    return (
        <>
         {degrees.map((degree) => (
         <Degree key={degree.id} degree = {degree}
         onDelete={onDelete} onToggle={onToggle}/> 
         ))}
        </>
    );
};

export default Degrees;