![ProjectLogo](frontend/src/images/logo.png)

Django Quiz Manager

![license](https://img.shields.io/github/license/mihael-tunik/DjangoQuizManager)
![python](https://img.shields.io/badge/python-3.8.10-green)
## About
![image](screenshots/storage_app.png)
This is repository for the QuizManager application.
Main idea of the project is that most of the quizzes are based on simple binary relation:
```
 { 
   A : B,
   C : D,
   E : F, 
   ...
 } 
```
Then reasonable quiz can be generated by picking right answer and some random subset of alternatives
```
 {
   A? : {B, F},
   C? : {B, D},
   E? : {D, F},
   ...
 }
```
Many quizzes behave in this way, including such important examples like word quizzes, alphabet and kanji tests.
From the list of questions and right answers in .json format this simple app can construct the quizzes.

## Usage
Check out documentation in /backend/README.md

## Acknowledgements
Backend is revised version of this [tutorial](https://github.com/techiediaries/django-react)
on digital ocean. And frontend is based on my previous project [JSQuiz](https://github.com/mihael-tunik/JSQuiz).
