#!/bin/sh
export JAVA_OPTS="-XX:MaxPermSize=512m -Xms128m -Xmx1024m"
export CATALINA_PID=./apache-tomcat/temp/catalina.pid

cd ..

echo "************************************************************"
echo "Starting publishing receiver..."
echo "************************************************************"
cd ./crafter-deployer
sh ./start-deploy-agent.sh
cd ..

echo "************************************************************"
echo "Starting Tomcat..."
echo "************************************************************"
sh ./apache-tomcat/bin/startup.sh

cd ./bin

echo "************************************************************"
echo "Tailing catalina.out..."
echo "************************************************************"
tail -f ../apache-tomcat/logs/catalina.out
