#!/bin/bash

cd PhysX4/physx/compiler/emscripten-debug/
rm sdk_source_bin/physx-js-webidl.wasm.*
make -j8
cp sdk_source_bin/physx-js-webidl.wasm.js ../../../../dist-debug/physx-js-webidl.wasm.js
cp sdk_source_bin/physx-js-webidl.wasm.wasm ../../../../dist-debug/physx-js-webidl.wasm.wasm
