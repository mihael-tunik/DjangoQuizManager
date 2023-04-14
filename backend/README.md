## Requirements
Python >= 3.8.10 (see requirements.txt);
NodeJS >= 18.14.2;

## Manual build
Run Django API on localhost (don't forget to put Django SECRET_KEY value in .env file):
```
python3 manage.py runserver
```
or you also can use gunicorn
```
gunicorn QuizManager.wsgi:application --bind 127.0.0.1:8000
```
You can use default db.sqlite3 file

![image](../screenshots/db_view.png)

or you also may need to migrate first if you want to delete default and use your own database:
```
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
![image](../screenshots/jlpt-5.png)
Congratulations, the app should be running in [localhost:3000](http://localhost:3000)
and API should be available on [localhost:8000/api/quizzes](http://localhost:8000/api/quizzes)
