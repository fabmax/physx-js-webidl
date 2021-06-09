# physx-js-webidl
Javascript bindings for Nvidia PhysX based on WebIDL

This repo is based on the awesome work made by [prestomation/PhysX](https://github.com/prestomation/PhysX) and
[ashconnell/physx-js](https://github.com/ashconnell/physx-js) and is a companion project to my emscripten / WebIDL based
javascript bindings for [NVIDIAGameWorks/PhysX](https://github.com/NVIDIAGameWorks/PhysX).

Looking for pre-built binaries / build instructions? See [below](#pre-built-binaries)

## Why this repo / What's the difference to physx-js?
First some background info: Emscripten offers two methods to define javascript bindings for native projects: Embind and
WebIDL. Embind basically is a C++ framework, which requires the javascript interfaces to be defined in hand-written C++.
WebIDL on the other hand uses an Interface Definition Language to generate the javascript interfaces automatically.

I initially tried to expose additional PhysX classes in the original Embind based project and found that quite tedious
and error-prone. In the end I decided to do a clean start and gave WebIDL a shot (this was also a bit inspired by
[ammo.js](https://github.com/kripken/ammo.js), a WebIDL based port of Bullet physics).

So far my expriences with WebIDL are:
- Much less hand-written C++ binding code (although it's not possible to omit that entirely)
- The .idl file used to define the bindings has a simple syntax and is easy to extend
- Speed seems to be the same as with Embind (I tested this quite a bit and really didn't see any difference)

However there also are a few minor issues:
- Enums, used as configuration flags everywhere in PhysX, are a bit troublesome (see this
    [issue](https://github.com/emscripten-core/emscripten/issues/13243))
- WebIDL does not support top-level functions, so I had to wrap those in a class. This makes the bulk of the hand-written
    code.

## Examples
None yet, I will add some as soon as I have time for that. However, I use this lib in my engine [kool](https://github.com/fabmax/kool)
and have a few demos in place:
- [Vehicle](https://fabmax.github.io/kool/kool-js/?demo=phys-vehicle): Basic vehicle demo with a few obstacles.
- [Joints](https://fabmax.github.io/kool/kool-js/?demo=phys-joints): A chain running over two gears.
- [Collision](https://fabmax.github.io/kool/kool-js/?demo=physics): The obligatory box collision physics demo.

## Pre-built binaries
This is published as a npm package:
```
npm i physx-js-webidl
```
Alternatively There are you can grab the pre-built binaries (.wasm + support .js) in from the `dist` folder.

## Building
To build this you only need an [emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html).
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
[PhysXJs.idl](https://github.com/fabmax/PhysX/blob/emscripten_webidl_wip/physx/source/physxwebbindings/src/PhysXJs.idl)
file located in `PhysX/physx/source/physxwebbindings/src/`.


## Build Types

```
npx webidl2ts -e -d -n PhysX -i PhysX/physx/source/physxwebbindings/src/PhysXJs.idl -o dist/physx-js-webidl.wasm.d.ts
```

## Build with Docker

```
# Build the image
docker build . -t physx-js-builder

# Generate build-scripts
docker run --rm -it -v $(pwd):/src physx-js-builder /bin/bash -c ./generate.sh

# Build Release
docker run --rm -it -v $(pwd):/src physx-js-builder /bin/bash -c ./make.sh

# Build Profile
docker run --rm -it -v $(pwd):/src physx-js-builder /bin/bash -c ./make-profile.sh

# Build Debug
docker run --rm -it -v $(pwd):/src physx-js-builder /bin/bash -c ./make-debug.sh
```
