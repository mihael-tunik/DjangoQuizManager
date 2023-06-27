FROM python:3.8.13-slim-buster

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /usr/src/app
COPY requirements.txt .

RUN pip install -r requirements.txt
COPY ./django_backend .

RUN mkdir static
RUN mkdir static/rest_framework

RUN python manage.py collectstatic -link --noinput

EXPOSE 8000
