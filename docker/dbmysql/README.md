# Table of Contents

- [Introduction](#introduction)
- [Contributing](#contributing)
- [Changelog](Changelog.md)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Data Store](#data-store)
- [Creating User and Database at Launch](#creating-user-and-database-at-launch)
- [Creating remote user with privileged access](#creating-remote-user-with-privileged-access)
- [Shell Access](#shell-access)
- [Upgrading](#upgrading)

# Introduction

Dockerfile to build a MySQL container image based on an Ubuntu image

# Contributing

Report any issues or input [Issues](https://github.com/rgomezm-gh/docker/dbmysql/issues) - Thanks !

# Installation

Automated builds of the image are available on [Dockerhub](https://hub.docker.com/u/rgomezm/) and is the recommended method of installation.

```bash
docker pull rgomezm/dbmysql:latest
```
Alternately you can build the image yourself.

```bash
docker build -t rgomezm/dbmysql github.com/rgomezm-gh/docker/dbmysql
```

# Quick Start

Run the dbmysql image

```bash
docker run --name dbmysql -d rgomezm/dbmysql:latest
```

You can access the mysql server as the root user using the following command:

```bash
docker run -it --rm --volumes-from=dbmysql rgomezm/dbmysql:latest mysql -uroot
```

# Data Store
You should mount a volume at `/var/lib/mysql`.


```bash
docker run --name dbmysql -d \
  -v /opt/db/data:/var/lib/mysql rgomezm/dbmysql:latest
```
This will make sure that the data stored in the database is not lost when the image is stopped and started again.

# Creating User and Database at Launch

>```bash
>docker run -it --rm --volumes-from=dbmysql rgomezm/dbmysql \
>  mysql -uroot -e "GRANT ALL PRIVILEGES on *.* TO 'username'@'localhost' IDENTIFIED BY 'username' WITH GRANT OPTION;"
>```

To create a new database specify the database name in the `DB_NAME` variable. The following command creates a new database named *dbname*:

```bash
docker run --name mysql -d \
  -e 'DB_NAME=dbname' rgomezm/dbmysql:latest
```

You may also specify a comma separated list of database names in the `DB_NAME` variable. The following command creates two new databases named *dbname1* and *dbname2*

```bash
docker run --name dbmysql -d \
-e 'DB_NAME=dbname1,dbname2' rgomezm/dbmysql:latest
```

To create a new user you should specify the `DB_USER` and `DB_PASS` variables.

```bash
docker run --name mysql -d \
  -e 'DB_USER=dbuser' -e 'DB_PASS=dbpass' -e 'DB_NAME=dbname' \
  rgomezm/dbmysql:latest
```

The above command will create a user *dbuser* with the password *dbpass* and will also create a database named *dbname*. The *dbuser* user will have full/remote access to the database.

# Creating remote user with privileged access

To create a remote user with privileged access, you need to specify the `DB_REMOTE_ROOT_NAME` and `DB_REMOTE_ROOT_PASS` variables, eg.

```bash
docker run --name dbmysql -d \
  -e 'DB_REMOTE_ROOT_NAME=root' -e 'DB_REMOTE_ROOT_PASS=secretpassword' \
  rgomezm/dbmysql:latest
```

Optionally you can specify the `DB_REMOTE_ROOT_HOST` variable to define the address space within which remote access should be permitted. This defaults to `172.17.0.1` and should suffice for most cases.

Situations that would require you to override the default `DB_REMOTE_ROOT_HOST` setting are:

- If you have changed the ip address of the `docker0` interface
- If you are using host networking, i.e. `--net=host`, etc.

# Shell Access

For debugging and maintenance purposes you may want access the containers shell. If you are using docker version `1.3.0` or higher you can access a running containers shell using `docker exec` command.

```bash
docker exec -it dbmysql /bin/bash
```

# Upgrading

To upgrade to newer releases, simply follow this 3 step upgrade procedure.

- **Step 1**: Stop the currently running image

```bash
docker stop dbmysql
```

- **Step 2**: Update the docker image.

```bash
docker pull rgomezm/dbmysql:latest
```

- **Step 3**: Start the image

```bash
docker run --name dbmysql -d [OPTIONS] rgomezm/dbmysql:latest
```
