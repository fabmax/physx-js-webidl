#!/bin/bash

cd ./PhysX4/physx
rm -rf compiler/emscripten-*
./generate_projects.sh emscripten
