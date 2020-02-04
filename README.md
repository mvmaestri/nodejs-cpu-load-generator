# nodejs-cpu-load-generator

Custom configuration:

- FACTOR: CPU rate desired [0..1]

### How to use 

    FACTOR=0.75 npm start

### Docker

Go to the directory that has your Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

    docker build -t nodejs-cpu-load-generator .

Running the container

    docker run -d nodejs-cpu-load-generator
    docker ps
    docker logs container-id