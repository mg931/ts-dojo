import EndMatcher from '../src/EndMatcher';

describe('End Matcher Tests', () => {
    it('When numeral string provided can sum', () => {
        expect(EndMatcher('abcde', 'cde')).toBeTruthy();
        expect(EndMatcher('abcde', 'abc')).toBeFalsy();
        expect(EndMatcher('abc', '')).toBeTruthy();
    });
});
