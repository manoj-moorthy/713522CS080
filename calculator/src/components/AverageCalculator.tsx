import React, { useState } from 'react';
import axios from 'axios';
import NumberList from './NumberList';

const AverageCalculator: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [average, setAverage] = useState<number | null>(null);
    const windowSize = 10;

    const fetchNumbers = async (numberId: string) => {
        try {
            const response = await axios.get(`http://localhost:9876/numbers/${numberId}`, { timeout: 500 });
            const newNumber = response.data.numbers;

            if (newNumber) {
                setNumbers(prevNumbers => {
                    const uniqueNumbers = Array.from(new Set([...prevNumbers, ...newNumber]));
                    if (uniqueNumbers.length > windowSize) {
                        uniqueNumbers.shift(); // Remove the oldest number
                    }
                    return uniqueNumbers;
                });
            }
        } catch (error) {
            console.error('Error fetching numbers:', error);
        }
    };

    const calculateAverage = () => {
        if (numbers.length > 0) {
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            setAverage(sum / numbers.length);
        } else {
            setAverage(null);
        }
    };

    React.useEffect(() => {
        calculateAverage();
    }, [numbers]);

    return (
        <div>
            <h1>Average Calculator</h1>
            <button onClick={() => fetchNumbers('e')}>Fetch Even Numbers</button>
            <button onClick={() => fetchNumbers('p')}>Fetch Prime Numbers</button>
            <button onClick={() => fetchNumbers('f')}>Fetch Fibonacci Numbers</button>
            <button onClick={() => fetchNumbers('r')}>Fetch Random Numbers</button>
            <NumberList numbers={numbers} />
            {average !== null && <h2>Average: {average.toFixed(2)}</h2>}
        </div>
    );
};

export default AverageCalculator;