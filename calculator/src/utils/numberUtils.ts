export const calculateAverage = (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return parseFloat((sum / numbers.length).toFixed(2));
};

export const manageWindowSize = (currentNumbers: number[], newNumber: number, windowSize: number): number[] => {
    const uniqueNumbers = Array.from(new Set([...currentNumbers, newNumber]));
    if (uniqueNumbers.length > windowSize) {
        uniqueNumbers.shift(); // Remove the oldest number
    }
    return uniqueNumbers;
};