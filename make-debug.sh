#!/bin/bash

cd PhysX/physx/compiler/emscripten-debug/
rm sdk_source_bin/physx-js-webidl.*
make -j8

mkdir -p ../../../../dist-debug/
cp sdk_source_bin/physx-js-webidl.js ../../../../dist-debug/
cp sdk_source_bin/physx-js-webidl.wasm ../../../../dist-debug/

cd /src/types
cp physx-js-webidl.d.ts ../dist-debug/
