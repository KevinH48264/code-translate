# Code Translate
This is the code repo for Code Translate | June 2021


## Usage  
```bash
# Activate virtual environment
cd code-translate
venv\Scripts\activate # for Windows

deactivate # to deactivate

# Run and develop app locally, use 2 terminals
cd code-translate
yarn start # start frontend
yarn start-server # start server, runs 'flask run'
```


### Run React and Flask App Locally
Open 2 terminals, and run the following commands in each:  
Run the frontend server: 'yarn start'  
Run the backend server: 'yarn start-server' or 'flask run'  
Both automatically update upon saved changes to relevant files.


### Deploy to Heroku
```bash
npm run build # create the build file

heroku login # sign into heroku
heroku git:remote -a codetranslateapp # codetranslateapp is the dev server, code-translate-app / code-translate is the production server

git add .
git commit -m <message>
git push heroku main # push main to heroku
git push heroku <branchname>:main # push a branch to heroku
```


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