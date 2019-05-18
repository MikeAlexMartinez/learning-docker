#!/usr/bin/env bash

envsubst '$PROXY_PROTOCOL,$PROXY_UPSTREAM' < /etc/nginx/sites-available/default.template > /etc/nginx/sites-available/default
# use exec so that we can still use ctrl+c
exec nginx -g 'daemon off;'