/*jshint strict:false */

(function() {
    'use strict';
    // this function is strict...
}());

// Setting up our app requirements
// anywave installation
const extractDmg = require("extract-dmg");
const os = require('os')
const { exec } = require("child_process");

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


function installAnywave () {

    const res = new Promise(async (resolve, reject) => {
    console.log('Starting to install AnyWave...')
    // grab the appropriate version of Anywave for this hardware
    const platform = os.platform()
    switch (platform) {
        case 'win32':
            // http://meg.univ-amu.fr/AnyWave/AnyWave_win64.zip
            fs.createReadStream('./anywave/AnyWave_win64.zip').pipe(unzip.Extract({ path: './anywave/extracted' }));

            exec("./anywave/extracted/mysetup.exe", (error, stdout, stderr) => {
                if (error) {
                    reject(`error: ${error.message}`)
                    return;
                }
                if (stderr) {
                    reject(`stderr: ${stderr}`)
                    return;
                }
                console.log(`${stdout}`);
                resolve(true)
            });
            // run setup.exe
        case 'linux':
            console.error('[anywave_gen] Error: Linux OS not supported...')
            // chmod 755 install_AnyWave.run
            // sudo ./install_AnyWave.run
        case 'darwin':
            // https://meg.univ-amu.fr/AnyWave/AnyWave.dmg
            await extractDmg("./anywave/AnyWave.dmg", "./anywave/extracted"); // Extract and get contents
            exec("installer -pkg ./anywave/extracted/Anywave.pkg -target CurrentUserHomeDirectory", (error, stdout, stderr) => {
                if (error) {
                    reject(`error: ${error.message}`)
                    return;
                }
                if (stderr) {
                    reject(`stderr: ${stderr}`)
                    return;
                }
                console.log(`${stdout}`);
                resolve(true)
            });
    }
})
console.log(`Anywave has been installed!`)
return res
}

async function start() {


    const result = await installAnywave()

    // Place the anywave_hed plugin (from Github) into the appropriate folder for this system
    console.log('anywave_hed has been installed! (todo) This will allow users to annotate BIDS datasets with HED tags.')

    // configure python venv
    console.log('python venv has been configured! (todo)')

    // open anywave programmatically in devmode
    console.log('AnyWave has been opened in developer mode! (todo)')

    // programmatically load the dataset into anywave and specify venv
    console.log('dataset has been loaded (todo)')
    console.log('venv has been specified (todo)')
    console.log('\nGEN is ready for your annotations!')

    // press a button on the UI to send data to our NAS!
    console.log('Sending data to the GEN NAS!')


}