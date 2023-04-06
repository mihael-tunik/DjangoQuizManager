## Requirements
Python >= 3.8.10 (see requirements.txt);
NodeJS >= 18.14.2;

## Manual build
Run Django API on localhost (it is a good practice to put Django SECRET_KEY value in .env file):
```
nano .env
python3 manage.py runserver
```
You can use default db.sqlite3 file

![image](screenshots/db_view.png)

or you also may need to migrate first if you want to use your own database:
```
rm db.sqlite3
python3 manage.py migrate
```
- Then open ./frontend folder and run:
```
npm start
```

## Build with docker-compose
In parent project folder run
```
docker-compose build
docker-compose up
```
![image](screenshots/jlpt-5.png)
Congratulations, the app should be running in [localhost:3000](http://localhost:3000)
