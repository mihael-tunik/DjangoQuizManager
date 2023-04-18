FROM python:3.8.13-slim-buster
ENV PYTHONUNBUFFERED=1
WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install -r requirements.txt
COPY ./django_backend .

EXPOSE 8000
