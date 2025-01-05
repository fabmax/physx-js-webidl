# physx-js-webidl
Javascript/WASM bindings for Nvidia PhysX 5.5.0.

Looking for pre-built binaries / build instructions? See [below](#pre-built-binaries)

## Library coverage

The bindings include most major parts of the PhysX SDK (excluding CUDA stuff, which is not possible with WASM):
- [x] Basics
    - Static and dynamic actors
    - All geometry types (box, capsule, sphere, plane, convex mesh, triangle mesh and height field)
- [x] All joint types (revolute, spherical, prismatic, fixed, distance and D6)
- [x] Articulations
- [x] Vehicles
- [x] Character controllers
- [x] Scene serialization

## Getting started
There is a basic [hello world example](dist/helloworld.html): 10 boxes falling on the ground (drawn as wireframe on a plain canvas).

## Documentation
The API is very close to the original PhysX C++ API, so you can simply use the official
[PhysX API documentation](https://nvidia-omniverse.github.io/PhysX/physx/5.5.0/index.html)

However, in order to make the bindings work with emscripten a few additional wrappers are needed here and there. So it might
make sense to also take a look into the [PhysXWasm.idl](https://github.com/fabmax/PhysX/blob/webidl-bindings/physx/source/webidlbindings/src/wasm/PhysXWasm.idl)
interface definiton file.

Update as of `v2.2.0`: Thanks to Shannon Poole, PhysX enums can now be accessed by their qualified names (e.g. `PhysX.PxIDENTITYEnum.PxIdentity`,
see also the hello world demo mentioned above).

## Demos
I use this library in my engine [kool](https://github.com/fabmax/kool) and have a few demos in place:
- [Vehicle](https://fabmax.github.io/kool/kool-js/?demo=phys-vehicle): Basic vehicle demo with a few obstacles.
- [Character](https://fabmax.github.io/kool/kool-js/?demo=phys-terrain): 3rd person character demo on an island.
- [Ragdolls](https://fabmax.github.io/kool/kool-js/?demo=phys-ragdoll): A simple ragdoll demo.
- [Joints](https://fabmax.github.io/kool/kool-js/?demo=phys-joints): A chain running over two gears.
- [Collision](https://fabmax.github.io/kool/kool-js/?demo=physics): The obligatory box (and other shapes) collision physics demo.

However, the demos are written in kotlin, not javascript.

## Pre-built binaries
This library is published as a [npm package](https://www.npmjs.com/package/physx-js-webidl):
```
npm i physx-js-webidl
```
Alternatively you can grab the pre-built binaries (.wasm + support .js) from the latest [Release](https://github.com/fabmax/physx-js-webidl/releases).

## Building
In order to build the library you need a recent version of the [emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html) - I'm
using version `3.1.51`. Alternatively, you can use docker as described below.
After successful build, the binaries (.wasm + support .js) will appear in the `dist` directory.

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

### Build with Docker

The docker build also generates typescript definitions.

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

