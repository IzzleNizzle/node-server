// This is how we solved the first puzzle
if (process.argv[2] === process.argv[3]) {
    console.log('these two are equal');
} else {
    console.log('not equal')
}

// Manju and i took it further to specify for int's - This way if you compare 2 and 02 it will be equal
if (parseInt(process.argv[2]) === parseInt(process.argv[3])) {
    console.log('these two are equal');
} else {
    console.log('not equal')
}