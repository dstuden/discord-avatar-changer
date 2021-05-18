const fs = require('fs');

module.exports.line = function getLine(filename) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split('\n');
    return lines[Math.floor(Math.random() * lines.length)];
}
