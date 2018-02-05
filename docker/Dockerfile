FROM rgomezm/webapp
MAINTAINER rgomezm@docker.com
RUN apt-get update
# RUN DEBIAN_FRONTEND=noninteractive apt-get install -y -q python-all python-pip 

WORKDIR /opt/webapp
RUN mkdir -p /opt/webapp
ADD ./webapp/requirements.txt /tmp/requirements.txt
RUN pip install -qr /tmp/requirements.txt
ADD ./webapp /opt/webapp/
EXPOSE 4000
CMD ["python", "app.py"]
