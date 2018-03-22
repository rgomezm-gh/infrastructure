# Define image
# pulli  from sameersbn/ubuntu:16.04.20180124
FROM rgomezm/flidb1
MAINTAINER rgomezm@docker.com

# Settings for the imaeg
WORKDIR /opt/db
RUN mkdir -p /opt/db

# Storage
USER salsa
RUN mkdir /opt/db/data /opt/db/code
VOLUME /opt/db/data
ADD ./codedb /opt/db/data/code

# Install mysql 
ENV MYSQL_USER=mysql \
    MYSQL_DATA_DIR=/var/lib/mysql \
    MYSQL_RUN_DIR=/run/mysqld \
    MYSQL_LOG_DIR=/var/log/mysql
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server \
 && rm -rf ${MYSQL_DATA_DIR} \
 && rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /sbin/entrypoint.sh
RUN chmod 755 /sbin/entrypoint.sh

EXPOSE 3306/tcp
VOLUME ["${MYSQL_DATA_DIR}", "${MYSQL_RUN_DIR}"]
ENTRYPOINT ["/sbin/entrypoint.sh"]
CMD ["/usr/bin/mysqld_safe"]

