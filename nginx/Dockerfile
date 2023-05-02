ARG SSL_mode

FROM nginx:latest as nginx_ssl 

ONBUILD RUN rm /etc/nginx/conf.d/default.conf
ONBUILD COPY nginx_ssl.conf /etc/nginx/conf.d

ONBUILD COPY nginx-selfsigned.crt /etc/nginx/certs/nginx-selfsigned.crt
ONBUILD COPY nginx-selfsigned.key /etc/nginx/certs/nginx-selfsigned.key
ONBUILD COPY dhparam.pem /etc/nginx/certs/dhparam.pem

FROM nginx:latest as nginx_no_ssl 

ONBUILD RUN rm /etc/nginx/conf.d/default.conf
ONBUILD COPY nginx.conf /etc/nginx/conf.d

FROM nginx_${SSL_mode}

WORKDIR /usr/src/app
