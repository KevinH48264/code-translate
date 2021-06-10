# Code Translate
This is the code repo for Code Translate | June 2021


## Usage  
To activate virtual environment
```bash
cd code-translate
venv\Scripts\activate # for Windows
```


### Run React and Flask App Locally
Open 2 terminals, and run the following commands in each:  
Run the frontend server: 'yarn start'  
Run the backend server: 'yarn start-server'  


### Deploy to Heroku
```bash
npm run build # create the build file

git add .
git commit -m <message>
git push heroku main # push main to heroku
git push heroku <branchname>:main # push a branch to heroku
```


## TO DO
Set up
- Need to transfer react-flask-app to main VM directory
- Need to merge github repo with heroku git repo
- Create a frontend folder to put all the src folders in, or rename src to frontend

## File Structure
```bash
code-translate # Heroku requires package.json to be in the root directory. This ideal file structure does not work.
|__frontend
    |__build
    |__public
    |__scripts
    |__src
    |__package.json
    |__node_modules
    |__yarn.lock
|__server
|__examples
|__venv
.gitignore
Procfile
README.md
requirements.txt
app.py
```