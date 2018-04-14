switch (process.argv[2]) {
    case "add":
        // Add's the latest inputs
        console.log((parseFloat(process.argv[3]) + parseFloat(process.argv[4])));
        break;
    case 'subtract':
        // Subtract's the latest inputs
        console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
        break;
    case 'multiply':
        // multiply's the latest inputs
        console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]));
        break;
    case 'divide':
        // divide's the latest inputs
        console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
        break;
    case 'remainder':
        // remainder's the latest inputs
        console.log(parseFloat(process.argv[3]) % parseFloat(process.argv[4]));
        break;
    case 'exp':
        //provides exponent of two variables
        console.log(Math.pow(parseFloat(process.argv[3]), parseFloat(process.argv[4])))
        break;
    case 'algebra':
        //provides output for algabraic equation
        // use case : calculator.js algebra 4x+2=10... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)
        var string = process.argv[3];

        var right1 = string.split('x');
        var left2 = right1[1].split('+');
        var left3 = left2[1].split('=');
        var right = left3[1];        
        var left1 = left3[0];        
        var leftX = right1[0];        
        var solution;
        solution = right - left1;
        solution = solution / leftX;
        console.log(solution);
        break;
}