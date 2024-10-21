#!/bin/bash

cd PhysX/physx/compiler/emscripten-profile/
rm sdk_source_bin/physx-js-webidl.*
make -j8

mkdir -p ../../../../dist-profile/
cp sdk_source_bin/physx-js-webidl.js ../../../../dist-profile/
cp sdk_source_bin/physx-js-webidl.wasm ../../../../dist-profile/

cd /src/types
cp physx-js-webidl.d.ts ../dist-profile/
