FROM rgomezm/webapp
MAINTAINER rgomezm@docker.com
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y -q python-all python-pip 
RUN apt-get -y update 
WORKDIR /opt/webapp
RUN mkdir -p /opt/webapp
RUN mkdir -p /opt/webapp/static  /opt/webapp/templates
ENV COUNTRY=Co
ADD ./webapp/requirements.txt /tmp/requirements.txt
ADD ./webapp/templates/* /opt/webapp/templates/
ADD ./webapp/static/* /opt/webapp/static/
RUN pip install -qr /tmp/requirements.txt
ADD ./webapp /opt/webapp/
EXPOSE 5000
CMD ["python", "appfli-v1.py"]
#CMD ["python", "app.py"]
