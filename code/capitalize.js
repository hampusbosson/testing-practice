function capitalize(string) {
    const firstToUpper = string.charAt(0).toUpperCase();
    const restOfWord = string.slice(1, string.length); 
    
    return firstToUpper+restOfWord; 
}

module.exports = capitalize; 