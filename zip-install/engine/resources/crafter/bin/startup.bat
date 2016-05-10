@echo off
setlocal

if "%JAVA_HOME%" == "" goto NoJavaHome
if not exist "%JAVA_HOME%\bin\java.exe" goto InvalidJavaHome
goto DoStart

:NoJavaHome
echo Error: JAVA_HOME environment variable is not set.
goto End

:InvalidJavaHome
echo Error: JAVA_HOME '%JAVA_HOME%' does not contain a valid Java installation.
goto End

:DoStart
set JAVA_OPTS=-XX:MaxPermSize=512m -Xms128m -Xmx1024m
set CATALINA_HOME=.\apache-tomcat

cd ..
echo Starting Tomcat...
call .\apache-tomcat\bin\startup.bat

cd .\crafter-deployer
echo Starting the publishing receiver...
call .\start-deploy-agent.bat

cd ..\bin

:End
endlocal