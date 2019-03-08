var fs = require('fs');
var colors = require('colors');

fs.readdir('.', 'utf-8', function(err, data)  {
    if (err) throw err;
    console.log('Zawartość katalogu głównego .: Zapisana'.red);
    fs.writeFile('./tekst-dir.txt', data, function(err) {
        if (err) console.log(err);  
        console.log('Zapisano!'.yellow); 
    })
    
});