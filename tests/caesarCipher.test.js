const caesarCipher = require('../code/caesarCipher')

describe('Caesar Cipher', () => {
    test('works with one letter', () => {
        expect(caesarCipher('a', 3)).toBe('d');
    });
    test('works with letter z', () => {
        expect(caesarCipher('z', 3)).toBe('c');
    });
    test('works with negative value', () => {
        expect(caesarCipher('z', -3)).toBe('w');
    });
    test('works with negative value first letter', () => {
        expect(caesarCipher('a', -3)).toBe('x');
    });
    test('works with full word', () => {
        expect(caesarCipher('hello world', 15)).toBe('wtaad ldgas');
    });
    
});
