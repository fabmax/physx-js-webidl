#!/bin/bash

cd ./PhysX/physx
rm -rf compiler/emscripten-*
./generate_projects.sh emscripten
