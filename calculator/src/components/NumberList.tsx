import React from 'react';

interface NumberListProps {
    numbers: number[];
}

const NumberList: React.FC<NumberListProps> = ({ numbers }) => {
    return (
        <div>
            <h3>Stored Numbers:</h3>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    );
};

export default NumberList;