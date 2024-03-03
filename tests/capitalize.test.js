const capitalize = require('../code/capitalize'); 

test('string returns capitalized', () => {
    expect(capitalize('jason')).toBe('Jason');
});