FROM python:3.8.13-slim-buster
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY . .
RUN pip install -r requirements.txt
EXPOSE 8000
