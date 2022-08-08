/*jshint strict:false */

(function() {
    'use strict';
    // this function is strict...
}());

// Setting up our app requirements

const open = require('open');
const express = require('express');
const app = express();
const Server = require('http').Server;
const server = new Server(app);
const path = require('path');
const port = 5000;

// Setting up our port

server.listen(port, () => {
    const url = 'http://localhost:5000'
    console.log(`Server at ${url}\n`)

    // opens the url in the default browser 
    open(
        url,
        // {app: 'firefox'}
    );

    start()
})
 
// Configuiring simple express routes
// getDir() function is used here along with package.json.pkg.assets

app.use('/', express.static(getDir() + '/views'));

app.get('/', function(req, res) {
    res.sendFile(getDir() + '/views/index.html');
});


// Using a function to set default app path
function getDir() {
    if (process.pkg) {
        return path.resolve(process.execPath + "/..");
    } else {
        return path.join(require.main ? require.main.path : process.cwd());
    }
}



function start() {
// Download AnyWave
// grab the appropriate version for this hardware
console.log('AnyWave has been installed! (todo)')

// Place the anywave_hed plugin (from Github) into the appropriate folder for this system
console.log('anywave_hed has been installed! (todo) This will allow users to annotate BIDS datasets with HED tags.')

// Place the anywave_stream plugin (from Github) into the appropriate folder for this system
console.log('anywave_gen has been installed! (todo) This will stream your edits to the GEN server.')

// configure python venv
console.log('python venv has been configured! (todo)')

// open anywave programmatically in devmode
console.log('AnyWave has been opened in developer mode! (todo)')

// programmatically load the dataset into anywave and specify venv
console.log('dataset has been loaded (todo)')
console.log('venv has been specified (todo)')
console.log('\nGEN is ready for your annotations!')

}