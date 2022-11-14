# anywave_gen
An AnyWave distribution package for the Global EEG Norms (GEN) project

## Future Work
- Finish the todo items noted in the comments of [index.js](./index.js)
    - Test installation of AnyWave
    - Automatically configure a Python venv
    - Open AnyWave automatically in developer mode
    - Specify the correct venv
    - Load the appropriate dataset from a remote NAS
    - Convert annotations to the BIDS format using [anywave_hed](https://github.com/garrettmflynn/anywave_hed)
    - Send annotations to the remote NAS when AnyWave is closed
- Package the latest version of AnyWave for Mac and Windows to be distributed with the executable files.
- Update the [base html page](./views/index.html) with complete instructions that are specific to the packaged GEN project.

 ## Notes
 `xdg-open` must be distributed with the executable files to allow the browser to be automatically opened.

 Assets are not packaged in the executable files, so we have to keep them in the base of the GitHub repo.
