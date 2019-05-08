# this tells us to base this container
# on the latest alpine image
FROM alpine:latest

# this updates alpines package manager
# adds bash, and removes unnecessary temp files
# to reduce the layer size
# using a backslash to make the line more
# readable
RUN apk update \
  && apk add bash \
  && rm -rf /var/cache/apk*

ENV PS1="\h:\w# " PS2=">> "

# start bash shell
CMD bash