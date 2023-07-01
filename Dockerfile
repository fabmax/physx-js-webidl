FROM emscripten/emsdk:3.1.42

RUN apt-get update
RUN apt-get install python3 -y
