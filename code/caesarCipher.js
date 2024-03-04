const caesarCipher = (str, shift) => {
    // Adjust shift to handle negative shifts and shifts larger than 26
    shift = shift % 26;
    if (shift < 0) {
        shift += 26;
    }

    const shiftLetters = (shift) => {
        return Array.from({length: 26}, (_, i) => 
            String.fromCharCode(((i + shift) % 26) + 65) // Uppercase
        ).concat(
            Array.from({length: 26}, (_, i) => 
                String.fromCharCode(((i + shift) % 26) + 97) // Lowercase
            )
        );
    };

    const cipherString = (str) => {
        const shiftedAlphabet = shiftLetters(shift);
        return str.split('').map(char => {
            const isUpperCase = char >= 'A' && char <= 'Z';
            const isLowerCase = char >= 'a' && char <= 'z';
            const baseCharCode = isUpperCase ? 65 : 97;
            const index = char.charCodeAt(0) - baseCharCode;

            if (isUpperCase || isLowerCase) {
                return shiftedAlphabet[index + (isUpperCase ? 0 : 26)]; // Adjust index for lowercase
            } else {
                return char; // Non-alphabetical characters are unchanged
            }
        }).join('');
    };

    return cipherString(str);
};

module.exports = caesarCipher;