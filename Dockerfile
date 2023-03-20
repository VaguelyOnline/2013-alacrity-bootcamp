FROM nginx

COPY ./* /usr/share/nginx/html/

COPY index.html /usr/share/nginx/html/

EXPOSE 80
