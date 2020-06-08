/**
 * Roman numeral values
 */
const VALUES = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
};

/**
 * Function to convert numeral to value
 */
export default function decode(numerals: string): number {
    let preNum: number;

    return numerals
        .split('')
        .map(numeral => {
            let num = VALUES[numeral];
            let result = preNum < num ? num - preNum * 2 : num;
            preNum = num;
            return result;
        })
        .reduce((a, b) => a + b, 0);
}
