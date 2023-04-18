![ProjectLogo](frontend/react_frontend/src/images/logo.png)

Django Quiz Manager - quiz data storage application with embedded quiz-player on ReactJS. 

![license](https://img.shields.io/github/license/mihael-tunik/DjangoQuizManager)
![python](https://img.shields.io/badge/python-3.8.10-green)
## About
![image](screenshots/storage_app.png)
This is repository for the QuizManager application.
Main idea of the project is that for simple binary relation:
```
 { 
   "Q1" : "answer_1",
   "Q2" : "answer_2",
   "Q3" : "answer_3", 
   ...
 } 
```
reasonable quiz can be generated by picking right answer and some random subset of alternatives.

Many quizzes behave in this way, including such important examples like word quizzes, alphabet and kanji tests. From the list of questions and right answers in .json format this simple app can construct the quizzes.

## Usage with Nginx
In parent project folder run
```
docker-compose build
docker-compose up
```
The app should be running in [localhost:8080](http://localhost:8080)
and API should be available on [localhost:8080/api/quizzes](http://localhost:8080/api/quizzes)

For manual build check out documentation in /backend/README.md

## Acknowledgements
Backend is revised version of this [tutorial](https://github.com/techiediaries/django-react)
on digital ocean. And frontend is based on my previous project [JSQuiz](https://github.com/mihael-tunik/JSQuiz).
Also big thanks to this [template](https://github.com/Ceci-Aguilera/django-react-nginx-mysql-docker).
