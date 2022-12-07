# physx-js-webidl
Javascript/WASM bindings for Nvidia PhysX 5.1.0.

Looking for pre-built binaries / build instructions? See [below](#pre-built-binaries)

## Getting started
There is a very basic [hello world example](dist/helloworld.html): No fancy graphics, only console output but it should get you started.

## Documentation
The API is very close to the original PhysX C++ API, so you can simply use the official
[PhysX API documentation](https://nvidia-omniverse.github.io/PhysX/physx/5.1.0/index.html)

## Demos
I also use this lib in my engine [kool](https://github.com/fabmax/kool) and have a few demos in place:
- [Ragdolls](https://fabmax.github.io/kool/kool-js/?demo=phys-ragdoll): A simple ragdoll demo.
- [Vehicle](https://fabmax.github.io/kool/kool-js/?demo=phys-vehicle): Basic vehicle demo with a few obstacles.
- [Joints](https://fabmax.github.io/kool/kool-js/?demo=phys-joints): A chain running over two gears.
- [Collision](https://fabmax.github.io/kool/kool-js/?demo=physics): The obligatory box (and other shapes) collision physics demo.

However, these are written in kotlin, not javascript.

## Pre-built binaries
This is published as a npm package:
```
npm i physx-js-webidl
```
Alternatively you can grab the pre-built binaries (.wasm + support .js) from the `dist` directory.

## Building
In order to build the library you need a recent version of the [emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html) - I'm
using version `3.1.25`.

```
# Clone this repo
git clone https://github.com/fabmax/physx-js-webidl

# Enter that directory
cd physx-js-webidl

# Download submodule containing the PhysX code
git submodule update --init

# Generate build-scripts
./generate.sh

# Build
./make.sh
```

To add bindings to additional PhysX interfaces you only have to edit the
[PhysXJs.idl](https://github.com/fabmax/PhysX/blob/webidl-bindings/physx/source/webidlbindings/src/wasm/PhysXWasm.idl)
file located in `PhysX/physx/source/webidlbindings/src/wasm/` and recompile the library.

## Other Build Methods / Targets

Typescript bindings and Docker building currently don't work with PhysX 5 (but it used to with PhysX 4.1). In case you
want to fix that, here is how it should work:

### Build Types

It is also possible to generate Typescript bindings out of the idl file:

```
npx @milkshakeio/webidl2ts -e -d -n PhysX -i PhysX/physx/source/webidlbindings/src/wasm/PhysXWasm.idl -o dist/physx-js-webidl.wasm.d.ts
```

### Build with Docker

```
# Build the image
docker compose up

# Build Release
docker compose run --rm builder ./make.sh

# Build Profile
docker compose run --rm builder ./make-profile.sh

# Build Debug
docker compose run --rm builder ./make-debug.sh
```
