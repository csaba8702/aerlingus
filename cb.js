let calc = function(text, callback) {
    return callback('üzeneted: ' + text);
}

console.log( calc('hello', function(c){return c;} ) );