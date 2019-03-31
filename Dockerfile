FROM debian:buster-slim

RUN apt-get update
RUN apt-get install -y nginx
# delete and create symlink to stdout and stderr files
RUN rm /var/log/nginx/access.log && ln -s /dev/stdout /var/log/nginx/access.log
RUN rm /var/log/nginx/error.log && ln -s /dev/stderr /var/log/nginx/error.log

COPY ./html/ /var/www/html/

EXPOSE 80

# CMD nginx -g 'daemon off;'
# the below is the exec form and is preferred
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
