docker build - < Dockerfile_app
docker pull mongo
docker run --name mongoDB -d mongo:latest