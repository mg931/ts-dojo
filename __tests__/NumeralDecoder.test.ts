import NumeralDecoder from '../src/NumeralDecoder';

describe('Numeral Decoder Tests', () => {
    it('When numeral string provided can sum', () => {
        expect(NumeralDecoder('XX')).toEqual(20);
    });

    it('When numeral string provided can subtract', () => {
        expect(NumeralDecoder('IV')).toEqual(4);
    });

    it('When numerals provided can subtract and sum', () => {
        expect(NumeralDecoder('XLIV')).toEqual(44);
    });

    it('When numerals provided can subtract and sum', () => {
        expect(NumeralDecoder('XCIX')).toEqual(99);
    });
});
