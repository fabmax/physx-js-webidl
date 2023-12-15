#!/bin/bash

# make sure packman is up-to-date to avoid failing build:
# https://github.com/NVIDIA-Omniverse/PhysX/discussions/230
./PhysX/physx/buildtools/packman/packman update -y

cd ./PhysX/physx
rm -rf compiler/emscripten-*
./generate_projects.sh emscripten
