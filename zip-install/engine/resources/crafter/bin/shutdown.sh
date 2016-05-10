#!/bin/sh
export CATALINA_PID=./apache-tomcat/temp/catalina.pid

SECS_BEFORE_KILL=10

cd ..

echo "************************************************************"
echo "Stopping Tomcat..."
echo "************************************************************"
sh ./apache-tomcat/bin/shutdown.sh $SECS_BEFORE_KILL -force

echo "************************************************************"
echo "Stopping publishing receiver..."
echo "************************************************************"
cd ./crafter-deployer
sh ./stop-deploy-agent.sh
cd ..

cd ./bin
