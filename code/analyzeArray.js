const analyzeArray = arr => {
    const average = () => {
        let sum = 0; 
        arr.forEach(element => {
            sum += element; 
        });

        return sum / arr.length; 
    }

    const min = () => {
        let min = arr[0]; 
        arr.forEach(element => {
            if (element < min) 
                min = element; 
        });

        return min; 
    }

    const max = () => {
        let max = 0; 
        arr.forEach(element => {
            if (element > max)
                max = element; 
        });

        return max; 
    }

    const length = () => {
        return arr.length; 
    }

    return {
        average: average(),
        min: min(),
        max: max(),
        length: length()
    };
}

module.exports = analyzeArray;