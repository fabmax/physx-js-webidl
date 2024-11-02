#!/bin/bash

cd PhysX/physx/compiler/emscripten-release/
rm sdk_source_bin/physx-js-webidl.*
make -j8

cp sdk_source_bin/physx-js-webidl.js ../../../../dist/
cp sdk_source_bin/physx-js-webidl.wasm ../../../../dist/

if [ -d "/src/types" ]; then
    cp /src/types/physx-js-webidl.d.ts /src/dist/
fi
