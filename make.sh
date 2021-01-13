#!/bin/bash

cd PhysX/physx/compiler/emscripten-release/
make -j8
cp physx-js.wasm.js ../../../../dist
cp physx-js.wasm.wasm ../../../../dist
