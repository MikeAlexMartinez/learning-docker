# Optimise the nginx image.
FROM debian:buster-slim

RUN apt-get update \
  && apt-get install -y nginx \
  && rm -rf /var/lib/apt/lists/* \
  # change access log to write to stdout
  && rm /var/log/nginx/access.log \
  && ln -s /dev/stdout /var/log/nginx/access.log \
  # change error log to write to stderr
  && rm /var/log/nginx/error.log \
  && ln -s /dev/stderr /var/log/nginx/error.log

COPY ./html/ /var/www/html/

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
