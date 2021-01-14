

var PhysX = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(PhysX) {
  PhysX = PhysX || {};


var b;
b || (b = typeof PhysX !== 'undefined' ? PhysX : {});
var ba, ca;
b.ready = new Promise(function(a, c) {
  ba = a;
  ca = c;
});
Object.getOwnPropertyDescriptor(b.ready, "_main") || (Object.defineProperty(b.ready, "_main", {configurable:!0, get:function() {
  d("You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_main", {configurable:!0, set:function() {
  d("You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_stackSave") || (Object.defineProperty(b.ready, "_stackSave", {configurable:!0, get:function() {
  d("You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_stackSave", {configurable:!0, set:function() {
  d("You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_stackRestore") || (Object.defineProperty(b.ready, "_stackRestore", {configurable:!0, get:function() {
  d("You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_stackRestore", {configurable:!0, set:function() {
  d("You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_stackAlloc") || (Object.defineProperty(b.ready, "_stackAlloc", {configurable:!0, get:function() {
  d("You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_stackAlloc", {configurable:!0, set:function() {
  d("You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "___data_end") || (Object.defineProperty(b.ready, "___data_end", {configurable:!0, get:function() {
  d("You are getting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "___data_end", {configurable:!0, set:function() {
  d("You are setting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "___wasm_call_ctors") || (Object.defineProperty(b.ready, "___wasm_call_ctors", {configurable:!0, get:function() {
  d("You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "___wasm_call_ctors", {configurable:!0, set:function() {
  d("You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "___errno_location") || (Object.defineProperty(b.ready, "___errno_location", {configurable:!0, get:function() {
  d("You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "___errno_location", {configurable:!0, set:function() {
  d("You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_malloc") || (Object.defineProperty(b.ready, "_malloc", {configurable:!0, get:function() {
  d("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_malloc", {configurable:!0, set:function() {
  d("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_free") || (Object.defineProperty(b.ready, "_free", {configurable:!0, get:function() {
  d("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_free", {configurable:!0, set:function() {
  d("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_setThrew") || (Object.defineProperty(b.ready, "_setThrew", {configurable:!0, get:function() {
  d("You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_setThrew", {configurable:!0, set:function() {
  d("You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_htons") || (Object.defineProperty(b.ready, "_htons", {configurable:!0, get:function() {
  d("You are getting _htons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_htons", {configurable:!0, set:function() {
  d("You are setting _htons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_ntohs") || (Object.defineProperty(b.ready, "_ntohs", {configurable:!0, get:function() {
  d("You are getting _ntohs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_ntohs", {configurable:!0, set:function() {
  d("You are setting _ntohs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_memcpy") || (Object.defineProperty(b.ready, "_memcpy", {configurable:!0, get:function() {
  d("You are getting _memcpy on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_memcpy", {configurable:!0, set:function() {
  d("You are setting _memcpy on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_htonl") || (Object.defineProperty(b.ready, "_htonl", {configurable:!0, get:function() {
  d("You are getting _htonl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_htonl", {configurable:!0, set:function() {
  d("You are setting _htonl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "_emscripten_main_thread_process_queued_calls") || (Object.defineProperty(b.ready, "_emscripten_main_thread_process_queued_calls", {configurable:!0, get:function() {
  d("You are getting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "_emscripten_main_thread_process_queued_calls", {configurable:!0, set:function() {
  d("You are setting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(b.ready, "onRuntimeInitialized") || (Object.defineProperty(b.ready, "onRuntimeInitialized", {configurable:!0, get:function() {
  d("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(b.ready, "onRuntimeInitialized", {configurable:!0, set:function() {
  d("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
var da = {}, ea;
for (ea in b) {
  b.hasOwnProperty(ea) && (da[ea] = b[ea]);
}
function fa(a, c) {
  throw c;
}
var ha = !1, ia = !1, ja = !1, ka = !1;
ha = "object" === typeof window;
ia = "function" === typeof importScripts;
ja = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
ka = !ha && !ja && !ia;
if (b.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}
var la = "", ma, na, oa, pa;
if (ja) {
  la = ia ? require("path").dirname(la) + "/" : __dirname + "/", ma = function(a, c) {
    oa || (oa = require("fs"));
    pa || (pa = require("path"));
    a = pa.normalize(a);
    return oa.readFileSync(a, c ? null : "utf8");
  }, na = function(a) {
    a = ma(a, !0);
    a.buffer || (a = new Uint8Array(a));
    assert(a.buffer);
    return a;
  }, 1 < process.argv.length && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(a) {
    if (!(a instanceof qa)) {
      throw a;
    }
  }), process.on("unhandledRejection", d), fa = function(a) {
    process.exit(a);
  }, b.inspect = function() {
    return "[Emscripten Module object]";
  };
} else {
  if (ka) {
    "undefined" != typeof read && (ma = function(a) {
      return read(a);
    }), na = function(a) {
      if ("function" === typeof readbuffer) {
        return new Uint8Array(readbuffer(a));
      }
      a = read(a, "binary");
      assert("object" === typeof a);
      return a;
    }, "function" === typeof quit && (fa = function(a) {
      quit(a);
    }), "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
  } else {
    if (ha || ia) {
      ia ? la = self.location.href : document.currentScript && (la = document.currentScript.src), _scriptDir && (la = _scriptDir), la = 0 !== la.indexOf("blob:") ? la.substr(0, la.lastIndexOf("/") + 1) : "", ma = function(a) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !1);
        c.send(null);
        return c.responseText;
      }, ia && (na = function(a) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !1);
        c.responseType = "arraybuffer";
        c.send(null);
        return new Uint8Array(c.response);
      });
    } else {
      throw Error("environment detection error");
    }
  }
}
var ra = b.print || console.log.bind(console), f = b.printErr || console.warn.bind(console);
for (ea in da) {
  da.hasOwnProperty(ea) && (b[ea] = da[ea]);
}
da = null;
Object.getOwnPropertyDescriptor(b, "arguments") || Object.defineProperty(b, "arguments", {configurable:!0, get:function() {
  d("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(b, "thisProgram") || Object.defineProperty(b, "thisProgram", {configurable:!0, get:function() {
  d("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
b.quit && (fa = b.quit);
Object.getOwnPropertyDescriptor(b, "quit") || Object.defineProperty(b, "quit", {configurable:!0, get:function() {
  d("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert("undefined" === typeof b.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof b.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof b.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof b.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof b.read, "Module.read option was removed (modify read_ in JS)");
assert("undefined" === typeof b.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
assert("undefined" === typeof b.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
assert("undefined" === typeof b.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
assert("undefined" === typeof b.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Object.getOwnPropertyDescriptor(b, "read") || Object.defineProperty(b, "read", {configurable:!0, get:function() {
  d("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(b, "readAsync") || Object.defineProperty(b, "readAsync", {configurable:!0, get:function() {
  d("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(b, "readBinary") || Object.defineProperty(b, "readBinary", {configurable:!0, get:function() {
  d("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(b, "setWindowTitle") || Object.defineProperty(b, "setWindowTitle", {configurable:!0, get:function() {
  d("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
function sa(a) {
  ta || (ta = {});
  ta[a] || (ta[a] = 1, f(a));
}
var ta, ua;
b.wasmBinary && (ua = b.wasmBinary);
Object.getOwnPropertyDescriptor(b, "wasmBinary") || Object.defineProperty(b, "wasmBinary", {configurable:!0, get:function() {
  d("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
var noExitRuntime;
b.noExitRuntime && (noExitRuntime = b.noExitRuntime);
Object.getOwnPropertyDescriptor(b, "noExitRuntime") || Object.defineProperty(b, "noExitRuntime", {configurable:!0, get:function() {
  d("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
"object" !== typeof WebAssembly && d("no native wasm support detected");
var va, wa, xa = !1;
function assert(a, c) {
  a || d("Assertion failed: " + c);
}
var ya = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function za(a, c, e) {
  var g = c + e;
  for (e = c; a[e] && !(e >= g);) {
    ++e;
  }
  if (16 < e - c && a.subarray && ya) {
    return ya.decode(a.subarray(c, e));
  }
  for (g = ""; c < e;) {
    var r = a[c++];
    if (r & 128) {
      var q = a[c++] & 63;
      if (192 == (r & 224)) {
        g += String.fromCharCode((r & 31) << 6 | q);
      } else {
        var aa = a[c++] & 63;
        224 == (r & 240) ? r = (r & 15) << 12 | q << 6 | aa : (240 != (r & 248) && sa("Invalid UTF-8 leading byte 0x" + r.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"), r = (r & 7) << 18 | q << 12 | aa << 6 | a[c++] & 63);
        65536 > r ? g += String.fromCharCode(r) : (r -= 65536, g += String.fromCharCode(55296 | r >> 10, 56320 | r & 1023));
      }
    } else {
      g += String.fromCharCode(r);
    }
  }
  return g;
}
function h(a) {
  return a ? za(Aa, a, void 0) : "";
}
"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
var Ba, Ca, Aa, k, Da, Ea;
assert(!0, "stack must start aligned");
b.TOTAL_STACK && assert(5242880 === b.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var Fa = b.INITIAL_MEMORY || 268435456;
Object.getOwnPropertyDescriptor(b, "INITIAL_MEMORY") || Object.defineProperty(b, "INITIAL_MEMORY", {configurable:!0, get:function() {
  d("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert(5242880 <= Fa, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + Fa + "! (TOTAL_STACK=5242880)");
assert("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
if (va = b.wasmMemory ? b.wasmMemory : new WebAssembly.Memory({initial:Fa / 65536, maximum:Fa / 65536})) {
  Ba = va.buffer;
}
Fa = Ba.byteLength;
assert(0 === Fa % 65536);
var Ga = Ba;
Ba = Ga;
b.HEAP8 = Ca = new Int8Array(Ga);
b.HEAP16 = new Int16Array(Ga);
b.HEAP32 = k = new Int32Array(Ga);
b.HEAPU8 = Aa = new Uint8Array(Ga);
b.HEAPU16 = new Uint16Array(Ga);
b.HEAPU32 = Da = new Uint32Array(Ga);
b.HEAPF32 = new Float32Array(Ga);
b.HEAPF64 = Ea = new Float64Array(Ga);
function Ha() {
  assert(!0);
  Da[37873] = 34821223;
  Da[37874] = 2310721022;
  k[0] = 1668509029;
}
function Ia() {
  if (!xa) {
    var a = Da[37873], c = Da[37874];
    34821223 == a && 2310721022 == c || d("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + c.toString(16) + " " + a.toString(16));
    1668509029 !== k[0] && d("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var Ja = new Int16Array(1), Ka = new Int8Array(Ja.buffer);
Ja[0] = 25459;
if (115 !== Ka[0] || 99 !== Ka[1]) {
  throw "Runtime error: expected the system to be little-endian!";
}
var La = [], Ma = [], Na = [], Oa = [], Pa = !1, Qa = !1;
function Ra() {
  var a = b.preRun.shift();
  La.unshift(a);
}
assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var Sa = 0, Ta = null, Ua = null, Va = {};
function Wa() {
  Sa++;
  b.monitorRunDependencies && b.monitorRunDependencies(Sa);
  assert(!Va["wasm-instantiate"]);
  Va["wasm-instantiate"] = 1;
  null === Ta && "undefined" !== typeof setInterval && (Ta = setInterval(function() {
    if (xa) {
      clearInterval(Ta), Ta = null;
    } else {
      var a = !1, c;
      for (c in Va) {
        a || (a = !0, f("still waiting on run dependencies:")), f("dependency: " + c);
      }
      a && f("(end of list)");
    }
  }, 10000));
}
b.preloadedImages = {};
b.preloadedAudios = {};
function d(a) {
  if (b.onAbort) {
    b.onAbort(a);
  }
  a += "";
  f(a);
  xa = !0;
  a = "abort(" + a + ") at ";
  a: {
    var c = Error();
    if (!c.stack) {
      try {
        throw Error();
      } catch (e) {
        c = e;
      }
      if (!c.stack) {
        c = "(no stack trace available)";
        break a;
      }
    }
    c = c.stack.toString();
  }
  b.extraStackTrace && (c += "\n" + b.extraStackTrace());
  c = Xa(c);
  a = new WebAssembly.RuntimeError(a + c);
  ca(a);
  throw a;
}
function Ya() {
  d("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1");
}
b.FS_createDataFile = function() {
  Ya();
};
b.FS_createPreloadedFile = function() {
  Ya();
};
function Za(a) {
  var c = $a;
  return String.prototype.startsWith ? c.startsWith(a) : 0 === c.indexOf(a);
}
function ab() {
  return Za("data:application/octet-stream;base64,");
}
function l(a) {
  return function() {
    var c = b.asm;
    assert(Pa, "native function `" + a + "` called before runtime initialization");
    assert(!Qa, "native function `" + a + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    c[a] || assert(c[a], "exported native function `" + a + "` not found");
    return c[a].apply(null, arguments);
  };
}
var $a = "physx-js-webidl.wasm.wasm";
if (!ab()) {
  var bb = $a;
  $a = b.locateFile ? b.locateFile(bb, la) : la + bb;
}
function cb() {
  try {
    if (ua) {
      return new Uint8Array(ua);
    }
    if (na) {
      return na($a);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (a) {
    d(a);
  }
}
function db() {
  return ua || !ha && !ia || "function" !== typeof fetch || Za("file://") ? Promise.resolve().then(cb) : fetch($a, {credentials:"same-origin"}).then(function(a) {
    if (!a.ok) {
      throw "failed to load wasm binary file at '" + $a + "'";
    }
    return a.arrayBuffer();
  }).catch(function() {
    return cb();
  });
}
var eb = {1392:function(a, c) {
  a = b.getCache(b.JsPxSimulationEventCallback)[a];
  if (!a.hasOwnProperty("cbFun")) {
    throw "a JSImplementation must implement all functions, you forgot JsPxSimulationEventCallback::cbFun.";
  }
  a.cbFun(c);
}};
function fb(a) {
  for (; 0 < a.length;) {
    var c = a.shift();
    if ("function" == typeof c) {
      c(b);
    } else {
      var e = c.v;
      "number" === typeof e ? void 0 === c.f ? wa.get(e)() : wa.get(e)(c.f) : e(void 0 === c.f ? null : c.f);
    }
  }
}
function Xa(a) {
  return a.replace(/\b_Z[\w\d_]+/g, function(c) {
    sa("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
    return c === c ? c : c + " [" + c + "]";
  });
}
function gb(a) {
  this.a = a - 16;
  this.ra = function(c) {
    k[this.a + 8 >> 2] = c;
  };
  this.ba = function(c) {
    k[this.a + 0 >> 2] = c;
  };
  this.na = function() {
    k[this.a + 4 >> 2] = 0;
  };
  this.Y = function() {
    Ca[this.a + 12 >> 0] = 0;
  };
  this.oa = function() {
    Ca[this.a + 13 >> 0] = 0;
  };
  this.X = function(c, e) {
    this.ra(c);
    this.ba(e);
    this.na();
    this.Y();
    this.oa();
  };
}
function hb() {
  return 0 < hb.u;
}
function ib() {
  "undefined" !== typeof _fflush && _fflush(0);
  jb[1].length && kb(1, 10);
  jb[2].length && kb(2, 10);
}
var jb = [null, [], []];
function kb(a, c) {
  var e = jb[a];
  assert(e);
  0 === c || 10 === c ? ((1 === a ? ra : f)(za(e, 0)), e.length = 0) : e.push(c);
}
var lb;
lb = ja ? function() {
  var a = process.hrtime();
  return 1e3 * a[0] + a[1] / 1e6;
} : "undefined" !== typeof dateNow ? dateNow : function() {
  return performance.now();
};
var mb = [];
Ma.push({v:function() {
  nb();
}});
var rb = {__cxa_allocate_exception:function(a) {
  return ob(a + 16) + 16;
}, __cxa_throw:function(a, c, e) {
  (new gb(a)).X(c, e);
  "uncaught_exception" in hb ? hb.u++ : hb.u = 1;
  throw a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
}, abort:function() {
  d();
}, array_bounds_check_error:function(a, c) {
  throw "Array index " + a + " out of bounds: [0," + c + ")";
}, emscripten_asm_const_int:function(a, c, e) {
  assert(Array.isArray(mb));
  assert(0 == e % 16);
  mb.length = 0;
  var g;
  for (e >>= 2; g = Aa[c++];) {
    assert(100 === g || 102 === g || 105 === g), (g = 105 > g) && e & 1 && e++, mb.push(g ? Ea[e++ >> 1] : k[e]), ++e;
  }
  return eb[a].apply(null, mb);
}, emscripten_memcpy_big:function(a, c, e) {
  Aa.copyWithin(a, c, c + e);
}, emscripten_resize_heap:function(a) {
  d("Cannot enlarge memory arrays to size " + (a >>> 0) + " bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value " + Ca.length + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}, fd_write:function(a, c, e, g) {
  for (var r = 0, q = 0; q < e; q++) {
    for (var aa = k[c + 8 * q >> 2], Nb = k[c + (8 * q + 4) >> 2], sb = 0; sb < Nb; sb++) {
      kb(a, Aa[aa + sb]);
    }
    r += Nb;
  }
  k[g >> 2] = r;
  return 0;
}, gettimeofday:function(a) {
  var c = Date.now();
  k[a >> 2] = c / 1000 | 0;
  k[a + 4 >> 2] = c % 1000 * 1000 | 0;
  return 0;
}, memory:va, nanosleep:function(a, c) {
  if (0 === a) {
    return k[pb() >> 2] = 28, -1;
  }
  var e = k[a >> 2];
  a = k[a + 4 >> 2];
  if (0 > a || 999999999 < a || 0 > e) {
    return k[pb() >> 2] = 28, -1;
  }
  0 !== c && (k[c >> 2] = 0, k[c + 4 >> 2] = 0);
  c = 1e6 * e + a / 1000;
  for (e = lb(); lb() - e < c / 1000;) {
  }
}, pthread_attr_destroy:function() {
  return 0;
}, pthread_attr_init:function() {
  return 0;
}, pthread_attr_setstacksize:function() {
}, pthread_cancel:function() {
}, pthread_create:function() {
  return 6;
}, pthread_exit:function(a) {
  qb();
  if (noExitRuntime) {
    var c = "program exited (with status: " + a + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";
    ca(c);
    f(c);
  } else {
    Ia();
    Qa = !0;
    if (b.onExit) {
      b.onExit(a);
    }
    xa = !0;
  }
  fa(a, new qa(a));
}, pthread_join:function() {
}, pthread_mutexattr_destroy:function() {
}, pthread_mutexattr_init:function() {
}, pthread_mutexattr_setprotocol:function() {
}, pthread_mutexattr_settype:function() {
}, setTempRet0:function() {
}};
(function() {
  function a(q) {
    b.asm = q.exports;
    wa = b.asm.__indirect_function_table;
    assert(wa, "table not found in wasm exports");
    Sa--;
    b.monitorRunDependencies && b.monitorRunDependencies(Sa);
    assert(Va["wasm-instantiate"]);
    delete Va["wasm-instantiate"];
    0 == Sa && (null !== Ta && (clearInterval(Ta), Ta = null), Ua && (q = Ua, Ua = null, q()));
  }
  function c(q) {
    assert(b === r, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    r = null;
    a(q.instance);
  }
  function e(q) {
    return db().then(function(aa) {
      return WebAssembly.instantiate(aa, g);
    }).then(q, function(aa) {
      f("failed to asynchronously prepare wasm: " + aa);
      d(aa);
    });
  }
  var g = {env:rb, wasi_snapshot_preview1:rb};
  Wa();
  var r = b;
  if (b.instantiateWasm) {
    try {
      return b.instantiateWasm(g, a);
    } catch (q) {
      return f("Module.instantiateWasm callback failed with error: " + q), !1;
    }
  }
  (function() {
    if (ua || "function" !== typeof WebAssembly.instantiateStreaming || ab() || Za("file://") || "function" !== typeof fetch) {
      return e(c);
    }
    fetch($a, {credentials:"same-origin"}).then(function(q) {
      return WebAssembly.instantiateStreaming(q, g).then(c, function(aa) {
        f("wasm streaming compile failed: " + aa);
        f("falling back to ArrayBuffer instantiation");
        return e(c);
      });
    });
  })();
  return {};
})();
var nb = b.___wasm_call_ctors = l("__wasm_call_ctors");
b.___em_js__array_bounds_check_error = l("__em_js__array_bounds_check_error");
var tb = b._emscripten_bind_PxBase_release_0 = l("emscripten_bind_PxBase_release_0"), ub = b._emscripten_bind_PxBase_getConcreteTypeName_0 = l("emscripten_bind_PxBase_getConcreteTypeName_0"), vb = b._emscripten_bind_PxBase_getConcreteType_0 = l("emscripten_bind_PxBase_getConcreteType_0"), wb = b._emscripten_bind_PxBase_setBaseFlag_2 = l("emscripten_bind_PxBase_setBaseFlag_2"), xb = b._emscripten_bind_PxBase_setBaseFlags_1 = l("emscripten_bind_PxBase_setBaseFlags_1"), yb = b._emscripten_bind_PxBase_getBaseFlags_0 = 
l("emscripten_bind_PxBase_getBaseFlags_0"), zb = b._emscripten_bind_PxBase_isReleasable_0 = l("emscripten_bind_PxBase_isReleasable_0"), Ab = b._emscripten_bind_PxActor_getType_0 = l("emscripten_bind_PxActor_getType_0"), Bb = b._emscripten_bind_PxActor_getScene_0 = l("emscripten_bind_PxActor_getScene_0"), Cb = b._emscripten_bind_PxActor_setName_1 = l("emscripten_bind_PxActor_setName_1"), Db = b._emscripten_bind_PxActor_getName_0 = l("emscripten_bind_PxActor_getName_0"), Eb = b._emscripten_bind_PxActor_getWorldBounds_0 = 
l("emscripten_bind_PxActor_getWorldBounds_0"), Fb = b._emscripten_bind_PxActor_getWorldBounds_1 = l("emscripten_bind_PxActor_getWorldBounds_1"), Gb = b._emscripten_bind_PxActor_setActorFlags_1 = l("emscripten_bind_PxActor_setActorFlags_1"), Hb = b._emscripten_bind_PxActor_getActorFlags_0 = l("emscripten_bind_PxActor_getActorFlags_0"), Ib = b._emscripten_bind_PxActor_setDominanceGroup_1 = l("emscripten_bind_PxActor_setDominanceGroup_1"), Jb = b._emscripten_bind_PxActor_getDominanceGroup_0 = l("emscripten_bind_PxActor_getDominanceGroup_0"), 
Kb = b._emscripten_bind_PxActor_setOwnerClient_1 = l("emscripten_bind_PxActor_setOwnerClient_1"), Lb = b._emscripten_bind_PxActor_getOwnerClient_0 = l("emscripten_bind_PxActor_getOwnerClient_0"), Mb = b._emscripten_bind_PxActor_release_0 = l("emscripten_bind_PxActor_release_0"), Ob = b._emscripten_bind_PxActor_getConcreteTypeName_0 = l("emscripten_bind_PxActor_getConcreteTypeName_0"), Pb = b._emscripten_bind_PxActor_getConcreteType_0 = l("emscripten_bind_PxActor_getConcreteType_0"), Qb = b._emscripten_bind_PxActor_setBaseFlag_2 = 
l("emscripten_bind_PxActor_setBaseFlag_2"), Rb = b._emscripten_bind_PxActor_setBaseFlags_1 = l("emscripten_bind_PxActor_setBaseFlags_1"), Sb = b._emscripten_bind_PxActor_getBaseFlags_0 = l("emscripten_bind_PxActor_getBaseFlags_0"), Tb = b._emscripten_bind_PxActor_isReleasable_0 = l("emscripten_bind_PxActor_isReleasable_0"), Ub = b._emscripten_bind_PxRigidActor_getGlobalPose_0 = l("emscripten_bind_PxRigidActor_getGlobalPose_0"), Vb = b._emscripten_bind_PxRigidActor_setGlobalPose_1 = l("emscripten_bind_PxRigidActor_setGlobalPose_1"), 
Wb = b._emscripten_bind_PxRigidActor_setGlobalPose_2 = l("emscripten_bind_PxRigidActor_setGlobalPose_2"), Xb = b._emscripten_bind_PxRigidActor_attachShape_1 = l("emscripten_bind_PxRigidActor_attachShape_1"), Yb = b._emscripten_bind_PxRigidActor_detachShape_1 = l("emscripten_bind_PxRigidActor_detachShape_1"), Zb = b._emscripten_bind_PxRigidActor_detachShape_2 = l("emscripten_bind_PxRigidActor_detachShape_2"), $b = b._emscripten_bind_PxRigidActor_getNbShapes_0 = l("emscripten_bind_PxRigidActor_getNbShapes_0"), 
ac = b._emscripten_bind_PxRigidActor_getShapes_3 = l("emscripten_bind_PxRigidActor_getShapes_3"), bc = b._emscripten_bind_PxRigidActor_getType_0 = l("emscripten_bind_PxRigidActor_getType_0"), cc = b._emscripten_bind_PxRigidActor_getScene_0 = l("emscripten_bind_PxRigidActor_getScene_0"), dc = b._emscripten_bind_PxRigidActor_setName_1 = l("emscripten_bind_PxRigidActor_setName_1"), ec = b._emscripten_bind_PxRigidActor_getName_0 = l("emscripten_bind_PxRigidActor_getName_0"), fc = b._emscripten_bind_PxRigidActor_getWorldBounds_0 = 
l("emscripten_bind_PxRigidActor_getWorldBounds_0"), hc = b._emscripten_bind_PxRigidActor_getWorldBounds_1 = l("emscripten_bind_PxRigidActor_getWorldBounds_1"), ic = b._emscripten_bind_PxRigidActor_setActorFlags_1 = l("emscripten_bind_PxRigidActor_setActorFlags_1"), jc = b._emscripten_bind_PxRigidActor_getActorFlags_0 = l("emscripten_bind_PxRigidActor_getActorFlags_0"), kc = b._emscripten_bind_PxRigidActor_setDominanceGroup_1 = l("emscripten_bind_PxRigidActor_setDominanceGroup_1"), lc = b._emscripten_bind_PxRigidActor_getDominanceGroup_0 = 
l("emscripten_bind_PxRigidActor_getDominanceGroup_0"), mc = b._emscripten_bind_PxRigidActor_setOwnerClient_1 = l("emscripten_bind_PxRigidActor_setOwnerClient_1"), nc = b._emscripten_bind_PxRigidActor_getOwnerClient_0 = l("emscripten_bind_PxRigidActor_getOwnerClient_0"), oc = b._emscripten_bind_PxRigidActor_release_0 = l("emscripten_bind_PxRigidActor_release_0"), pc = b._emscripten_bind_PxRigidActor_getConcreteTypeName_0 = l("emscripten_bind_PxRigidActor_getConcreteTypeName_0"), qc = b._emscripten_bind_PxRigidActor_getConcreteType_0 = 
l("emscripten_bind_PxRigidActor_getConcreteType_0"), rc = b._emscripten_bind_PxRigidActor_setBaseFlag_2 = l("emscripten_bind_PxRigidActor_setBaseFlag_2"), sc = b._emscripten_bind_PxRigidActor_setBaseFlags_1 = l("emscripten_bind_PxRigidActor_setBaseFlags_1"), tc = b._emscripten_bind_PxRigidActor_getBaseFlags_0 = l("emscripten_bind_PxRigidActor_getBaseFlags_0"), uc = b._emscripten_bind_PxRigidActor_isReleasable_0 = l("emscripten_bind_PxRigidActor_isReleasable_0"), vc = b._emscripten_bind_PxSimulationEventCallback___destroy___0 = 
l("emscripten_bind_PxSimulationEventCallback___destroy___0"), wc = b._emscripten_bind_PxRigidBody_setCMassLocalPose_1 = l("emscripten_bind_PxRigidBody_setCMassLocalPose_1"), xc = b._emscripten_bind_PxRigidBody_getCMassLocalPose_0 = l("emscripten_bind_PxRigidBody_getCMassLocalPose_0"), yc = b._emscripten_bind_PxRigidBody_setMass_1 = l("emscripten_bind_PxRigidBody_setMass_1"), zc = b._emscripten_bind_PxRigidBody_getMass_0 = l("emscripten_bind_PxRigidBody_getMass_0"), Ac = b._emscripten_bind_PxRigidBody_getInvMass_0 = 
l("emscripten_bind_PxRigidBody_getInvMass_0"), Bc = b._emscripten_bind_PxRigidBody_setMassSpaceInertiaTensor_1 = l("emscripten_bind_PxRigidBody_setMassSpaceInertiaTensor_1"), Cc = b._emscripten_bind_PxRigidBody_getMassSpaceInertiaTensor_0 = l("emscripten_bind_PxRigidBody_getMassSpaceInertiaTensor_0"), Dc = b._emscripten_bind_PxRigidBody_getMassSpaceInvInertiaTensor_0 = l("emscripten_bind_PxRigidBody_getMassSpaceInvInertiaTensor_0"), Ec = b._emscripten_bind_PxRigidBody_setLinearDamping_1 = l("emscripten_bind_PxRigidBody_setLinearDamping_1"), 
Fc = b._emscripten_bind_PxRigidBody_getLinearDamping_0 = l("emscripten_bind_PxRigidBody_getLinearDamping_0"), Gc = b._emscripten_bind_PxRigidBody_setAngularDamping_1 = l("emscripten_bind_PxRigidBody_setAngularDamping_1"), Hc = b._emscripten_bind_PxRigidBody_getAngularDamping_0 = l("emscripten_bind_PxRigidBody_getAngularDamping_0"), Ic = b._emscripten_bind_PxRigidBody_getLinearVelocity_0 = l("emscripten_bind_PxRigidBody_getLinearVelocity_0"), Jc = b._emscripten_bind_PxRigidBody_setLinearVelocity_1 = 
l("emscripten_bind_PxRigidBody_setLinearVelocity_1"), Kc = b._emscripten_bind_PxRigidBody_setLinearVelocity_2 = l("emscripten_bind_PxRigidBody_setLinearVelocity_2"), Lc = b._emscripten_bind_PxRigidBody_getAngularVelocity_0 = l("emscripten_bind_PxRigidBody_getAngularVelocity_0"), Mc = b._emscripten_bind_PxRigidBody_setAngularVelocity_1 = l("emscripten_bind_PxRigidBody_setAngularVelocity_1"), Nc = b._emscripten_bind_PxRigidBody_setAngularVelocity_2 = l("emscripten_bind_PxRigidBody_setAngularVelocity_2"), 
Oc = b._emscripten_bind_PxRigidBody_getMaxLinearVelocity_0 = l("emscripten_bind_PxRigidBody_getMaxLinearVelocity_0"), Pc = b._emscripten_bind_PxRigidBody_setMaxLinearVelocity_1 = l("emscripten_bind_PxRigidBody_setMaxLinearVelocity_1"), Qc = b._emscripten_bind_PxRigidBody_getMaxAngularVelocity_0 = l("emscripten_bind_PxRigidBody_getMaxAngularVelocity_0"), Rc = b._emscripten_bind_PxRigidBody_setMaxAngularVelocity_1 = l("emscripten_bind_PxRigidBody_setMaxAngularVelocity_1"), Sc = b._emscripten_bind_PxRigidBody_addForce_1 = 
l("emscripten_bind_PxRigidBody_addForce_1"), Tc = b._emscripten_bind_PxRigidBody_addForce_2 = l("emscripten_bind_PxRigidBody_addForce_2"), Uc = b._emscripten_bind_PxRigidBody_addForce_3 = l("emscripten_bind_PxRigidBody_addForce_3"), Vc = b._emscripten_bind_PxRigidBody_addTorque_1 = l("emscripten_bind_PxRigidBody_addTorque_1"), Wc = b._emscripten_bind_PxRigidBody_addTorque_2 = l("emscripten_bind_PxRigidBody_addTorque_2"), Xc = b._emscripten_bind_PxRigidBody_addTorque_3 = l("emscripten_bind_PxRigidBody_addTorque_3"), 
Yc = b._emscripten_bind_PxRigidBody_clearForce_1 = l("emscripten_bind_PxRigidBody_clearForce_1"), Zc = b._emscripten_bind_PxRigidBody_clearTorque_1 = l("emscripten_bind_PxRigidBody_clearTorque_1"), $c = b._emscripten_bind_PxRigidBody_setForceAndTorque_2 = l("emscripten_bind_PxRigidBody_setForceAndTorque_2"), ad = b._emscripten_bind_PxRigidBody_setForceAndTorque_3 = l("emscripten_bind_PxRigidBody_setForceAndTorque_3"), bd = b._emscripten_bind_PxRigidBody_setRigidBodyFlag_2 = l("emscripten_bind_PxRigidBody_setRigidBodyFlag_2"), 
cd = b._emscripten_bind_PxRigidBody_setRigidBodyFlags_1 = l("emscripten_bind_PxRigidBody_setRigidBodyFlags_1"), dd = b._emscripten_bind_PxRigidBody_getRigidBodyFlags_0 = l("emscripten_bind_PxRigidBody_getRigidBodyFlags_0"), ed = b._emscripten_bind_PxRigidBody_setMinCCDAdvanceCoefficient_1 = l("emscripten_bind_PxRigidBody_setMinCCDAdvanceCoefficient_1"), fd = b._emscripten_bind_PxRigidBody_getMinCCDAdvanceCoefficient_0 = l("emscripten_bind_PxRigidBody_getMinCCDAdvanceCoefficient_0"), gd = b._emscripten_bind_PxRigidBody_setMaxDepenetrationVelocity_1 = 
l("emscripten_bind_PxRigidBody_setMaxDepenetrationVelocity_1"), hd = b._emscripten_bind_PxRigidBody_getMaxDepenetrationVelocity_0 = l("emscripten_bind_PxRigidBody_getMaxDepenetrationVelocity_0"), id = b._emscripten_bind_PxRigidBody_setMaxContactImpulse_1 = l("emscripten_bind_PxRigidBody_setMaxContactImpulse_1"), jd = b._emscripten_bind_PxRigidBody_getMaxContactImpulse_0 = l("emscripten_bind_PxRigidBody_getMaxContactImpulse_0"), kd = b._emscripten_bind_PxRigidBody_getInternalIslandNodeIndex_0 = l("emscripten_bind_PxRigidBody_getInternalIslandNodeIndex_0"), 
ld = b._emscripten_bind_PxRigidBody_getType_0 = l("emscripten_bind_PxRigidBody_getType_0"), md = b._emscripten_bind_PxRigidBody_getScene_0 = l("emscripten_bind_PxRigidBody_getScene_0"), nd = b._emscripten_bind_PxRigidBody_setName_1 = l("emscripten_bind_PxRigidBody_setName_1"), od = b._emscripten_bind_PxRigidBody_getName_0 = l("emscripten_bind_PxRigidBody_getName_0"), pd = b._emscripten_bind_PxRigidBody_getWorldBounds_0 = l("emscripten_bind_PxRigidBody_getWorldBounds_0"), qd = b._emscripten_bind_PxRigidBody_getWorldBounds_1 = 
l("emscripten_bind_PxRigidBody_getWorldBounds_1"), rd = b._emscripten_bind_PxRigidBody_setActorFlags_1 = l("emscripten_bind_PxRigidBody_setActorFlags_1"), sd = b._emscripten_bind_PxRigidBody_getActorFlags_0 = l("emscripten_bind_PxRigidBody_getActorFlags_0"), td = b._emscripten_bind_PxRigidBody_setDominanceGroup_1 = l("emscripten_bind_PxRigidBody_setDominanceGroup_1"), ud = b._emscripten_bind_PxRigidBody_getDominanceGroup_0 = l("emscripten_bind_PxRigidBody_getDominanceGroup_0"), vd = b._emscripten_bind_PxRigidBody_setOwnerClient_1 = 
l("emscripten_bind_PxRigidBody_setOwnerClient_1"), wd = b._emscripten_bind_PxRigidBody_getOwnerClient_0 = l("emscripten_bind_PxRigidBody_getOwnerClient_0"), xd = b._emscripten_bind_PxRigidBody_release_0 = l("emscripten_bind_PxRigidBody_release_0"), yd = b._emscripten_bind_PxRigidBody_getConcreteTypeName_0 = l("emscripten_bind_PxRigidBody_getConcreteTypeName_0"), zd = b._emscripten_bind_PxRigidBody_getConcreteType_0 = l("emscripten_bind_PxRigidBody_getConcreteType_0"), Ad = b._emscripten_bind_PxRigidBody_setBaseFlag_2 = 
l("emscripten_bind_PxRigidBody_setBaseFlag_2"), Bd = b._emscripten_bind_PxRigidBody_setBaseFlags_1 = l("emscripten_bind_PxRigidBody_setBaseFlags_1"), Cd = b._emscripten_bind_PxRigidBody_getBaseFlags_0 = l("emscripten_bind_PxRigidBody_getBaseFlags_0"), Dd = b._emscripten_bind_PxRigidBody_isReleasable_0 = l("emscripten_bind_PxRigidBody_isReleasable_0"), Ed = b._emscripten_bind_PxRigidBody_getGlobalPose_0 = l("emscripten_bind_PxRigidBody_getGlobalPose_0"), Fd = b._emscripten_bind_PxRigidBody_setGlobalPose_1 = 
l("emscripten_bind_PxRigidBody_setGlobalPose_1"), Gd = b._emscripten_bind_PxRigidBody_setGlobalPose_2 = l("emscripten_bind_PxRigidBody_setGlobalPose_2"), Hd = b._emscripten_bind_PxRigidBody_attachShape_1 = l("emscripten_bind_PxRigidBody_attachShape_1"), Id = b._emscripten_bind_PxRigidBody_detachShape_1 = l("emscripten_bind_PxRigidBody_detachShape_1"), Jd = b._emscripten_bind_PxRigidBody_detachShape_2 = l("emscripten_bind_PxRigidBody_detachShape_2"), Kd = b._emscripten_bind_PxRigidBody_getNbShapes_0 = 
l("emscripten_bind_PxRigidBody_getNbShapes_0"), Ld = b._emscripten_bind_PxRigidBody_getShapes_3 = l("emscripten_bind_PxRigidBody_getShapes_3"), Md = b._emscripten_bind_IPxSimulationEventCallback_cbFun_1 = l("emscripten_bind_IPxSimulationEventCallback_cbFun_1"), Nd = b._emscripten_bind_IPxSimulationEventCallback___destroy___0 = l("emscripten_bind_IPxSimulationEventCallback___destroy___0"), Od = b._emscripten_bind_PxGeometry___destroy___0 = l("emscripten_bind_PxGeometry___destroy___0"), Pd = b._emscripten_bind_PxCpuDispatcher___destroy___0 = 
l("emscripten_bind_PxCpuDispatcher___destroy___0"), Qd = b._emscripten_bind_VoidPtr___destroy___0 = l("emscripten_bind_VoidPtr___destroy___0"), Rd = b._emscripten_bind_PxTopLevelFunctions_PxTopLevelFunctions_0 = l("emscripten_bind_PxTopLevelFunctions_PxTopLevelFunctions_0"), Sd = b._emscripten_bind_PxTopLevelFunctions_CreateCooking_3 = l("emscripten_bind_PxTopLevelFunctions_CreateCooking_3"), Td = b._emscripten_bind_PxTopLevelFunctions_CreateFoundation_3 = l("emscripten_bind_PxTopLevelFunctions_CreateFoundation_3"), 
Ud = b._emscripten_bind_PxTopLevelFunctions_CreatePhysics_3 = l("emscripten_bind_PxTopLevelFunctions_CreatePhysics_3"), Vd = b._emscripten_bind_PxTopLevelFunctions_DefaultCpuDispatcherCreate_1 = l("emscripten_bind_PxTopLevelFunctions_DefaultCpuDispatcherCreate_1"), Wd = b._emscripten_bind_PxTopLevelFunctions_DefaultFilterShader_0 = l("emscripten_bind_PxTopLevelFunctions_DefaultFilterShader_0"), Xd = b._emscripten_bind_PxTopLevelFunctions_InitExtensions_1 = l("emscripten_bind_PxTopLevelFunctions_InitExtensions_1"), 
Yd = b._emscripten_bind_PxTopLevelFunctions_RevoluteJointCreate_5 = l("emscripten_bind_PxTopLevelFunctions_RevoluteJointCreate_5"), Zd = b._emscripten_bind_PxTopLevelFunctions_getU8At_2 = l("emscripten_bind_PxTopLevelFunctions_getU8At_2"), $d = b._emscripten_bind_PxTopLevelFunctions_getVec3At_2 = l("emscripten_bind_PxTopLevelFunctions_getVec3At_2"), ae = b._emscripten_bind_PxTopLevelFunctions_get_PHYSICS_VERSION_0 = l("emscripten_bind_PxTopLevelFunctions_get_PHYSICS_VERSION_0"), be = b._emscripten_bind_PxTopLevelFunctions___destroy___0 = 
l("emscripten_bind_PxTopLevelFunctions___destroy___0"), ce = b._emscripten_bind_PxActorFlags_PxActorFlags_1 = l("emscripten_bind_PxActorFlags_PxActorFlags_1"), de = b._emscripten_bind_PxActorFlags_isSet_1 = l("emscripten_bind_PxActorFlags_isSet_1"), ee = b._emscripten_bind_PxActorFlags_set_1 = l("emscripten_bind_PxActorFlags_set_1"), fe = b._emscripten_bind_PxActorFlags_clear_1 = l("emscripten_bind_PxActorFlags_clear_1"), ge = b._emscripten_bind_PxActorFlags___destroy___0 = l("emscripten_bind_PxActorFlags___destroy___0"), 
he = b._emscripten_bind_PxFilterData_PxFilterData_0 = l("emscripten_bind_PxFilterData_PxFilterData_0"), ie = b._emscripten_bind_PxFilterData_PxFilterData_4 = l("emscripten_bind_PxFilterData_PxFilterData_4"), je = b._emscripten_bind_PxFilterData_get_word0_0 = l("emscripten_bind_PxFilterData_get_word0_0"), ke = b._emscripten_bind_PxFilterData_set_word0_1 = l("emscripten_bind_PxFilterData_set_word0_1"), le = b._emscripten_bind_PxFilterData_get_word1_0 = l("emscripten_bind_PxFilterData_get_word1_0"), 
me = b._emscripten_bind_PxFilterData_set_word1_1 = l("emscripten_bind_PxFilterData_set_word1_1"), ne = b._emscripten_bind_PxFilterData_get_word2_0 = l("emscripten_bind_PxFilterData_get_word2_0"), oe = b._emscripten_bind_PxFilterData_set_word2_1 = l("emscripten_bind_PxFilterData_set_word2_1"), pe = b._emscripten_bind_PxFilterData_get_word3_0 = l("emscripten_bind_PxFilterData_get_word3_0"), qe = b._emscripten_bind_PxFilterData_set_word3_1 = l("emscripten_bind_PxFilterData_set_word3_1"), re = b._emscripten_bind_PxFilterData___destroy___0 = 
l("emscripten_bind_PxFilterData___destroy___0"), se = b._emscripten_bind_PxMaterial_release_0 = l("emscripten_bind_PxMaterial_release_0"), te = b._emscripten_bind_PxMaterial_getConcreteTypeName_0 = l("emscripten_bind_PxMaterial_getConcreteTypeName_0"), ue = b._emscripten_bind_PxMaterial_getConcreteType_0 = l("emscripten_bind_PxMaterial_getConcreteType_0"), ve = b._emscripten_bind_PxMaterial_setBaseFlag_2 = l("emscripten_bind_PxMaterial_setBaseFlag_2"), we = b._emscripten_bind_PxMaterial_setBaseFlags_1 = 
l("emscripten_bind_PxMaterial_setBaseFlags_1"), xe = b._emscripten_bind_PxMaterial_getBaseFlags_0 = l("emscripten_bind_PxMaterial_getBaseFlags_0"), ye = b._emscripten_bind_PxMaterial_isReleasable_0 = l("emscripten_bind_PxMaterial_isReleasable_0"), ze = b._emscripten_bind_PxPhysics_getFoundation_0 = l("emscripten_bind_PxPhysics_getFoundation_0"), Ae = b._emscripten_bind_PxPhysics_getTolerancesScale_0 = l("emscripten_bind_PxPhysics_getTolerancesScale_0"), Be = b._emscripten_bind_PxPhysics_createScene_1 = 
l("emscripten_bind_PxPhysics_createScene_1"), Ce = b._emscripten_bind_PxPhysics_createRigidStatic_1 = l("emscripten_bind_PxPhysics_createRigidStatic_1"), De = b._emscripten_bind_PxPhysics_createRigidDynamic_1 = l("emscripten_bind_PxPhysics_createRigidDynamic_1"), Ee = b._emscripten_bind_PxPhysics_createShape_2 = l("emscripten_bind_PxPhysics_createShape_2"), Fe = b._emscripten_bind_PxPhysics_createShape_3 = l("emscripten_bind_PxPhysics_createShape_3"), Ge = b._emscripten_bind_PxPhysics_createShape_4 = 
l("emscripten_bind_PxPhysics_createShape_4"), He = b._emscripten_bind_PxPhysics_getNbShapes_0 = l("emscripten_bind_PxPhysics_getNbShapes_0"), Ie = b._emscripten_bind_PxPhysics_createMaterial_3 = l("emscripten_bind_PxPhysics_createMaterial_3"), Je = b._emscripten_bind_PxPhysics_getPhysicsInsertionCallback_0 = l("emscripten_bind_PxPhysics_getPhysicsInsertionCallback_0"), Ke = b._emscripten_bind_PxPhysics___destroy___0 = l("emscripten_bind_PxPhysics___destroy___0"), Le = b._emscripten_bind_PxRigidBodyFlags_PxRigidBodyFlags_1 = 
l("emscripten_bind_PxRigidBodyFlags_PxRigidBodyFlags_1"), Me = b._emscripten_bind_PxRigidBodyFlags_isSet_1 = l("emscripten_bind_PxRigidBodyFlags_isSet_1"), Ne = b._emscripten_bind_PxRigidBodyFlags_set_1 = l("emscripten_bind_PxRigidBodyFlags_set_1"), Oe = b._emscripten_bind_PxRigidBodyFlags_clear_1 = l("emscripten_bind_PxRigidBodyFlags_clear_1"), Pe = b._emscripten_bind_PxRigidBodyFlags___destroy___0 = l("emscripten_bind_PxRigidBodyFlags___destroy___0"), Qe = b._emscripten_bind_PxRigidDynamic_getType_0 = 
l("emscripten_bind_PxRigidDynamic_getType_0"), Re = b._emscripten_bind_PxRigidDynamic_getScene_0 = l("emscripten_bind_PxRigidDynamic_getScene_0"), Se = b._emscripten_bind_PxRigidDynamic_setName_1 = l("emscripten_bind_PxRigidDynamic_setName_1"), Te = b._emscripten_bind_PxRigidDynamic_getName_0 = l("emscripten_bind_PxRigidDynamic_getName_0"), Ue = b._emscripten_bind_PxRigidDynamic_getWorldBounds_0 = l("emscripten_bind_PxRigidDynamic_getWorldBounds_0"), Ve = b._emscripten_bind_PxRigidDynamic_getWorldBounds_1 = 
l("emscripten_bind_PxRigidDynamic_getWorldBounds_1"), We = b._emscripten_bind_PxRigidDynamic_setActorFlags_1 = l("emscripten_bind_PxRigidDynamic_setActorFlags_1"), Xe = b._emscripten_bind_PxRigidDynamic_getActorFlags_0 = l("emscripten_bind_PxRigidDynamic_getActorFlags_0"), Ye = b._emscripten_bind_PxRigidDynamic_setDominanceGroup_1 = l("emscripten_bind_PxRigidDynamic_setDominanceGroup_1"), Ze = b._emscripten_bind_PxRigidDynamic_getDominanceGroup_0 = l("emscripten_bind_PxRigidDynamic_getDominanceGroup_0"), 
$e = b._emscripten_bind_PxRigidDynamic_setOwnerClient_1 = l("emscripten_bind_PxRigidDynamic_setOwnerClient_1"), af = b._emscripten_bind_PxRigidDynamic_getOwnerClient_0 = l("emscripten_bind_PxRigidDynamic_getOwnerClient_0"), bf = b._emscripten_bind_PxRigidDynamic_release_0 = l("emscripten_bind_PxRigidDynamic_release_0"), cf = b._emscripten_bind_PxRigidDynamic_getConcreteTypeName_0 = l("emscripten_bind_PxRigidDynamic_getConcreteTypeName_0"), df = b._emscripten_bind_PxRigidDynamic_getConcreteType_0 = 
l("emscripten_bind_PxRigidDynamic_getConcreteType_0"), ef = b._emscripten_bind_PxRigidDynamic_setBaseFlag_2 = l("emscripten_bind_PxRigidDynamic_setBaseFlag_2"), ff = b._emscripten_bind_PxRigidDynamic_setBaseFlags_1 = l("emscripten_bind_PxRigidDynamic_setBaseFlags_1"), gf = b._emscripten_bind_PxRigidDynamic_getBaseFlags_0 = l("emscripten_bind_PxRigidDynamic_getBaseFlags_0"), hf = b._emscripten_bind_PxRigidDynamic_isReleasable_0 = l("emscripten_bind_PxRigidDynamic_isReleasable_0"), jf = b._emscripten_bind_PxRigidDynamic_getGlobalPose_0 = 
l("emscripten_bind_PxRigidDynamic_getGlobalPose_0"), kf = b._emscripten_bind_PxRigidDynamic_setGlobalPose_1 = l("emscripten_bind_PxRigidDynamic_setGlobalPose_1"), lf = b._emscripten_bind_PxRigidDynamic_setGlobalPose_2 = l("emscripten_bind_PxRigidDynamic_setGlobalPose_2"), mf = b._emscripten_bind_PxRigidDynamic_attachShape_1 = l("emscripten_bind_PxRigidDynamic_attachShape_1"), nf = b._emscripten_bind_PxRigidDynamic_detachShape_1 = l("emscripten_bind_PxRigidDynamic_detachShape_1"), of = b._emscripten_bind_PxRigidDynamic_detachShape_2 = 
l("emscripten_bind_PxRigidDynamic_detachShape_2"), pf = b._emscripten_bind_PxRigidDynamic_getNbShapes_0 = l("emscripten_bind_PxRigidDynamic_getNbShapes_0"), qf = b._emscripten_bind_PxRigidDynamic_getShapes_3 = l("emscripten_bind_PxRigidDynamic_getShapes_3"), rf = b._emscripten_bind_PxRigidDynamic_setCMassLocalPose_1 = l("emscripten_bind_PxRigidDynamic_setCMassLocalPose_1"), sf = b._emscripten_bind_PxRigidDynamic_getCMassLocalPose_0 = l("emscripten_bind_PxRigidDynamic_getCMassLocalPose_0"), tf = b._emscripten_bind_PxRigidDynamic_setMass_1 = 
l("emscripten_bind_PxRigidDynamic_setMass_1"), uf = b._emscripten_bind_PxRigidDynamic_getMass_0 = l("emscripten_bind_PxRigidDynamic_getMass_0"), vf = b._emscripten_bind_PxRigidDynamic_getInvMass_0 = l("emscripten_bind_PxRigidDynamic_getInvMass_0"), wf = b._emscripten_bind_PxRigidDynamic_setMassSpaceInertiaTensor_1 = l("emscripten_bind_PxRigidDynamic_setMassSpaceInertiaTensor_1"), xf = b._emscripten_bind_PxRigidDynamic_getMassSpaceInertiaTensor_0 = l("emscripten_bind_PxRigidDynamic_getMassSpaceInertiaTensor_0"), 
yf = b._emscripten_bind_PxRigidDynamic_getMassSpaceInvInertiaTensor_0 = l("emscripten_bind_PxRigidDynamic_getMassSpaceInvInertiaTensor_0"), zf = b._emscripten_bind_PxRigidDynamic_setLinearDamping_1 = l("emscripten_bind_PxRigidDynamic_setLinearDamping_1"), Af = b._emscripten_bind_PxRigidDynamic_getLinearDamping_0 = l("emscripten_bind_PxRigidDynamic_getLinearDamping_0"), Bf = b._emscripten_bind_PxRigidDynamic_setAngularDamping_1 = l("emscripten_bind_PxRigidDynamic_setAngularDamping_1"), Cf = b._emscripten_bind_PxRigidDynamic_getAngularDamping_0 = 
l("emscripten_bind_PxRigidDynamic_getAngularDamping_0"), Df = b._emscripten_bind_PxRigidDynamic_getLinearVelocity_0 = l("emscripten_bind_PxRigidDynamic_getLinearVelocity_0"), Ef = b._emscripten_bind_PxRigidDynamic_setLinearVelocity_1 = l("emscripten_bind_PxRigidDynamic_setLinearVelocity_1"), Ff = b._emscripten_bind_PxRigidDynamic_setLinearVelocity_2 = l("emscripten_bind_PxRigidDynamic_setLinearVelocity_2"), Gf = b._emscripten_bind_PxRigidDynamic_getAngularVelocity_0 = l("emscripten_bind_PxRigidDynamic_getAngularVelocity_0"), 
Hf = b._emscripten_bind_PxRigidDynamic_setAngularVelocity_1 = l("emscripten_bind_PxRigidDynamic_setAngularVelocity_1"), If = b._emscripten_bind_PxRigidDynamic_setAngularVelocity_2 = l("emscripten_bind_PxRigidDynamic_setAngularVelocity_2"), Jf = b._emscripten_bind_PxRigidDynamic_getMaxLinearVelocity_0 = l("emscripten_bind_PxRigidDynamic_getMaxLinearVelocity_0"), Kf = b._emscripten_bind_PxRigidDynamic_setMaxLinearVelocity_1 = l("emscripten_bind_PxRigidDynamic_setMaxLinearVelocity_1"), Lf = b._emscripten_bind_PxRigidDynamic_getMaxAngularVelocity_0 = 
l("emscripten_bind_PxRigidDynamic_getMaxAngularVelocity_0"), Mf = b._emscripten_bind_PxRigidDynamic_setMaxAngularVelocity_1 = l("emscripten_bind_PxRigidDynamic_setMaxAngularVelocity_1"), Nf = b._emscripten_bind_PxRigidDynamic_addForce_1 = l("emscripten_bind_PxRigidDynamic_addForce_1"), Of = b._emscripten_bind_PxRigidDynamic_addForce_2 = l("emscripten_bind_PxRigidDynamic_addForce_2"), Pf = b._emscripten_bind_PxRigidDynamic_addForce_3 = l("emscripten_bind_PxRigidDynamic_addForce_3"), Qf = b._emscripten_bind_PxRigidDynamic_addTorque_1 = 
l("emscripten_bind_PxRigidDynamic_addTorque_1"), Rf = b._emscripten_bind_PxRigidDynamic_addTorque_2 = l("emscripten_bind_PxRigidDynamic_addTorque_2"), Sf = b._emscripten_bind_PxRigidDynamic_addTorque_3 = l("emscripten_bind_PxRigidDynamic_addTorque_3"), Tf = b._emscripten_bind_PxRigidDynamic_clearForce_1 = l("emscripten_bind_PxRigidDynamic_clearForce_1"), Uf = b._emscripten_bind_PxRigidDynamic_clearTorque_1 = l("emscripten_bind_PxRigidDynamic_clearTorque_1"), Vf = b._emscripten_bind_PxRigidDynamic_setForceAndTorque_2 = 
l("emscripten_bind_PxRigidDynamic_setForceAndTorque_2"), Wf = b._emscripten_bind_PxRigidDynamic_setForceAndTorque_3 = l("emscripten_bind_PxRigidDynamic_setForceAndTorque_3"), Xf = b._emscripten_bind_PxRigidDynamic_setRigidBodyFlag_2 = l("emscripten_bind_PxRigidDynamic_setRigidBodyFlag_2"), Yf = b._emscripten_bind_PxRigidDynamic_setRigidBodyFlags_1 = l("emscripten_bind_PxRigidDynamic_setRigidBodyFlags_1"), Zf = b._emscripten_bind_PxRigidDynamic_getRigidBodyFlags_0 = l("emscripten_bind_PxRigidDynamic_getRigidBodyFlags_0"), 
$f = b._emscripten_bind_PxRigidDynamic_setMinCCDAdvanceCoefficient_1 = l("emscripten_bind_PxRigidDynamic_setMinCCDAdvanceCoefficient_1"), ag = b._emscripten_bind_PxRigidDynamic_getMinCCDAdvanceCoefficient_0 = l("emscripten_bind_PxRigidDynamic_getMinCCDAdvanceCoefficient_0"), bg = b._emscripten_bind_PxRigidDynamic_setMaxDepenetrationVelocity_1 = l("emscripten_bind_PxRigidDynamic_setMaxDepenetrationVelocity_1"), cg = b._emscripten_bind_PxRigidDynamic_getMaxDepenetrationVelocity_0 = l("emscripten_bind_PxRigidDynamic_getMaxDepenetrationVelocity_0"), 
dg = b._emscripten_bind_PxRigidDynamic_setMaxContactImpulse_1 = l("emscripten_bind_PxRigidDynamic_setMaxContactImpulse_1"), eg = b._emscripten_bind_PxRigidDynamic_getMaxContactImpulse_0 = l("emscripten_bind_PxRigidDynamic_getMaxContactImpulse_0"), fg = b._emscripten_bind_PxRigidDynamic_getInternalIslandNodeIndex_0 = l("emscripten_bind_PxRigidDynamic_getInternalIslandNodeIndex_0"), gg = b._emscripten_bind_PxRigidStatic_getType_0 = l("emscripten_bind_PxRigidStatic_getType_0"), hg = b._emscripten_bind_PxRigidStatic_getScene_0 = 
l("emscripten_bind_PxRigidStatic_getScene_0"), ig = b._emscripten_bind_PxRigidStatic_setName_1 = l("emscripten_bind_PxRigidStatic_setName_1"), jg = b._emscripten_bind_PxRigidStatic_getName_0 = l("emscripten_bind_PxRigidStatic_getName_0"), kg = b._emscripten_bind_PxRigidStatic_getWorldBounds_0 = l("emscripten_bind_PxRigidStatic_getWorldBounds_0"), lg = b._emscripten_bind_PxRigidStatic_getWorldBounds_1 = l("emscripten_bind_PxRigidStatic_getWorldBounds_1"), mg = b._emscripten_bind_PxRigidStatic_setActorFlags_1 = 
l("emscripten_bind_PxRigidStatic_setActorFlags_1"), ng = b._emscripten_bind_PxRigidStatic_getActorFlags_0 = l("emscripten_bind_PxRigidStatic_getActorFlags_0"), og = b._emscripten_bind_PxRigidStatic_setDominanceGroup_1 = l("emscripten_bind_PxRigidStatic_setDominanceGroup_1"), pg = b._emscripten_bind_PxRigidStatic_getDominanceGroup_0 = l("emscripten_bind_PxRigidStatic_getDominanceGroup_0"), qg = b._emscripten_bind_PxRigidStatic_setOwnerClient_1 = l("emscripten_bind_PxRigidStatic_setOwnerClient_1"), 
rg = b._emscripten_bind_PxRigidStatic_getOwnerClient_0 = l("emscripten_bind_PxRigidStatic_getOwnerClient_0"), sg = b._emscripten_bind_PxRigidStatic_release_0 = l("emscripten_bind_PxRigidStatic_release_0"), tg = b._emscripten_bind_PxRigidStatic_getConcreteTypeName_0 = l("emscripten_bind_PxRigidStatic_getConcreteTypeName_0"), ug = b._emscripten_bind_PxRigidStatic_getConcreteType_0 = l("emscripten_bind_PxRigidStatic_getConcreteType_0"), vg = b._emscripten_bind_PxRigidStatic_setBaseFlag_2 = l("emscripten_bind_PxRigidStatic_setBaseFlag_2"), 
wg = b._emscripten_bind_PxRigidStatic_setBaseFlags_1 = l("emscripten_bind_PxRigidStatic_setBaseFlags_1"), xg = b._emscripten_bind_PxRigidStatic_getBaseFlags_0 = l("emscripten_bind_PxRigidStatic_getBaseFlags_0"), yg = b._emscripten_bind_PxRigidStatic_isReleasable_0 = l("emscripten_bind_PxRigidStatic_isReleasable_0"), zg = b._emscripten_bind_PxRigidStatic_getGlobalPose_0 = l("emscripten_bind_PxRigidStatic_getGlobalPose_0"), Ag = b._emscripten_bind_PxRigidStatic_setGlobalPose_1 = l("emscripten_bind_PxRigidStatic_setGlobalPose_1"), 
Bg = b._emscripten_bind_PxRigidStatic_setGlobalPose_2 = l("emscripten_bind_PxRigidStatic_setGlobalPose_2"), Cg = b._emscripten_bind_PxRigidStatic_attachShape_1 = l("emscripten_bind_PxRigidStatic_attachShape_1"), Dg = b._emscripten_bind_PxRigidStatic_detachShape_1 = l("emscripten_bind_PxRigidStatic_detachShape_1"), Eg = b._emscripten_bind_PxRigidStatic_detachShape_2 = l("emscripten_bind_PxRigidStatic_detachShape_2"), Fg = b._emscripten_bind_PxRigidStatic_getNbShapes_0 = l("emscripten_bind_PxRigidStatic_getNbShapes_0"), 
Gg = b._emscripten_bind_PxRigidStatic_getShapes_3 = l("emscripten_bind_PxRigidStatic_getShapes_3"), Hg = b._emscripten_bind_PxScene_addActor_1 = l("emscripten_bind_PxScene_addActor_1"), Ig = b._emscripten_bind_PxScene_addActor_2 = l("emscripten_bind_PxScene_addActor_2"), Jg = b._emscripten_bind_PxScene_removeActor_1 = l("emscripten_bind_PxScene_removeActor_1"), Kg = b._emscripten_bind_PxScene_removeActor_2 = l("emscripten_bind_PxScene_removeActor_2"), Lg = b._emscripten_bind_PxScene_simulate_1 = 
l("emscripten_bind_PxScene_simulate_1"), Mg = b._emscripten_bind_PxScene_simulate_2 = l("emscripten_bind_PxScene_simulate_2"), Ng = b._emscripten_bind_PxScene_simulate_3 = l("emscripten_bind_PxScene_simulate_3"), Og = b._emscripten_bind_PxScene_simulate_4 = l("emscripten_bind_PxScene_simulate_4"), Pg = b._emscripten_bind_PxScene_simulate_5 = l("emscripten_bind_PxScene_simulate_5"), Qg = b._emscripten_bind_PxScene_fetchResults_0 = l("emscripten_bind_PxScene_fetchResults_0"), Rg = b._emscripten_bind_PxScene_fetchResults_1 = 
l("emscripten_bind_PxScene_fetchResults_1"), Sg = b._emscripten_bind_PxScene_setGravity_1 = l("emscripten_bind_PxScene_setGravity_1"), Tg = b._emscripten_bind_PxScene_getGravity_0 = l("emscripten_bind_PxScene_getGravity_0"), Ug = b._emscripten_bind_PxSceneDesc_PxSceneDesc_1 = l("emscripten_bind_PxSceneDesc_PxSceneDesc_1"), Vg = b._emscripten_bind_PxSceneDesc_get_gravity_0 = l("emscripten_bind_PxSceneDesc_get_gravity_0"), Wg = b._emscripten_bind_PxSceneDesc_set_gravity_1 = l("emscripten_bind_PxSceneDesc_set_gravity_1"), 
Xg = b._emscripten_bind_PxSceneDesc_get_simulationEventCallback_0 = l("emscripten_bind_PxSceneDesc_get_simulationEventCallback_0"), Yg = b._emscripten_bind_PxSceneDesc_set_simulationEventCallback_1 = l("emscripten_bind_PxSceneDesc_set_simulationEventCallback_1"), Zg = b._emscripten_bind_PxSceneDesc_get_filterShader_0 = l("emscripten_bind_PxSceneDesc_get_filterShader_0"), $g = b._emscripten_bind_PxSceneDesc_set_filterShader_1 = l("emscripten_bind_PxSceneDesc_set_filterShader_1"), ah = b._emscripten_bind_PxSceneDesc_get_cpuDispatcher_0 = 
l("emscripten_bind_PxSceneDesc_get_cpuDispatcher_0"), bh = b._emscripten_bind_PxSceneDesc_set_cpuDispatcher_1 = l("emscripten_bind_PxSceneDesc_set_cpuDispatcher_1"), ch = b._emscripten_bind_PxSceneDesc_get_flags_0 = l("emscripten_bind_PxSceneDesc_get_flags_0"), dh = b._emscripten_bind_PxSceneDesc_set_flags_1 = l("emscripten_bind_PxSceneDesc_set_flags_1"), eh = b._emscripten_bind_PxSceneDesc___destroy___0 = l("emscripten_bind_PxSceneDesc___destroy___0"), fh = b._emscripten_bind_PxSceneFlags_PxSceneFlags_1 = 
l("emscripten_bind_PxSceneFlags_PxSceneFlags_1"), gh = b._emscripten_bind_PxSceneFlags_isSet_1 = l("emscripten_bind_PxSceneFlags_isSet_1"), hh = b._emscripten_bind_PxSceneFlags_set_1 = l("emscripten_bind_PxSceneFlags_set_1"), ih = b._emscripten_bind_PxSceneFlags_clear_1 = l("emscripten_bind_PxSceneFlags_clear_1"), jh = b._emscripten_bind_PxSceneFlags___destroy___0 = l("emscripten_bind_PxSceneFlags___destroy___0"), kh = b._emscripten_bind_PxShape_setLocalPose_1 = l("emscripten_bind_PxShape_setLocalPose_1"), 
lh = b._emscripten_bind_PxShape_getLocalPose_0 = l("emscripten_bind_PxShape_getLocalPose_0"), mh = b._emscripten_bind_PxShape_setSimulationFilterData_1 = l("emscripten_bind_PxShape_setSimulationFilterData_1"), nh = b._emscripten_bind_PxShape_getSimulationFilterData_0 = l("emscripten_bind_PxShape_getSimulationFilterData_0"), oh = b._emscripten_bind_PxShape_release_0 = l("emscripten_bind_PxShape_release_0"), ph = b._emscripten_bind_PxShape_getConcreteTypeName_0 = l("emscripten_bind_PxShape_getConcreteTypeName_0"), 
qh = b._emscripten_bind_PxShape_getConcreteType_0 = l("emscripten_bind_PxShape_getConcreteType_0"), rh = b._emscripten_bind_PxShape_setBaseFlag_2 = l("emscripten_bind_PxShape_setBaseFlag_2"), sh = b._emscripten_bind_PxShape_setBaseFlags_1 = l("emscripten_bind_PxShape_setBaseFlags_1"), th = b._emscripten_bind_PxShape_getBaseFlags_0 = l("emscripten_bind_PxShape_getBaseFlags_0"), uh = b._emscripten_bind_PxShape_isReleasable_0 = l("emscripten_bind_PxShape_isReleasable_0"), vh = b._emscripten_bind_PxShapeFlags_PxShapeFlags_1 = 
l("emscripten_bind_PxShapeFlags_PxShapeFlags_1"), wh = b._emscripten_bind_PxShapeFlags_isSet_1 = l("emscripten_bind_PxShapeFlags_isSet_1"), xh = b._emscripten_bind_PxShapeFlags_set_1 = l("emscripten_bind_PxShapeFlags_set_1"), yh = b._emscripten_bind_PxShapeFlags_clear_1 = l("emscripten_bind_PxShapeFlags_clear_1"), zh = b._emscripten_bind_PxShapeFlags___destroy___0 = l("emscripten_bind_PxShapeFlags___destroy___0"), Ah = b._emscripten_bind_JsPxSimulationEventCallback_JsPxSimulationEventCallback_0 = 
l("emscripten_bind_JsPxSimulationEventCallback_JsPxSimulationEventCallback_0"), Bh = b._emscripten_bind_JsPxSimulationEventCallback_cbFun_1 = l("emscripten_bind_JsPxSimulationEventCallback_cbFun_1"), Ch = b._emscripten_bind_JsPxSimulationEventCallback___destroy___0 = l("emscripten_bind_JsPxSimulationEventCallback___destroy___0"), Dh = b._emscripten_bind_PxSimulationFilterShader___destroy___0 = l("emscripten_bind_PxSimulationFilterShader___destroy___0"), Eh = b._emscripten_bind_PxBoxGeometry_PxBoxGeometry_3 = 
l("emscripten_bind_PxBoxGeometry_PxBoxGeometry_3"), Fh = b._emscripten_bind_PxBoxGeometry___destroy___0 = l("emscripten_bind_PxBoxGeometry___destroy___0"), Gh = b._emscripten_bind_PxBVHStructure_release_0 = l("emscripten_bind_PxBVHStructure_release_0"), Hh = b._emscripten_bind_PxBVHStructure_getConcreteTypeName_0 = l("emscripten_bind_PxBVHStructure_getConcreteTypeName_0"), Ih = b._emscripten_bind_PxBVHStructure_getConcreteType_0 = l("emscripten_bind_PxBVHStructure_getConcreteType_0"), Jh = b._emscripten_bind_PxBVHStructure_setBaseFlag_2 = 
l("emscripten_bind_PxBVHStructure_setBaseFlag_2"), Kh = b._emscripten_bind_PxBVHStructure_setBaseFlags_1 = l("emscripten_bind_PxBVHStructure_setBaseFlags_1"), Lh = b._emscripten_bind_PxBVHStructure_getBaseFlags_0 = l("emscripten_bind_PxBVHStructure_getBaseFlags_0"), Mh = b._emscripten_bind_PxBVHStructure_isReleasable_0 = l("emscripten_bind_PxBVHStructure_isReleasable_0"), Nh = b._emscripten_bind_PxCapsuleGeometry_PxCapsuleGeometry_2 = l("emscripten_bind_PxCapsuleGeometry_PxCapsuleGeometry_2"), Oh = 
b._emscripten_bind_PxCapsuleGeometry___destroy___0 = l("emscripten_bind_PxCapsuleGeometry___destroy___0"), Ph = b._emscripten_bind_PxConvexMesh_getNbVertices_0 = l("emscripten_bind_PxConvexMesh_getNbVertices_0"), Qh = b._emscripten_bind_PxConvexMesh_getVertices_0 = l("emscripten_bind_PxConvexMesh_getVertices_0"), Rh = b._emscripten_bind_PxConvexMesh_getIndexBuffer_0 = l("emscripten_bind_PxConvexMesh_getIndexBuffer_0"), Sh = b._emscripten_bind_PxConvexMesh_getNbPolygons_0 = l("emscripten_bind_PxConvexMesh_getNbPolygons_0"), 
Th = b._emscripten_bind_PxConvexMesh_getPolygonData_2 = l("emscripten_bind_PxConvexMesh_getPolygonData_2"), Uh = b._emscripten_bind_PxConvexMesh_release_0 = l("emscripten_bind_PxConvexMesh_release_0"), Vh = b._emscripten_bind_PxConvexMesh_getConcreteTypeName_0 = l("emscripten_bind_PxConvexMesh_getConcreteTypeName_0"), Wh = b._emscripten_bind_PxConvexMesh_getConcreteType_0 = l("emscripten_bind_PxConvexMesh_getConcreteType_0"), Xh = b._emscripten_bind_PxConvexMesh_setBaseFlag_2 = l("emscripten_bind_PxConvexMesh_setBaseFlag_2"), 
Yh = b._emscripten_bind_PxConvexMesh_setBaseFlags_1 = l("emscripten_bind_PxConvexMesh_setBaseFlags_1"), Zh = b._emscripten_bind_PxConvexMesh_getBaseFlags_0 = l("emscripten_bind_PxConvexMesh_getBaseFlags_0"), $h = b._emscripten_bind_PxConvexMesh_isReleasable_0 = l("emscripten_bind_PxConvexMesh_isReleasable_0"), ai = b._emscripten_bind_PxConvexMeshGeometry_PxConvexMeshGeometry_1 = l("emscripten_bind_PxConvexMeshGeometry_PxConvexMeshGeometry_1"), bi = b._emscripten_bind_PxConvexMeshGeometry_PxConvexMeshGeometry_2 = 
l("emscripten_bind_PxConvexMeshGeometry_PxConvexMeshGeometry_2"), ci = b._emscripten_bind_PxConvexMeshGeometry_PxConvexMeshGeometry_3 = l("emscripten_bind_PxConvexMeshGeometry_PxConvexMeshGeometry_3"), di = b._emscripten_bind_PxConvexMeshGeometry___destroy___0 = l("emscripten_bind_PxConvexMeshGeometry___destroy___0"), ei = b._emscripten_bind_PxConvexMeshGeometryFlags_PxConvexMeshGeometryFlags_1 = l("emscripten_bind_PxConvexMeshGeometryFlags_PxConvexMeshGeometryFlags_1"), fi = b._emscripten_bind_PxConvexMeshGeometryFlags_isSet_1 = 
l("emscripten_bind_PxConvexMeshGeometryFlags_isSet_1"), gi = b._emscripten_bind_PxConvexMeshGeometryFlags_set_1 = l("emscripten_bind_PxConvexMeshGeometryFlags_set_1"), hi = b._emscripten_bind_PxConvexMeshGeometryFlags_clear_1 = l("emscripten_bind_PxConvexMeshGeometryFlags_clear_1"), ii = b._emscripten_bind_PxConvexMeshGeometryFlags___destroy___0 = l("emscripten_bind_PxConvexMeshGeometryFlags___destroy___0"), ji = b._emscripten_bind_PxHullPolygon_PxHullPolygon_0 = l("emscripten_bind_PxHullPolygon_PxHullPolygon_0"), 
ki = b._emscripten_bind_PxHullPolygon_get_mPlane_1 = l("emscripten_bind_PxHullPolygon_get_mPlane_1"), li = b._emscripten_bind_PxHullPolygon_set_mPlane_2 = l("emscripten_bind_PxHullPolygon_set_mPlane_2"), mi = b._emscripten_bind_PxHullPolygon_get_mNbVerts_0 = l("emscripten_bind_PxHullPolygon_get_mNbVerts_0"), ni = b._emscripten_bind_PxHullPolygon_set_mNbVerts_1 = l("emscripten_bind_PxHullPolygon_set_mNbVerts_1"), oi = b._emscripten_bind_PxHullPolygon_get_mIndexBase_0 = l("emscripten_bind_PxHullPolygon_get_mIndexBase_0"), 
pi = b._emscripten_bind_PxHullPolygon_set_mIndexBase_1 = l("emscripten_bind_PxHullPolygon_set_mIndexBase_1"), qi = b._emscripten_bind_PxHullPolygon___destroy___0 = l("emscripten_bind_PxHullPolygon___destroy___0"), ri = b._emscripten_bind_PxMeshScale_PxMeshScale_0 = l("emscripten_bind_PxMeshScale_PxMeshScale_0"), si = b._emscripten_bind_PxMeshScale_PxMeshScale_1 = l("emscripten_bind_PxMeshScale_PxMeshScale_1"), ti = b._emscripten_bind_PxMeshScale_PxMeshScale_2 = l("emscripten_bind_PxMeshScale_PxMeshScale_2"), 
ui = b._emscripten_bind_PxMeshScale___destroy___0 = l("emscripten_bind_PxMeshScale___destroy___0"), vi = b._emscripten_bind_PxPlaneGeometry_PxPlaneGeometry_0 = l("emscripten_bind_PxPlaneGeometry_PxPlaneGeometry_0"), wi = b._emscripten_bind_PxPlaneGeometry___destroy___0 = l("emscripten_bind_PxPlaneGeometry___destroy___0"), xi = b._emscripten_bind_PxSphereGeometry_PxSphereGeometry_1 = l("emscripten_bind_PxSphereGeometry_PxSphereGeometry_1"), yi = b._emscripten_bind_PxSphereGeometry___destroy___0 = 
l("emscripten_bind_PxSphereGeometry___destroy___0"), zi = b._emscripten_bind_PxConvexFlags_PxConvexFlags_1 = l("emscripten_bind_PxConvexFlags_PxConvexFlags_1"), Ai = b._emscripten_bind_PxConvexFlags_isSet_1 = l("emscripten_bind_PxConvexFlags_isSet_1"), Bi = b._emscripten_bind_PxConvexFlags_set_1 = l("emscripten_bind_PxConvexFlags_set_1"), Ci = b._emscripten_bind_PxConvexFlags_clear_1 = l("emscripten_bind_PxConvexFlags_clear_1"), Di = b._emscripten_bind_PxConvexFlags___destroy___0 = l("emscripten_bind_PxConvexFlags___destroy___0"), 
Ei = b._emscripten_bind_PxConvexMeshDesc_PxConvexMeshDesc_0 = l("emscripten_bind_PxConvexMeshDesc_PxConvexMeshDesc_0"), Fi = b._emscripten_bind_PxConvexMeshDesc_get_points_0 = l("emscripten_bind_PxConvexMeshDesc_get_points_0"), Gi = b._emscripten_bind_PxConvexMeshDesc_set_points_1 = l("emscripten_bind_PxConvexMeshDesc_set_points_1"), Hi = b._emscripten_bind_PxConvexMeshDesc_get_flags_0 = l("emscripten_bind_PxConvexMeshDesc_get_flags_0"), Ii = b._emscripten_bind_PxConvexMeshDesc_set_flags_1 = l("emscripten_bind_PxConvexMeshDesc_set_flags_1"), 
Ji = b._emscripten_bind_PxConvexMeshDesc___destroy___0 = l("emscripten_bind_PxConvexMeshDesc___destroy___0"), Ki = b._emscripten_bind_PxCooking_createConvexMesh_2 = l("emscripten_bind_PxCooking_createConvexMesh_2"), Li = b._emscripten_bind_PxCookingParams_PxCookingParams_1 = l("emscripten_bind_PxCookingParams_PxCookingParams_1"), Mi = b._emscripten_bind_PxCookingParams___destroy___0 = l("emscripten_bind_PxCookingParams___destroy___0"), Ni = b._emscripten_bind_PxBaseFlags_PxBaseFlags_1 = l("emscripten_bind_PxBaseFlags_PxBaseFlags_1"), 
Oi = b._emscripten_bind_PxBaseFlags_isSet_1 = l("emscripten_bind_PxBaseFlags_isSet_1"), Pi = b._emscripten_bind_PxBaseFlags_set_1 = l("emscripten_bind_PxBaseFlags_set_1"), Qi = b._emscripten_bind_PxBaseFlags_clear_1 = l("emscripten_bind_PxBaseFlags_clear_1"), Ri = b._emscripten_bind_PxBaseFlags___destroy___0 = l("emscripten_bind_PxBaseFlags___destroy___0"), Si = b._emscripten_bind_PxBaseTask___destroy___0 = l("emscripten_bind_PxBaseTask___destroy___0"), Ti = b._emscripten_bind_PxBoundedData_get_count_0 = 
l("emscripten_bind_PxBoundedData_get_count_0"), Ui = b._emscripten_bind_PxBoundedData_set_count_1 = l("emscripten_bind_PxBoundedData_set_count_1"), Vi = b._emscripten_bind_PxBoundedData_get_stride_0 = l("emscripten_bind_PxBoundedData_get_stride_0"), Wi = b._emscripten_bind_PxBoundedData_set_stride_1 = l("emscripten_bind_PxBoundedData_set_stride_1"), Xi = b._emscripten_bind_PxBoundedData_get_data_0 = l("emscripten_bind_PxBoundedData_get_data_0"), Yi = b._emscripten_bind_PxBoundedData_set_data_1 = 
l("emscripten_bind_PxBoundedData_set_data_1"), Zi = b._emscripten_bind_PxBoundedData___destroy___0 = l("emscripten_bind_PxBoundedData___destroy___0"), $i = b._emscripten_bind_PxBounds3_PxBounds3_0 = l("emscripten_bind_PxBounds3_PxBounds3_0"), aj = b._emscripten_bind_PxBounds3_PxBounds3_2 = l("emscripten_bind_PxBounds3_PxBounds3_2"), bj = b._emscripten_bind_PxBounds3_setEmpty_0 = l("emscripten_bind_PxBounds3_setEmpty_0"), cj = b._emscripten_bind_PxBounds3_setMaximal_0 = l("emscripten_bind_PxBounds3_setMaximal_0"), 
dj = b._emscripten_bind_PxBounds3_include_1 = l("emscripten_bind_PxBounds3_include_1"), ej = b._emscripten_bind_PxBounds3_isEmpty_0 = l("emscripten_bind_PxBounds3_isEmpty_0"), fj = b._emscripten_bind_PxBounds3_intersects_1 = l("emscripten_bind_PxBounds3_intersects_1"), gj = b._emscripten_bind_PxBounds3_intersects1D_2 = l("emscripten_bind_PxBounds3_intersects1D_2"), hj = b._emscripten_bind_PxBounds3_contains_1 = l("emscripten_bind_PxBounds3_contains_1"), ij = b._emscripten_bind_PxBounds3_isInside_1 = 
l("emscripten_bind_PxBounds3_isInside_1"), jj = b._emscripten_bind_PxBounds3_getCenter_0 = l("emscripten_bind_PxBounds3_getCenter_0"), kj = b._emscripten_bind_PxBounds3_getDimensions_0 = l("emscripten_bind_PxBounds3_getDimensions_0"), lj = b._emscripten_bind_PxBounds3_getExtents_0 = l("emscripten_bind_PxBounds3_getExtents_0"), mj = b._emscripten_bind_PxBounds3_scaleSafe_1 = l("emscripten_bind_PxBounds3_scaleSafe_1"), nj = b._emscripten_bind_PxBounds3_scaleFast_1 = l("emscripten_bind_PxBounds3_scaleFast_1"), 
oj = b._emscripten_bind_PxBounds3_fattenSafe_1 = l("emscripten_bind_PxBounds3_fattenSafe_1"), pj = b._emscripten_bind_PxBounds3_fattenFast_1 = l("emscripten_bind_PxBounds3_fattenFast_1"), qj = b._emscripten_bind_PxBounds3_isFinite_0 = l("emscripten_bind_PxBounds3_isFinite_0"), rj = b._emscripten_bind_PxBounds3_isValid_0 = l("emscripten_bind_PxBounds3_isValid_0"), sj = b._emscripten_bind_PxBounds3_get_minimum_0 = l("emscripten_bind_PxBounds3_get_minimum_0"), tj = b._emscripten_bind_PxBounds3_set_minimum_1 = 
l("emscripten_bind_PxBounds3_set_minimum_1"), uj = b._emscripten_bind_PxBounds3_get_maximum_0 = l("emscripten_bind_PxBounds3_get_maximum_0"), vj = b._emscripten_bind_PxBounds3_set_maximum_1 = l("emscripten_bind_PxBounds3_set_maximum_1"), wj = b._emscripten_bind_PxBounds3___destroy___0 = l("emscripten_bind_PxBounds3___destroy___0"), xj = b._emscripten_bind_PxDefaultErrorCallback_PxDefaultErrorCallback_0 = l("emscripten_bind_PxDefaultErrorCallback_PxDefaultErrorCallback_0"), yj = b._emscripten_bind_PxDefaultErrorCallback___destroy___0 = 
l("emscripten_bind_PxDefaultErrorCallback___destroy___0"), zj = b._emscripten_bind_PxQuat_PxQuat_0 = l("emscripten_bind_PxQuat_PxQuat_0"), Aj = b._emscripten_bind_PxQuat_PxQuat_4 = l("emscripten_bind_PxQuat_PxQuat_4"), Bj = b._emscripten_bind_PxQuat_get_x_0 = l("emscripten_bind_PxQuat_get_x_0"), Cj = b._emscripten_bind_PxQuat_set_x_1 = l("emscripten_bind_PxQuat_set_x_1"), Dj = b._emscripten_bind_PxQuat_get_y_0 = l("emscripten_bind_PxQuat_get_y_0"), Ej = b._emscripten_bind_PxQuat_set_y_1 = l("emscripten_bind_PxQuat_set_y_1"), 
Fj = b._emscripten_bind_PxQuat_get_z_0 = l("emscripten_bind_PxQuat_get_z_0"), Gj = b._emscripten_bind_PxQuat_set_z_1 = l("emscripten_bind_PxQuat_set_z_1"), Hj = b._emscripten_bind_PxQuat_get_w_0 = l("emscripten_bind_PxQuat_get_w_0"), Ij = b._emscripten_bind_PxQuat_set_w_1 = l("emscripten_bind_PxQuat_set_w_1"), Jj = b._emscripten_bind_PxQuat___destroy___0 = l("emscripten_bind_PxQuat___destroy___0"), Kj = b._emscripten_bind_PxTolerancesScale_PxTolerancesScale_0 = l("emscripten_bind_PxTolerancesScale_PxTolerancesScale_0"), 
Lj = b._emscripten_bind_PxTolerancesScale___destroy___0 = l("emscripten_bind_PxTolerancesScale___destroy___0"), Mj = b._emscripten_bind_PxTransform_PxTransform_0 = l("emscripten_bind_PxTransform_PxTransform_0"), Nj = b._emscripten_bind_PxTransform_PxTransform_2 = l("emscripten_bind_PxTransform_PxTransform_2"), Oj = b._emscripten_bind_PxTransform_get_q_0 = l("emscripten_bind_PxTransform_get_q_0"), Pj = b._emscripten_bind_PxTransform_set_q_1 = l("emscripten_bind_PxTransform_set_q_1"), Qj = b._emscripten_bind_PxTransform_get_p_0 = 
l("emscripten_bind_PxTransform_get_p_0"), Rj = b._emscripten_bind_PxTransform_set_p_1 = l("emscripten_bind_PxTransform_set_p_1"), Sj = b._emscripten_bind_PxTransform___destroy___0 = l("emscripten_bind_PxTransform___destroy___0"), Tj = b._emscripten_bind_PxVec3_PxVec3_0 = l("emscripten_bind_PxVec3_PxVec3_0"), Uj = b._emscripten_bind_PxVec3_PxVec3_3 = l("emscripten_bind_PxVec3_PxVec3_3"), Vj = b._emscripten_bind_PxVec3_get_x_0 = l("emscripten_bind_PxVec3_get_x_0"), Wj = b._emscripten_bind_PxVec3_set_x_1 = 
l("emscripten_bind_PxVec3_set_x_1"), Xj = b._emscripten_bind_PxVec3_get_y_0 = l("emscripten_bind_PxVec3_get_y_0"), Yj = b._emscripten_bind_PxVec3_set_y_1 = l("emscripten_bind_PxVec3_set_y_1"), Zj = b._emscripten_bind_PxVec3_get_z_0 = l("emscripten_bind_PxVec3_get_z_0"), ak = b._emscripten_bind_PxVec3_set_z_1 = l("emscripten_bind_PxVec3_set_z_1"), bk = b._emscripten_bind_PxVec3___destroy___0 = l("emscripten_bind_PxVec3___destroy___0"), ck = b._emscripten_bind_PxDefaultAllocator_PxDefaultAllocator_0 = 
l("emscripten_bind_PxDefaultAllocator_PxDefaultAllocator_0"), dk = b._emscripten_bind_PxDefaultAllocator___destroy___0 = l("emscripten_bind_PxDefaultAllocator___destroy___0"), ek = b._emscripten_bind_PxDefaultCpuDispatcher___destroy___0 = l("emscripten_bind_PxDefaultCpuDispatcher___destroy___0"), fk = b._emscripten_bind_PxJoint_release_0 = l("emscripten_bind_PxJoint_release_0"), gk = b._emscripten_bind_PxJoint_getConcreteTypeName_0 = l("emscripten_bind_PxJoint_getConcreteTypeName_0"), hk = b._emscripten_bind_PxJoint_getConcreteType_0 = 
l("emscripten_bind_PxJoint_getConcreteType_0"), ik = b._emscripten_bind_PxJoint_setBaseFlag_2 = l("emscripten_bind_PxJoint_setBaseFlag_2"), jk = b._emscripten_bind_PxJoint_setBaseFlags_1 = l("emscripten_bind_PxJoint_setBaseFlags_1"), kk = b._emscripten_bind_PxJoint_getBaseFlags_0 = l("emscripten_bind_PxJoint_getBaseFlags_0"), lk = b._emscripten_bind_PxJoint_isReleasable_0 = l("emscripten_bind_PxJoint_isReleasable_0"), mk = b._emscripten_bind_PxRevoluteJoint_setDriveVelocity_1 = l("emscripten_bind_PxRevoluteJoint_setDriveVelocity_1"), 
nk = b._emscripten_bind_PxRevoluteJoint_setDriveVelocity_2 = l("emscripten_bind_PxRevoluteJoint_setDriveVelocity_2"), ok = b._emscripten_bind_PxRevoluteJoint_getDriveVelocity_0 = l("emscripten_bind_PxRevoluteJoint_getDriveVelocity_0"), pk = b._emscripten_bind_PxRevoluteJoint_setDriveForceLimit_1 = l("emscripten_bind_PxRevoluteJoint_setDriveForceLimit_1"), qk = b._emscripten_bind_PxRevoluteJoint_getDriveForceLimit_0 = l("emscripten_bind_PxRevoluteJoint_getDriveForceLimit_0"), rk = b._emscripten_bind_PxRevoluteJoint_setDriveGearRatio_1 = 
l("emscripten_bind_PxRevoluteJoint_setDriveGearRatio_1"), sk = b._emscripten_bind_PxRevoluteJoint_getDriveGearRatio_0 = l("emscripten_bind_PxRevoluteJoint_getDriveGearRatio_0"), tk = b._emscripten_bind_PxRevoluteJoint_setRevoluteJointFlags_1 = l("emscripten_bind_PxRevoluteJoint_setRevoluteJointFlags_1"), uk = b._emscripten_bind_PxRevoluteJoint_getRevoluteJointFlags_0 = l("emscripten_bind_PxRevoluteJoint_getRevoluteJointFlags_0"), vk = b._emscripten_bind_PxRevoluteJoint___destroy___0 = l("emscripten_bind_PxRevoluteJoint___destroy___0"), 
wk = b._emscripten_bind_PxRevoluteJointFlags_PxRevoluteJointFlags_1 = l("emscripten_bind_PxRevoluteJointFlags_PxRevoluteJointFlags_1"), xk = b._emscripten_bind_PxRevoluteJointFlags_isSet_1 = l("emscripten_bind_PxRevoluteJointFlags_isSet_1"), yk = b._emscripten_bind_PxRevoluteJointFlags_set_1 = l("emscripten_bind_PxRevoluteJointFlags_set_1"), zk = b._emscripten_bind_PxRevoluteJointFlags_clear_1 = l("emscripten_bind_PxRevoluteJointFlags_clear_1"), Ak = b._emscripten_bind_PxRevoluteJointFlags___destroy___0 = 
l("emscripten_bind_PxRevoluteJointFlags___destroy___0"), Bk = b._emscripten_bind_VectorPxVec3_VectorPxVec3_0 = l("emscripten_bind_VectorPxVec3_VectorPxVec3_0"), Ck = b._emscripten_bind_VectorPxVec3_data_0 = l("emscripten_bind_VectorPxVec3_data_0"), Dk = b._emscripten_bind_VectorPxVec3_size_0 = l("emscripten_bind_VectorPxVec3_size_0"), Ek = b._emscripten_bind_VectorPxVec3_push_back_1 = l("emscripten_bind_VectorPxVec3_push_back_1"), Fk = b._emscripten_bind_VectorPxVec3___destroy___0 = l("emscripten_bind_VectorPxVec3___destroy___0"), 
Gk = b._emscripten_enum_physx_PxActorFlag_eVISUALIZATION = l("emscripten_enum_physx_PxActorFlag_eVISUALIZATION"), Hk = b._emscripten_enum_physx_PxActorFlag_eDISABLE_GRAVITY = l("emscripten_enum_physx_PxActorFlag_eDISABLE_GRAVITY"), Ik = b._emscripten_enum_physx_PxActorFlag_eSEND_SLEEP_NOTIFIES = l("emscripten_enum_physx_PxActorFlag_eSEND_SLEEP_NOTIFIES"), Jk = b._emscripten_enum_physx_PxActorFlag_eDISABLE_SIMULATION = l("emscripten_enum_physx_PxActorFlag_eDISABLE_SIMULATION"), Kk = b._emscripten_enum_physx_PxActorType_eRIGID_STATIC = 
l("emscripten_enum_physx_PxActorType_eRIGID_STATIC"), Lk = b._emscripten_enum_physx_PxActorType_eRIGID_DYNAMIC = l("emscripten_enum_physx_PxActorType_eRIGID_DYNAMIC"), Mk = b._emscripten_enum_physx_PxActorType_eARTICULATION_LINK = l("emscripten_enum_physx_PxActorType_eARTICULATION_LINK"), Nk = b._emscripten_enum_physx_PxActorType_eACTOR_COUNT = l("emscripten_enum_physx_PxActorType_eACTOR_COUNT"), Ok = b._emscripten_enum_physx_PxActorType_eACTOR_FORCE_DWORD = l("emscripten_enum_physx_PxActorType_eACTOR_FORCE_DWORD"), 
Pk = b._emscripten_enum_physx_PxForceMode_eFORCE = l("emscripten_enum_physx_PxForceMode_eFORCE"), Qk = b._emscripten_enum_physx_PxForceMode_eIMPULSE = l("emscripten_enum_physx_PxForceMode_eIMPULSE"), Rk = b._emscripten_enum_physx_PxForceMode_eVELOCITY_CHANGE = l("emscripten_enum_physx_PxForceMode_eVELOCITY_CHANGE"), Sk = b._emscripten_enum_physx_PxForceMode_eACCELERATION = l("emscripten_enum_physx_PxForceMode_eACCELERATION"), Tk = b._emscripten_enum_physx_PxRigidBodyFlag_eKINEMATIC = l("emscripten_enum_physx_PxRigidBodyFlag_eKINEMATIC"), 
Uk = b._emscripten_enum_physx_PxRigidBodyFlag_eUSE_KINEMATIC_TARGET_FOR_SCENE_QUERIES = l("emscripten_enum_physx_PxRigidBodyFlag_eUSE_KINEMATIC_TARGET_FOR_SCENE_QUERIES"), Vk = b._emscripten_enum_physx_PxRigidBodyFlag_eENABLE_CCD = l("emscripten_enum_physx_PxRigidBodyFlag_eENABLE_CCD"), Wk = b._emscripten_enum_physx_PxRigidBodyFlag_eENABLE_CCD_FRICTION = l("emscripten_enum_physx_PxRigidBodyFlag_eENABLE_CCD_FRICTION"), Xk = b._emscripten_enum_physx_PxRigidBodyFlag_eENABLE_POSE_INTEGRATION_PREVIEW = 
l("emscripten_enum_physx_PxRigidBodyFlag_eENABLE_POSE_INTEGRATION_PREVIEW"), Yk = b._emscripten_enum_physx_PxRigidBodyFlag_eENABLE_SPECULATIVE_CCD = l("emscripten_enum_physx_PxRigidBodyFlag_eENABLE_SPECULATIVE_CCD"), Zk = b._emscripten_enum_physx_PxRigidBodyFlag_eENABLE_CCD_MAX_CONTACT_IMPULSE = l("emscripten_enum_physx_PxRigidBodyFlag_eENABLE_CCD_MAX_CONTACT_IMPULSE"), $k = b._emscripten_enum_physx_PxRigidBodyFlag_eRETAIN_ACCELERATIONS = l("emscripten_enum_physx_PxRigidBodyFlag_eRETAIN_ACCELERATIONS"), 
al = b._emscripten_enum_physx_PxSceneFlag_eENABLE_ACTIVE_ACTORS = l("emscripten_enum_physx_PxSceneFlag_eENABLE_ACTIVE_ACTORS"), bl = b._emscripten_enum_physx_PxSceneFlag_eENABLE_CCD = l("emscripten_enum_physx_PxSceneFlag_eENABLE_CCD"), cl = b._emscripten_enum_physx_PxSceneFlag_eDISABLE_CCD_RESWEEP = l("emscripten_enum_physx_PxSceneFlag_eDISABLE_CCD_RESWEEP"), dl = b._emscripten_enum_physx_PxSceneFlag_eADAPTIVE_FORCE = l("emscripten_enum_physx_PxSceneFlag_eADAPTIVE_FORCE"), el = b._emscripten_enum_physx_PxSceneFlag_eENABLE_PCM = 
l("emscripten_enum_physx_PxSceneFlag_eENABLE_PCM"), fl = b._emscripten_enum_physx_PxSceneFlag_eDISABLE_CONTACT_REPORT_BUFFER_RESIZE = l("emscripten_enum_physx_PxSceneFlag_eDISABLE_CONTACT_REPORT_BUFFER_RESIZE"), gl = b._emscripten_enum_physx_PxSceneFlag_eDISABLE_CONTACT_CACHE = l("emscripten_enum_physx_PxSceneFlag_eDISABLE_CONTACT_CACHE"), hl = b._emscripten_enum_physx_PxSceneFlag_eREQUIRE_RW_LOCK = l("emscripten_enum_physx_PxSceneFlag_eREQUIRE_RW_LOCK"), il = b._emscripten_enum_physx_PxSceneFlag_eENABLE_STABILIZATION = 
l("emscripten_enum_physx_PxSceneFlag_eENABLE_STABILIZATION"), jl = b._emscripten_enum_physx_PxSceneFlag_eENABLE_AVERAGE_POINT = l("emscripten_enum_physx_PxSceneFlag_eENABLE_AVERAGE_POINT"), kl = b._emscripten_enum_physx_PxSceneFlag_eEXCLUDE_KINEMATICS_FROM_ACTIVE_ACTORS = l("emscripten_enum_physx_PxSceneFlag_eEXCLUDE_KINEMATICS_FROM_ACTIVE_ACTORS"), ll = b._emscripten_enum_physx_PxSceneFlag_eENABLE_GPU_DYNAMICS = l("emscripten_enum_physx_PxSceneFlag_eENABLE_GPU_DYNAMICS"), ml = b._emscripten_enum_physx_PxSceneFlag_eENABLE_ENHANCED_DETERMINISM = 
l("emscripten_enum_physx_PxSceneFlag_eENABLE_ENHANCED_DETERMINISM"), nl = b._emscripten_enum_physx_PxSceneFlag_eENABLE_FRICTION_EVERY_ITERATION = l("emscripten_enum_physx_PxSceneFlag_eENABLE_FRICTION_EVERY_ITERATION"), ol = b._emscripten_enum_physx_PxSceneFlag_eMUTABLE_FLAGS = l("emscripten_enum_physx_PxSceneFlag_eMUTABLE_FLAGS"), pl = b._emscripten_enum_physx_PxShapeFlag_eSIMULATION_SHAPE = l("emscripten_enum_physx_PxShapeFlag_eSIMULATION_SHAPE"), ql = b._emscripten_enum_physx_PxShapeFlag_eSCENE_QUERY_SHAPE = 
l("emscripten_enum_physx_PxShapeFlag_eSCENE_QUERY_SHAPE"), rl = b._emscripten_enum_physx_PxShapeFlag_eTRIGGER_SHAPE = l("emscripten_enum_physx_PxShapeFlag_eTRIGGER_SHAPE"), sl = b._emscripten_enum_physx_PxShapeFlag_eVISUALIZATION = l("emscripten_enum_physx_PxShapeFlag_eVISUALIZATION"), tl = b._emscripten_enum_physx_PxConvexMeshGeometryFlag_eTIGHT_BOUNDS = l("emscripten_enum_physx_PxConvexMeshGeometryFlag_eTIGHT_BOUNDS"), ul = b._emscripten_enum_physx_PxConvexFlag_e16_BIT_INDICES = l("emscripten_enum_physx_PxConvexFlag_e16_BIT_INDICES"), 
vl = b._emscripten_enum_physx_PxConvexFlag_eCOMPUTE_CONVEX = l("emscripten_enum_physx_PxConvexFlag_eCOMPUTE_CONVEX"), wl = b._emscripten_enum_physx_PxConvexFlag_eCHECK_ZERO_AREA_TRIANGLES = l("emscripten_enum_physx_PxConvexFlag_eCHECK_ZERO_AREA_TRIANGLES"), xl = b._emscripten_enum_physx_PxConvexFlag_eQUANTIZE_INPUT = l("emscripten_enum_physx_PxConvexFlag_eQUANTIZE_INPUT"), yl = b._emscripten_enum_physx_PxConvexFlag_eDISABLE_MESH_VALIDATION = l("emscripten_enum_physx_PxConvexFlag_eDISABLE_MESH_VALIDATION"), 
zl = b._emscripten_enum_physx_PxConvexFlag_ePLANE_SHIFTING = l("emscripten_enum_physx_PxConvexFlag_ePLANE_SHIFTING"), Al = b._emscripten_enum_physx_PxConvexFlag_eFAST_INERTIA_COMPUTATION = l("emscripten_enum_physx_PxConvexFlag_eFAST_INERTIA_COMPUTATION"), Bl = b._emscripten_enum_physx_PxConvexFlag_eGPU_COMPATIBLE = l("emscripten_enum_physx_PxConvexFlag_eGPU_COMPATIBLE"), Cl = b._emscripten_enum_physx_PxConvexFlag_eSHIFT_VERTICES = l("emscripten_enum_physx_PxConvexFlag_eSHIFT_VERTICES"), Dl = b._emscripten_enum_physx_PxBaseFlag_eOWNS_MEMORY = 
l("emscripten_enum_physx_PxBaseFlag_eOWNS_MEMORY"), El = b._emscripten_enum_physx_PxBaseFlag_eIS_RELEASABLE = l("emscripten_enum_physx_PxBaseFlag_eIS_RELEASABLE"), Fl = b._emscripten_enum_physx_PxRevoluteJointFlag_eLIMIT_ENABLED = l("emscripten_enum_physx_PxRevoluteJointFlag_eLIMIT_ENABLED"), Gl = b._emscripten_enum_physx_PxRevoluteJointFlag_eDRIVE_ENABLED = l("emscripten_enum_physx_PxRevoluteJointFlag_eDRIVE_ENABLED"), Hl = b._emscripten_enum_physx_PxRevoluteJointFlag_eDRIVE_FREESPIN = l("emscripten_enum_physx_PxRevoluteJointFlag_eDRIVE_FREESPIN");
b._free = l("free");
b._memcpy = l("memcpy");
b._ntohs = l("ntohs");
b._htons = l("htons");
b._htonl = l("htonl");
var pb = b.___errno_location = l("__errno_location"), ob = b._malloc = l("malloc");
b.stackSave = l("stackSave");
b.stackRestore = l("stackRestore");
b.stackAlloc = l("stackAlloc");
b._setThrew = l("setThrew");
b._emscripten_main_thread_process_queued_calls = l("emscripten_main_thread_process_queued_calls");
b.dynCall_iifiiiijii = l("dynCall_iifiiiijii");
b.dynCall_vifijii = l("dynCall_vifijii");
b.dynCall_jiji = l("dynCall_jiji");
Object.getOwnPropertyDescriptor(b, "intArrayFromString") || (b.intArrayFromString = function() {
  d("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "intArrayToString") || (b.intArrayToString = function() {
  d("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ccall") || (b.ccall = function() {
  d("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "cwrap") || (b.cwrap = function() {
  d("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "setValue") || (b.setValue = function() {
  d("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getValue") || (b.getValue = function() {
  d("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "allocate") || (b.allocate = function() {
  d("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UTF8ArrayToString") || (b.UTF8ArrayToString = function() {
  d("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UTF8ToString") || (b.UTF8ToString = function() {
  d("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToUTF8Array") || (b.stringToUTF8Array = function() {
  d("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToUTF8") || (b.stringToUTF8 = function() {
  d("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "lengthBytesUTF8") || (b.lengthBytesUTF8 = function() {
  d("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackTrace") || (b.stackTrace = function() {
  d("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnPreRun") || (b.addOnPreRun = function() {
  d("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnInit") || (b.addOnInit = function() {
  d("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnPreMain") || (b.addOnPreMain = function() {
  d("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnExit") || (b.addOnExit = function() {
  d("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnPostRun") || (b.addOnPostRun = function() {
  d("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeStringToMemory") || (b.writeStringToMemory = function() {
  d("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeArrayToMemory") || (b.writeArrayToMemory = function() {
  d("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeAsciiToMemory") || (b.writeAsciiToMemory = function() {
  d("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addRunDependency") || (b.addRunDependency = function() {
  d("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "removeRunDependency") || (b.removeRunDependency = function() {
  d("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createFolder") || (b.FS_createFolder = function() {
  d("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "FS_createPath") || (b.FS_createPath = function() {
  d("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createDataFile") || (b.FS_createDataFile = function() {
  d("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createPreloadedFile") || (b.FS_createPreloadedFile = function() {
  d("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createLazyFile") || (b.FS_createLazyFile = function() {
  d("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createLink") || (b.FS_createLink = function() {
  d("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "FS_createDevice") || (b.FS_createDevice = function() {
  d("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_unlink") || (b.FS_unlink = function() {
  d("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "getLEB") || (b.getLEB = function() {
  d("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getFunctionTables") || (b.getFunctionTables = function() {
  d("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "alignFunctionTables") || (b.alignFunctionTables = function() {
  d("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "registerFunctions") || (b.registerFunctions = function() {
  d("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addFunction") || (b.addFunction = function() {
  d("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "removeFunction") || (b.removeFunction = function() {
  d("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getFuncWrapper") || (b.getFuncWrapper = function() {
  d("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "prettyPrint") || (b.prettyPrint = function() {
  d("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "makeBigInt") || (b.makeBigInt = function() {
  d("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "dynCall") || (b.dynCall = function() {
  d("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getCompilerSetting") || (b.getCompilerSetting = function() {
  d("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "print") || (b.print = function() {
  d("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "printErr") || (b.printErr = function() {
  d("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getTempRet0") || (b.getTempRet0 = function() {
  d("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "setTempRet0") || (b.setTempRet0 = function() {
  d("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "callMain") || (b.callMain = function() {
  d("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "abort") || (b.abort = function() {
  d("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToNewUTF8") || (b.stringToNewUTF8 = function() {
  d("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "abortOnCannotGrowMemory") || (b.abortOnCannotGrowMemory = function() {
  d("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscripten_realloc_buffer") || (b.emscripten_realloc_buffer = function() {
  d("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ENV") || (b.ENV = function() {
  d("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ERRNO_CODES") || (b.ERRNO_CODES = function() {
  d("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ERRNO_MESSAGES") || (b.ERRNO_MESSAGES = function() {
  d("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "setErrNo") || (b.setErrNo = function() {
  d("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "DNS") || (b.DNS = function() {
  d("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getHostByName") || (b.getHostByName = function() {
  d("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GAI_ERRNO_MESSAGES") || (b.GAI_ERRNO_MESSAGES = function() {
  d("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "Protocols") || (b.Protocols = function() {
  d("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "Sockets") || (b.Sockets = function() {
  d("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getRandomDevice") || (b.getRandomDevice = function() {
  d("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "traverseStack") || (b.traverseStack = function() {
  d("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UNWIND_CACHE") || (b.UNWIND_CACHE = function() {
  d("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "withBuiltinMalloc") || (b.withBuiltinMalloc = function() {
  d("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "readAsmConstArgsArray") || (b.readAsmConstArgsArray = function() {
  d("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "readAsmConstArgs") || (b.readAsmConstArgs = function() {
  d("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "mainThreadEM_ASM") || (b.mainThreadEM_ASM = function() {
  d("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "jstoi_q") || (b.jstoi_q = function() {
  d("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "jstoi_s") || (b.jstoi_s = function() {
  d("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getExecutableName") || (b.getExecutableName = function() {
  d("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "listenOnce") || (b.listenOnce = function() {
  d("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "autoResumeAudioContext") || (b.autoResumeAudioContext = function() {
  d("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "dynCallLegacy") || (b.dynCallLegacy = function() {
  d("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getDynCaller") || (b.getDynCaller = function() {
  d("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "dynCall") || (b.dynCall = function() {
  d("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "callRuntimeCallbacks") || (b.callRuntimeCallbacks = function() {
  d("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "abortStackOverflow") || (b.abortStackOverflow = function() {
  d("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "reallyNegative") || (b.reallyNegative = function() {
  d("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "unSign") || (b.unSign = function() {
  d("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "reSign") || (b.reSign = function() {
  d("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "formatString") || (b.formatString = function() {
  d("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "PATH") || (b.PATH = function() {
  d("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "PATH_FS") || (b.PATH_FS = function() {
  d("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SYSCALLS") || (b.SYSCALLS = function() {
  d("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "syscallMmap2") || (b.syscallMmap2 = function() {
  d("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "syscallMunmap") || (b.syscallMunmap = function() {
  d("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "flush_NO_FILESYSTEM") || (b.flush_NO_FILESYSTEM = function() {
  d("'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "JSEvents") || (b.JSEvents = function() {
  d("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "specialHTMLTargets") || (b.specialHTMLTargets = function() {
  d("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "maybeCStringToJsString") || (b.maybeCStringToJsString = function() {
  d("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "findEventTarget") || (b.findEventTarget = function() {
  d("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "findCanvasEventTarget") || (b.findCanvasEventTarget = function() {
  d("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "polyfillSetImmediate") || (b.polyfillSetImmediate = function() {
  d("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "demangle") || (b.demangle = function() {
  d("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "demangleAll") || (b.demangleAll = function() {
  d("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "jsStackTrace") || (b.jsStackTrace = function() {
  d("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackTrace") || (b.stackTrace = function() {
  d("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getEnvStrings") || (b.getEnvStrings = function() {
  d("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "checkWasiClock") || (b.checkWasiClock = function() {
  d("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToI64") || (b.writeI53ToI64 = function() {
  d("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToI64Clamped") || (b.writeI53ToI64Clamped = function() {
  d("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToI64Signaling") || (b.writeI53ToI64Signaling = function() {
  d("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToU64Clamped") || (b.writeI53ToU64Clamped = function() {
  d("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToU64Signaling") || (b.writeI53ToU64Signaling = function() {
  d("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "readI53FromI64") || (b.readI53FromI64 = function() {
  d("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "readI53FromU64") || (b.readI53FromU64 = function() {
  d("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "convertI32PairToI53") || (b.convertI32PairToI53 = function() {
  d("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "convertU32PairToI53") || (b.convertU32PairToI53 = function() {
  d("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "exceptionLast") || (b.exceptionLast = function() {
  d("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "exceptionCaught") || (b.exceptionCaught = function() {
  d("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ExceptionInfoAttrs") || (b.ExceptionInfoAttrs = function() {
  d("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ExceptionInfo") || (b.ExceptionInfo = function() {
  d("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "CatchInfo") || (b.CatchInfo = function() {
  d("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "exception_addRef") || (b.exception_addRef = function() {
  d("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "exception_decRef") || (b.exception_decRef = function() {
  d("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "Browser") || (b.Browser = function() {
  d("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "funcWrappers") || (b.funcWrappers = function() {
  d("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getFuncWrapper") || (b.getFuncWrapper = function() {
  d("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "setMainLoop") || (b.setMainLoop = function() {
  d("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "tempFixedLengthArray") || (b.tempFixedLengthArray = function() {
  d("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "miniTempWebGLFloatBuffers") || (b.miniTempWebGLFloatBuffers = function() {
  d("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "heapObjectForWebGLType") || (b.heapObjectForWebGLType = function() {
  d("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "heapAccessShiftForWebGLHeap") || (b.heapAccessShiftForWebGLHeap = function() {
  d("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GL") || (b.GL = function() {
  d("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscriptenWebGLGet") || (b.emscriptenWebGLGet = function() {
  d("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "computeUnpackAlignedImageSize") || (b.computeUnpackAlignedImageSize = function() {
  d("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscriptenWebGLGetTexPixelData") || (b.emscriptenWebGLGetTexPixelData = function() {
  d("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscriptenWebGLGetUniform") || (b.emscriptenWebGLGetUniform = function() {
  d("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscriptenWebGLGetVertexAttrib") || (b.emscriptenWebGLGetVertexAttrib = function() {
  d("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeGLArray") || (b.writeGLArray = function() {
  d("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "AL") || (b.AL = function() {
  d("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SDL_unicode") || (b.SDL_unicode = function() {
  d("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SDL_ttfContext") || (b.SDL_ttfContext = function() {
  d("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SDL_audio") || (b.SDL_audio = function() {
  d("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SDL") || (b.SDL = function() {
  d("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SDL_gfx") || (b.SDL_gfx = function() {
  d("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GLUT") || (b.GLUT = function() {
  d("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "EGL") || (b.EGL = function() {
  d("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GLFW_Window") || (b.GLFW_Window = function() {
  d("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GLFW") || (b.GLFW = function() {
  d("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GLEW") || (b.GLEW = function() {
  d("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "IDBStore") || (b.IDBStore = function() {
  d("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "runAndAbortIfError") || (b.runAndAbortIfError = function() {
  d("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "warnOnce") || (b.warnOnce = function() {
  d("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackSave") || (b.stackSave = function() {
  d("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackRestore") || (b.stackRestore = function() {
  d("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackAlloc") || (b.stackAlloc = function() {
  d("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "AsciiToString") || (b.AsciiToString = function() {
  d("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToAscii") || (b.stringToAscii = function() {
  d("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UTF16ToString") || (b.UTF16ToString = function() {
  d("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToUTF16") || (b.stringToUTF16 = function() {
  d("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "lengthBytesUTF16") || (b.lengthBytesUTF16 = function() {
  d("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UTF32ToString") || (b.UTF32ToString = function() {
  d("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToUTF32") || (b.stringToUTF32 = function() {
  d("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "lengthBytesUTF32") || (b.lengthBytesUTF32 = function() {
  d("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "allocateUTF8") || (b.allocateUTF8 = function() {
  d("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "allocateUTF8OnStack") || (b.allocateUTF8OnStack = function() {
  d("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
b.writeStackCookie = Ha;
b.checkStackCookie = Ia;
Object.getOwnPropertyDescriptor(b, "ALLOC_NORMAL") || Object.defineProperty(b, "ALLOC_NORMAL", {configurable:!0, get:function() {
  d("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(b, "ALLOC_STACK") || Object.defineProperty(b, "ALLOC_STACK", {configurable:!0, get:function() {
  d("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
var Il;
function qa(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
Ua = function Jl() {
  Il || Kl();
  Il || (Ua = Jl);
};
function Kl() {
  function a() {
    if (!Il && (Il = !0, b.calledRun = !0, !xa)) {
      Ia();
      assert(!Pa);
      Pa = !0;
      fb(Ma);
      Ia();
      fb(Na);
      ba(b);
      if (b.onRuntimeInitialized) {
        b.onRuntimeInitialized();
      }
      assert(!b._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
      Ia();
      if (b.postRun) {
        for ("function" == typeof b.postRun && (b.postRun = [b.postRun]); b.postRun.length;) {
          var c = b.postRun.shift();
          Oa.unshift(c);
        }
      }
      fb(Oa);
    }
  }
  if (!(0 < Sa)) {
    Ha();
    if (b.preRun) {
      for ("function" == typeof b.preRun && (b.preRun = [b.preRun]); b.preRun.length;) {
        Ra();
      }
    }
    fb(La);
    0 < Sa || (b.setStatus ? (b.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        b.setStatus("");
      }, 1);
      a();
    }, 1)) : a(), Ia());
  }
}
b.run = Kl;
function qb() {
  var a = ra, c = f, e = !1;
  ra = f = function() {
    e = !0;
  };
  try {
    ib && ib();
  } catch (g) {
  }
  ra = a;
  f = c;
  e && (sa("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc."), sa("(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)"));
}
if (b.preInit) {
  for ("function" == typeof b.preInit && (b.preInit = [b.preInit]); 0 < b.preInit.length;) {
    b.preInit.pop()();
  }
}
noExitRuntime = !0;
Kl();
function m() {
}
m.prototype = Object.create(m.prototype);
m.prototype.constructor = m;
m.prototype.b = m;
m.c = {};
b.WrapperObject = m;
function n(a) {
  return (a || m).c;
}
b.getCache = n;
function p(a, c) {
  var e = n(c), g = e[a];
  if (g) {
    return g;
  }
  g = Object.create((c || m).prototype);
  g.a = a;
  return e[a] = g;
}
b.wrapPointer = p;
b.castObject = function(a, c) {
  return p(a.a, c);
};
b.NULL = p(0);
b.destroy = function(a) {
  if (!a.__destroy__) {
    throw "Error: Cannot destroy object. (Did you create it yourself?)";
  }
  a.__destroy__();
  delete n(a.b)[a.a];
};
b.compare = function(a, c) {
  return a.a === c.a;
};
b.getPointer = function(a) {
  return a.a;
};
b.getClass = function(a) {
  return a.b;
};
var Ll = 0, Ml = 0, Nl = 0, Ol = [], Pl = 0;
function Ql() {
  if (Pl) {
    for (var a = 0; a < Ol.length; a++) {
      b._free(Ol[a]);
    }
    Ol.length = 0;
    b._free(Ll);
    Ll = 0;
    Ml += Pl;
    Pl = 0;
  }
  Ll || (Ml += 128, Ll = b._malloc(Ml), assert(Ll));
  Nl = 0;
}
function Rl(a) {
  if ("string" === typeof a) {
    for (var c = 0, e = 0; e < a.length; ++e) {
      var g = a.charCodeAt(e);
      55296 <= g && 57343 >= g && (g = 65536 + ((g & 1023) << 10) | a.charCodeAt(++e) & 1023);
      127 >= g ? ++c : c = 2047 >= g ? c + 2 : 65535 >= g ? c + 3 : c + 4;
    }
    c = Array(c + 1);
    g = c.length;
    e = 0;
    if (0 < g) {
      g = e + g - 1;
      for (var r = 0; r < a.length; ++r) {
        var q = a.charCodeAt(r);
        if (55296 <= q && 57343 >= q) {
          var aa = a.charCodeAt(++r);
          q = 65536 + ((q & 1023) << 10) | aa & 1023;
        }
        if (127 >= q) {
          if (e >= g) {
            break;
          }
          c[e++] = q;
        } else {
          if (2047 >= q) {
            if (e + 1 >= g) {
              break;
            }
            c[e++] = 192 | q >> 6;
          } else {
            if (65535 >= q) {
              if (e + 2 >= g) {
                break;
              }
              c[e++] = 224 | q >> 12;
            } else {
              if (e + 3 >= g) {
                break;
              }
              2097152 <= q && sa("Invalid Unicode code point 0x" + q.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
              c[e++] = 240 | q >> 18;
              c[e++] = 128 | q >> 12 & 63;
            }
            c[e++] = 128 | q >> 6 & 63;
          }
          c[e++] = 128 | q & 63;
        }
      }
      c[e] = 0;
    }
    assert(Ll);
    a = c.length * Ca.BYTES_PER_ELEMENT;
    a = a + 7 & -8;
    Nl + a >= Ml ? (assert(0 < a), Pl += a, e = b._malloc(a), Ol.push(e)) : (e = Ll + Nl, Nl += a);
    a = e;
    e = a >>> 0;
    switch(Ca.BYTES_PER_ELEMENT) {
      case 2:
        e >>>= 1;
        break;
      case 4:
        e >>>= 2;
        break;
      case 8:
        e >>>= 3;
    }
    for (g = 0; g < c.length; g++) {
      Ca[e + g] = c[g];
    }
    return a;
  }
  return a;
}
function t() {
  throw "cannot construct a PxBase, no constructor in IDL";
}
t.prototype = Object.create(m.prototype);
t.prototype.constructor = t;
t.prototype.b = t;
t.c = {};
b.PxBase = t;
t.prototype.release = t.prototype.release = function() {
  tb(this.a);
};
t.prototype.getConcreteTypeName = function() {
  return h(ub(this.a));
};
t.prototype.getConcreteType = function() {
  return vb(this.a);
};
t.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  wb(e, a, c);
};
t.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  xb(c, a);
};
t.prototype.getBaseFlags = function() {
  return p(yb(this.a), u);
};
t.prototype.isReleasable = function() {
  return !!zb(this.a);
};
function v() {
  throw "cannot construct a PxActor, no constructor in IDL";
}
v.prototype = Object.create(t.prototype);
v.prototype.constructor = v;
v.prototype.b = v;
v.c = {};
b.PxActor = v;
v.prototype.getType = function() {
  return Ab(this.a);
};
v.prototype.getScene = function() {
  return p(Bb(this.a), w);
};
v.prototype.setName = function(a) {
  var c = this.a;
  Ql();
  a = a && "object" === typeof a ? a.a : Rl(a);
  Cb(c, a);
};
v.prototype.getName = function() {
  return h(Db(this.a));
};
v.prototype.getWorldBounds = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return void 0 === a ? p(Eb(c), x) : p(Fb(c, a), x);
};
v.prototype.setActorFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Gb(c, a);
};
v.prototype.getActorFlags = function() {
  return p(Hb(this.a), y);
};
v.prototype.setDominanceGroup = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ib(c, a);
};
v.prototype.getDominanceGroup = function() {
  return Jb(this.a);
};
v.prototype.setOwnerClient = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Kb(c, a);
};
v.prototype.getOwnerClient = function() {
  return Lb(this.a);
};
v.prototype.release = v.prototype.release = function() {
  Mb(this.a);
};
v.prototype.getConcreteTypeName = function() {
  return h(Ob(this.a));
};
v.prototype.getConcreteType = function() {
  return Pb(this.a);
};
v.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  Qb(e, a, c);
};
v.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Rb(c, a);
};
v.prototype.getBaseFlags = function() {
  return p(Sb(this.a), u);
};
v.prototype.isReleasable = function() {
  return !!Tb(this.a);
};
function z() {
  throw "cannot construct a PxRigidActor, no constructor in IDL";
}
z.prototype = Object.create(v.prototype);
z.prototype.constructor = z;
z.prototype.b = z;
z.c = {};
b.PxRigidActor = z;
z.prototype.getGlobalPose = function() {
  return p(Ub(this.a), A);
};
z.prototype.setGlobalPose = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Vb(e, a) : Wb(e, a, c);
};
z.prototype.attachShape = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!Xb(c, a);
};
z.prototype.detachShape = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Yb(e, a) : Zb(e, a, c);
};
z.prototype.getNbShapes = function() {
  return $b(this.a);
};
z.prototype.getShapes = function(a, c, e) {
  var g = this.a;
  Ql();
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  return ac(g, a, c, e);
};
z.prototype.getType = function() {
  return bc(this.a);
};
z.prototype.getScene = function() {
  return p(cc(this.a), w);
};
z.prototype.setName = function(a) {
  var c = this.a;
  Ql();
  a = a && "object" === typeof a ? a.a : Rl(a);
  dc(c, a);
};
z.prototype.getName = function() {
  return h(ec(this.a));
};
z.prototype.getWorldBounds = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return void 0 === a ? p(fc(c), x) : p(hc(c, a), x);
};
z.prototype.setActorFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  ic(c, a);
};
z.prototype.getActorFlags = function() {
  return p(jc(this.a), y);
};
z.prototype.setDominanceGroup = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  kc(c, a);
};
z.prototype.getDominanceGroup = function() {
  return lc(this.a);
};
z.prototype.setOwnerClient = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  mc(c, a);
};
z.prototype.getOwnerClient = function() {
  return nc(this.a);
};
z.prototype.release = z.prototype.release = function() {
  oc(this.a);
};
z.prototype.getConcreteTypeName = function() {
  return h(pc(this.a));
};
z.prototype.getConcreteType = function() {
  return qc(this.a);
};
z.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  rc(e, a, c);
};
z.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  sc(c, a);
};
z.prototype.getBaseFlags = function() {
  return p(tc(this.a), u);
};
z.prototype.isReleasable = function() {
  return !!uc(this.a);
};
function Sl() {
  throw "cannot construct a PxSimulationEventCallback, no constructor in IDL";
}
Sl.prototype = Object.create(m.prototype);
Sl.prototype.constructor = Sl;
Sl.prototype.b = Sl;
Sl.c = {};
b.PxSimulationEventCallback = Sl;
Sl.prototype.__destroy__ = function() {
  vc(this.a);
};
function B() {
  throw "cannot construct a PxRigidBody, no constructor in IDL";
}
B.prototype = Object.create(z.prototype);
B.prototype.constructor = B;
B.prototype.b = B;
B.c = {};
b.PxRigidBody = B;
B.prototype.setCMassLocalPose = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  wc(c, a);
};
B.prototype.getCMassLocalPose = function() {
  return p(xc(this.a), A);
};
B.prototype.setMass = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  yc(c, a);
};
B.prototype.getMass = function() {
  return zc(this.a);
};
B.prototype.getInvMass = function() {
  return Ac(this.a);
};
B.prototype.setMassSpaceInertiaTensor = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Bc(c, a);
};
B.prototype.getMassSpaceInertiaTensor = function() {
  return p(Cc(this.a), C);
};
B.prototype.getMassSpaceInvInertiaTensor = function() {
  return p(Dc(this.a), C);
};
B.prototype.setLinearDamping = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ec(c, a);
};
B.prototype.getLinearDamping = function() {
  return Fc(this.a);
};
B.prototype.setAngularDamping = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Gc(c, a);
};
B.prototype.getAngularDamping = function() {
  return Hc(this.a);
};
B.prototype.getLinearVelocity = function() {
  return p(Ic(this.a), C);
};
B.prototype.setLinearVelocity = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Jc(e, a) : Kc(e, a, c);
};
B.prototype.getAngularVelocity = function() {
  return p(Lc(this.a), C);
};
B.prototype.setAngularVelocity = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Mc(e, a) : Nc(e, a, c);
};
B.prototype.getMaxLinearVelocity = function() {
  return Oc(this.a);
};
B.prototype.setMaxLinearVelocity = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Pc(c, a);
};
B.prototype.getMaxAngularVelocity = function() {
  return Qc(this.a);
};
B.prototype.setMaxAngularVelocity = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Rc(c, a);
};
B.prototype.addForce = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  void 0 === c ? Sc(g, a) : void 0 === e ? Tc(g, a, c) : Uc(g, a, c, e);
};
B.prototype.addTorque = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  void 0 === c ? Vc(g, a) : void 0 === e ? Wc(g, a, c) : Xc(g, a, c, e);
};
B.prototype.clearForce = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Yc(c, a);
};
B.prototype.clearTorque = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Zc(c, a);
};
B.prototype.setForceAndTorque = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  void 0 === e ? $c(g, a, c) : ad(g, a, c, e);
};
B.prototype.setRigidBodyFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  bd(e, a, c);
};
B.prototype.setRigidBodyFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  cd(c, a);
};
B.prototype.getRigidBodyFlags = function() {
  return p(dd(this.a), D);
};
B.prototype.setMinCCDAdvanceCoefficient = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  ed(c, a);
};
B.prototype.getMinCCDAdvanceCoefficient = function() {
  return fd(this.a);
};
B.prototype.setMaxDepenetrationVelocity = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  gd(c, a);
};
B.prototype.getMaxDepenetrationVelocity = function() {
  return hd(this.a);
};
B.prototype.setMaxContactImpulse = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  id(c, a);
};
B.prototype.getMaxContactImpulse = function() {
  return jd(this.a);
};
B.prototype.getInternalIslandNodeIndex = function() {
  return kd(this.a);
};
B.prototype.getType = function() {
  return ld(this.a);
};
B.prototype.getScene = function() {
  return p(md(this.a), w);
};
B.prototype.setName = function(a) {
  var c = this.a;
  Ql();
  a = a && "object" === typeof a ? a.a : Rl(a);
  nd(c, a);
};
B.prototype.getName = function() {
  return h(od(this.a));
};
B.prototype.getWorldBounds = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return void 0 === a ? p(pd(c), x) : p(qd(c, a), x);
};
B.prototype.setActorFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  rd(c, a);
};
B.prototype.getActorFlags = function() {
  return p(sd(this.a), y);
};
B.prototype.setDominanceGroup = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  td(c, a);
};
B.prototype.getDominanceGroup = function() {
  return ud(this.a);
};
B.prototype.setOwnerClient = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  vd(c, a);
};
B.prototype.getOwnerClient = function() {
  return wd(this.a);
};
B.prototype.release = B.prototype.release = function() {
  xd(this.a);
};
B.prototype.getConcreteTypeName = function() {
  return h(yd(this.a));
};
B.prototype.getConcreteType = function() {
  return zd(this.a);
};
B.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  Ad(e, a, c);
};
B.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Bd(c, a);
};
B.prototype.getBaseFlags = function() {
  return p(Cd(this.a), u);
};
B.prototype.isReleasable = function() {
  return !!Dd(this.a);
};
B.prototype.getGlobalPose = function() {
  return p(Ed(this.a), A);
};
B.prototype.setGlobalPose = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Fd(e, a) : Gd(e, a, c);
};
B.prototype.attachShape = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!Hd(c, a);
};
B.prototype.detachShape = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Id(e, a) : Jd(e, a, c);
};
B.prototype.getNbShapes = function() {
  return Kd(this.a);
};
B.prototype.getShapes = function(a, c, e) {
  var g = this.a;
  Ql();
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  return Ld(g, a, c, e);
};
function Tl() {
  throw "cannot construct a IPxSimulationEventCallback, no constructor in IDL";
}
Tl.prototype = Object.create(Sl.prototype);
Tl.prototype.constructor = Tl;
Tl.prototype.b = Tl;
Tl.c = {};
b.IPxSimulationEventCallback = Tl;
Tl.prototype.cbFun = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Md(c, a);
};
Tl.prototype.__destroy__ = function() {
  Nd(this.a);
};
function Ul() {
  throw "cannot construct a PxGeometry, no constructor in IDL";
}
Ul.prototype = Object.create(m.prototype);
Ul.prototype.constructor = Ul;
Ul.prototype.b = Ul;
Ul.c = {};
b.PxGeometry = Ul;
Ul.prototype.__destroy__ = function() {
  Od(this.a);
};
function Vl() {
  throw "cannot construct a PxCpuDispatcher, no constructor in IDL";
}
Vl.prototype = Object.create(m.prototype);
Vl.prototype.constructor = Vl;
Vl.prototype.b = Vl;
Vl.c = {};
b.PxCpuDispatcher = Vl;
Vl.prototype.__destroy__ = function() {
  Pd(this.a);
};
function Wl() {
  throw "cannot construct a VoidPtr, no constructor in IDL";
}
Wl.prototype = Object.create(m.prototype);
Wl.prototype.constructor = Wl;
Wl.prototype.b = Wl;
Wl.c = {};
b.VoidPtr = Wl;
Wl.prototype.__destroy__ = function() {
  Qd(this.a);
};
function E() {
  this.a = Rd();
  n(E)[this.a] = this;
}
E.prototype = Object.create(m.prototype);
E.prototype.constructor = E;
E.prototype.b = E;
E.c = {};
b.PxTopLevelFunctions = E;
E.prototype.CreateCooking = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  return p(Sd(g, a, c, e), Xl);
};
E.prototype.CreateFoundation = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  return p(Td(g, a, c, e), Yl);
};
E.prototype.CreatePhysics = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  return p(Ud(g, a, c, e), F);
};
E.prototype.DefaultCpuDispatcherCreate = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return p(Vd(c, a), Zl);
};
E.prototype.DefaultFilterShader = function() {
  return p(Wd(this.a), $l);
};
E.prototype.InitExtensions = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!Xd(c, a);
};
E.prototype.RevoluteJointCreate = function(a, c, e, g, r) {
  var q = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  g && "object" === typeof g && (g = g.a);
  r && "object" === typeof r && (r = r.a);
  return p(Yd(q, a, c, e, g, r), G);
};
E.prototype.getU8At = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  return Zd(e, a, c);
};
E.prototype.getVec3At = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  return p($d(e, a, c), C);
};
E.prototype.get_PHYSICS_VERSION = E.prototype.A = function() {
  return ae(this.a);
};
Object.defineProperty(E.prototype, "PHYSICS_VERSION", {get:E.prototype.A});
E.prototype.__destroy__ = function() {
  be(this.a);
};
function y(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = ce(a);
  n(y)[this.a] = this;
}
y.prototype = Object.create(m.prototype);
y.prototype.constructor = y;
y.prototype.b = y;
y.c = {};
b.PxActorFlags = y;
y.prototype.isSet = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!de(c, a);
};
y.prototype.set = y.prototype.set = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  ee(c, a);
};
y.prototype.clear = y.prototype.clear = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  fe(c, a);
};
y.prototype.__destroy__ = function() {
  ge(this.a);
};
function H(a, c, e, g) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  g && "object" === typeof g && (g = g.a);
  this.a = void 0 === a ? he() : void 0 === c ? _emscripten_bind_PxFilterData_PxFilterData_1(a) : void 0 === e ? _emscripten_bind_PxFilterData_PxFilterData_2(a, c) : void 0 === g ? _emscripten_bind_PxFilterData_PxFilterData_3(a, c, e) : ie(a, c, e, g);
  n(H)[this.a] = this;
}
H.prototype = Object.create(m.prototype);
H.prototype.constructor = H;
H.prototype.b = H;
H.c = {};
b.PxFilterData = H;
H.prototype.get_word0 = H.prototype.T = function() {
  return je(this.a);
};
H.prototype.set_word0 = H.prototype.ta = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  ke(c, a);
};
Object.defineProperty(H.prototype, "word0", {get:H.prototype.T, set:H.prototype.ta});
H.prototype.get_word1 = H.prototype.U = function() {
  return le(this.a);
};
H.prototype.set_word1 = H.prototype.ua = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  me(c, a);
};
Object.defineProperty(H.prototype, "word1", {get:H.prototype.U, set:H.prototype.ua});
H.prototype.get_word2 = H.prototype.V = function() {
  return ne(this.a);
};
H.prototype.set_word2 = H.prototype.va = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  oe(c, a);
};
Object.defineProperty(H.prototype, "word2", {get:H.prototype.V, set:H.prototype.va});
H.prototype.get_word3 = H.prototype.W = function() {
  return pe(this.a);
};
H.prototype.set_word3 = H.prototype.wa = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  qe(c, a);
};
Object.defineProperty(H.prototype, "word3", {get:H.prototype.W, set:H.prototype.wa});
H.prototype.__destroy__ = function() {
  re(this.a);
};
function I() {
  throw "cannot construct a PxMaterial, no constructor in IDL";
}
I.prototype = Object.create(t.prototype);
I.prototype.constructor = I;
I.prototype.b = I;
I.c = {};
b.PxMaterial = I;
I.prototype.release = I.prototype.release = function() {
  se(this.a);
};
I.prototype.getConcreteTypeName = function() {
  return h(te(this.a));
};
I.prototype.getConcreteType = function() {
  return ue(this.a);
};
I.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  ve(e, a, c);
};
I.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  we(c, a);
};
I.prototype.getBaseFlags = function() {
  return p(xe(this.a), u);
};
I.prototype.isReleasable = function() {
  return !!ye(this.a);
};
function F() {
  throw "cannot construct a PxPhysics, no constructor in IDL";
}
F.prototype = Object.create(m.prototype);
F.prototype.constructor = F;
F.prototype.b = F;
F.c = {};
b.PxPhysics = F;
F.prototype.getFoundation = function() {
  return p(ze(this.a), Yl);
};
F.prototype.getTolerancesScale = function() {
  return p(Ae(this.a), am);
};
F.prototype.createScene = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return p(Be(c, a), w);
};
F.prototype.createRigidStatic = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return p(Ce(c, a), J);
};
F.prototype.createRigidDynamic = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return p(De(c, a), K);
};
F.prototype.createShape = function(a, c, e, g) {
  var r = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  g && "object" === typeof g && (g = g.a);
  return void 0 === e ? p(Ee(r, a, c), L) : void 0 === g ? p(Fe(r, a, c, e), L) : p(Ge(r, a, c, e, g), L);
};
F.prototype.getNbShapes = function() {
  return He(this.a);
};
F.prototype.createMaterial = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  return p(Ie(g, a, c, e), I);
};
F.prototype.getPhysicsInsertionCallback = function() {
  return p(Je(this.a), bm);
};
F.prototype.__destroy__ = function() {
  Ke(this.a);
};
function D(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = Le(a);
  n(D)[this.a] = this;
}
D.prototype = Object.create(m.prototype);
D.prototype.constructor = D;
D.prototype.b = D;
D.c = {};
b.PxRigidBodyFlags = D;
D.prototype.isSet = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!Me(c, a);
};
D.prototype.set = D.prototype.set = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ne(c, a);
};
D.prototype.clear = D.prototype.clear = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Oe(c, a);
};
D.prototype.__destroy__ = function() {
  Pe(this.a);
};
function K() {
  throw "cannot construct a PxRigidDynamic, no constructor in IDL";
}
K.prototype = Object.create(B.prototype);
K.prototype.constructor = K;
K.prototype.b = K;
K.c = {};
b.PxRigidDynamic = K;
K.prototype.getType = function() {
  return Qe(this.a);
};
K.prototype.getScene = function() {
  return p(Re(this.a), w);
};
K.prototype.setName = function(a) {
  var c = this.a;
  Ql();
  a = a && "object" === typeof a ? a.a : Rl(a);
  Se(c, a);
};
K.prototype.getName = function() {
  return h(Te(this.a));
};
K.prototype.getWorldBounds = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return void 0 === a ? p(Ue(c), x) : p(Ve(c, a), x);
};
K.prototype.setActorFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  We(c, a);
};
K.prototype.getActorFlags = function() {
  return p(Xe(this.a), y);
};
K.prototype.setDominanceGroup = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ye(c, a);
};
K.prototype.getDominanceGroup = function() {
  return Ze(this.a);
};
K.prototype.setOwnerClient = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  $e(c, a);
};
K.prototype.getOwnerClient = function() {
  return af(this.a);
};
K.prototype.release = K.prototype.release = function() {
  bf(this.a);
};
K.prototype.getConcreteTypeName = function() {
  return h(cf(this.a));
};
K.prototype.getConcreteType = function() {
  return df(this.a);
};
K.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  ef(e, a, c);
};
K.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  ff(c, a);
};
K.prototype.getBaseFlags = function() {
  return p(gf(this.a), u);
};
K.prototype.isReleasable = function() {
  return !!hf(this.a);
};
K.prototype.getGlobalPose = function() {
  return p(jf(this.a), A);
};
K.prototype.setGlobalPose = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? kf(e, a) : lf(e, a, c);
};
K.prototype.attachShape = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!mf(c, a);
};
K.prototype.detachShape = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? nf(e, a) : of(e, a, c);
};
K.prototype.getNbShapes = function() {
  return pf(this.a);
};
K.prototype.getShapes = function(a, c, e) {
  var g = this.a;
  Ql();
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  return qf(g, a, c, e);
};
K.prototype.setCMassLocalPose = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  rf(c, a);
};
K.prototype.getCMassLocalPose = function() {
  return p(sf(this.a), A);
};
K.prototype.setMass = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  tf(c, a);
};
K.prototype.getMass = function() {
  return uf(this.a);
};
K.prototype.getInvMass = function() {
  return vf(this.a);
};
K.prototype.setMassSpaceInertiaTensor = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  wf(c, a);
};
K.prototype.getMassSpaceInertiaTensor = function() {
  return p(xf(this.a), C);
};
K.prototype.getMassSpaceInvInertiaTensor = function() {
  return p(yf(this.a), C);
};
K.prototype.setLinearDamping = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  zf(c, a);
};
K.prototype.getLinearDamping = function() {
  return Af(this.a);
};
K.prototype.setAngularDamping = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Bf(c, a);
};
K.prototype.getAngularDamping = function() {
  return Cf(this.a);
};
K.prototype.getLinearVelocity = function() {
  return p(Df(this.a), C);
};
K.prototype.setLinearVelocity = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Ef(e, a) : Ff(e, a, c);
};
K.prototype.getAngularVelocity = function() {
  return p(Gf(this.a), C);
};
K.prototype.setAngularVelocity = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Hf(e, a) : If(e, a, c);
};
K.prototype.getMaxLinearVelocity = function() {
  return Jf(this.a);
};
K.prototype.setMaxLinearVelocity = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Kf(c, a);
};
K.prototype.getMaxAngularVelocity = function() {
  return Lf(this.a);
};
K.prototype.setMaxAngularVelocity = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Mf(c, a);
};
K.prototype.addForce = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  void 0 === c ? Nf(g, a) : void 0 === e ? Of(g, a, c) : Pf(g, a, c, e);
};
K.prototype.addTorque = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  void 0 === c ? Qf(g, a) : void 0 === e ? Rf(g, a, c) : Sf(g, a, c, e);
};
K.prototype.clearForce = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Tf(c, a);
};
K.prototype.clearTorque = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Uf(c, a);
};
K.prototype.setForceAndTorque = function(a, c, e) {
  var g = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  void 0 === e ? Vf(g, a, c) : Wf(g, a, c, e);
};
K.prototype.setRigidBodyFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  Xf(e, a, c);
};
K.prototype.setRigidBodyFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Yf(c, a);
};
K.prototype.getRigidBodyFlags = function() {
  return p(Zf(this.a), D);
};
K.prototype.setMinCCDAdvanceCoefficient = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  $f(c, a);
};
K.prototype.getMinCCDAdvanceCoefficient = function() {
  return ag(this.a);
};
K.prototype.setMaxDepenetrationVelocity = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  bg(c, a);
};
K.prototype.getMaxDepenetrationVelocity = function() {
  return cg(this.a);
};
K.prototype.setMaxContactImpulse = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  dg(c, a);
};
K.prototype.getMaxContactImpulse = function() {
  return eg(this.a);
};
K.prototype.getInternalIslandNodeIndex = function() {
  return fg(this.a);
};
function J() {
  throw "cannot construct a PxRigidStatic, no constructor in IDL";
}
J.prototype = Object.create(z.prototype);
J.prototype.constructor = J;
J.prototype.b = J;
J.c = {};
b.PxRigidStatic = J;
J.prototype.getType = function() {
  return gg(this.a);
};
J.prototype.getScene = function() {
  return p(hg(this.a), w);
};
J.prototype.setName = function(a) {
  var c = this.a;
  Ql();
  a = a && "object" === typeof a ? a.a : Rl(a);
  ig(c, a);
};
J.prototype.getName = function() {
  return h(jg(this.a));
};
J.prototype.getWorldBounds = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return void 0 === a ? p(kg(c), x) : p(lg(c, a), x);
};
J.prototype.setActorFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  mg(c, a);
};
J.prototype.getActorFlags = function() {
  return p(ng(this.a), y);
};
J.prototype.setDominanceGroup = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  og(c, a);
};
J.prototype.getDominanceGroup = function() {
  return pg(this.a);
};
J.prototype.setOwnerClient = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  qg(c, a);
};
J.prototype.getOwnerClient = function() {
  return rg(this.a);
};
J.prototype.release = J.prototype.release = function() {
  sg(this.a);
};
J.prototype.getConcreteTypeName = function() {
  return h(tg(this.a));
};
J.prototype.getConcreteType = function() {
  return ug(this.a);
};
J.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  vg(e, a, c);
};
J.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  wg(c, a);
};
J.prototype.getBaseFlags = function() {
  return p(xg(this.a), u);
};
J.prototype.isReleasable = function() {
  return !!yg(this.a);
};
J.prototype.getGlobalPose = function() {
  return p(zg(this.a), A);
};
J.prototype.setGlobalPose = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Ag(e, a) : Bg(e, a, c);
};
J.prototype.attachShape = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!Cg(c, a);
};
J.prototype.detachShape = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Dg(e, a) : Eg(e, a, c);
};
J.prototype.getNbShapes = function() {
  return Fg(this.a);
};
J.prototype.getShapes = function(a, c, e) {
  var g = this.a;
  Ql();
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  return Gg(g, a, c, e);
};
function w() {
  throw "cannot construct a PxScene, no constructor in IDL";
}
w.prototype = Object.create(m.prototype);
w.prototype.constructor = w;
w.prototype.b = w;
w.c = {};
b.PxScene = w;
w.prototype.addActor = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Hg(e, a) : Ig(e, a, c);
};
w.prototype.removeActor = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? Jg(e, a) : Kg(e, a, c);
};
w.prototype.simulate = function(a, c, e, g, r) {
  var q = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  g && "object" === typeof g && (g = g.a);
  r && "object" === typeof r && (r = r.a);
  void 0 === c ? Lg(q, a) : void 0 === e ? Mg(q, a, c) : void 0 === g ? Ng(q, a, c, e) : void 0 === r ? Og(q, a, c, e, g) : Pg(q, a, c, e, g, r);
};
w.prototype.fetchResults = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return void 0 === a ? !!Qg(c) : !!Rg(c, a);
};
w.prototype.setGravity = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Sg(c, a);
};
w.prototype.getGravity = function() {
  return p(Tg(this.a), C);
};
function M(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = Ug(a);
  n(M)[this.a] = this;
}
M.prototype = Object.create(m.prototype);
M.prototype.constructor = M;
M.prototype.b = M;
M.c = {};
b.PxSceneDesc = M;
M.prototype.get_gravity = M.prototype.G = function() {
  return p(Vg(this.a), C);
};
M.prototype.set_gravity = M.prototype.ea = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Wg(c, a);
};
Object.defineProperty(M.prototype, "gravity", {get:M.prototype.G, set:M.prototype.ea});
M.prototype.get_simulationEventCallback = M.prototype.P = function() {
  return p(Xg(this.a), Sl);
};
M.prototype.set_simulationEventCallback = M.prototype.pa = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Yg(c, a);
};
Object.defineProperty(M.prototype, "simulationEventCallback", {get:M.prototype.P, set:M.prototype.pa});
M.prototype.get_filterShader = M.prototype.F = function() {
  return p(Zg(this.a), $l);
};
M.prototype.set_filterShader = M.prototype.da = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  $g(c, a);
};
Object.defineProperty(M.prototype, "filterShader", {get:M.prototype.F, set:M.prototype.da});
M.prototype.get_cpuDispatcher = M.prototype.C = function() {
  return p(ah(this.a), Vl);
};
M.prototype.set_cpuDispatcher = M.prototype.$ = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  bh(c, a);
};
Object.defineProperty(M.prototype, "cpuDispatcher", {get:M.prototype.C, set:M.prototype.$});
M.prototype.get_flags = M.prototype.g = function() {
  return p(ch(this.a), N);
};
M.prototype.set_flags = M.prototype.l = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  dh(c, a);
};
Object.defineProperty(M.prototype, "flags", {get:M.prototype.g, set:M.prototype.l});
M.prototype.__destroy__ = function() {
  eh(this.a);
};
function N(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = fh(a);
  n(N)[this.a] = this;
}
N.prototype = Object.create(m.prototype);
N.prototype.constructor = N;
N.prototype.b = N;
N.c = {};
b.PxSceneFlags = N;
N.prototype.isSet = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!gh(c, a);
};
N.prototype.set = N.prototype.set = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  hh(c, a);
};
N.prototype.clear = N.prototype.clear = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  ih(c, a);
};
N.prototype.__destroy__ = function() {
  jh(this.a);
};
function L() {
  throw "cannot construct a PxShape, no constructor in IDL";
}
L.prototype = Object.create(t.prototype);
L.prototype.constructor = L;
L.prototype.b = L;
L.c = {};
b.PxShape = L;
L.prototype.setLocalPose = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  kh(c, a);
};
L.prototype.getLocalPose = function() {
  return p(lh(this.a), A);
};
L.prototype.setSimulationFilterData = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  mh(c, a);
};
L.prototype.getSimulationFilterData = function() {
  return p(nh(this.a), H);
};
L.prototype.release = L.prototype.release = function() {
  oh(this.a);
};
L.prototype.getConcreteTypeName = function() {
  return h(ph(this.a));
};
L.prototype.getConcreteType = function() {
  return qh(this.a);
};
L.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  rh(e, a, c);
};
L.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  sh(c, a);
};
L.prototype.getBaseFlags = function() {
  return p(th(this.a), u);
};
L.prototype.isReleasable = function() {
  return !!uh(this.a);
};
function O(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = vh(a);
  n(O)[this.a] = this;
}
O.prototype = Object.create(m.prototype);
O.prototype.constructor = O;
O.prototype.b = O;
O.c = {};
b.PxShapeFlags = O;
O.prototype.isSet = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!wh(c, a);
};
O.prototype.set = O.prototype.set = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  xh(c, a);
};
O.prototype.clear = O.prototype.clear = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  yh(c, a);
};
O.prototype.__destroy__ = function() {
  zh(this.a);
};
function cm() {
  this.a = Ah();
  n(cm)[this.a] = this;
}
cm.prototype = Object.create(Tl.prototype);
cm.prototype.constructor = cm;
cm.prototype.b = cm;
cm.c = {};
b.JsPxSimulationEventCallback = cm;
cm.prototype.cbFun = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Bh(c, a);
};
cm.prototype.__destroy__ = function() {
  Ch(this.a);
};
function $l() {
  throw "cannot construct a PxSimulationFilterShader, no constructor in IDL";
}
$l.prototype = Object.create(m.prototype);
$l.prototype.constructor = $l;
$l.prototype.b = $l;
$l.c = {};
b.PxSimulationFilterShader = $l;
$l.prototype.__destroy__ = function() {
  Dh(this.a);
};
function dm(a, c, e) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  this.a = Eh(a, c, e);
  n(dm)[this.a] = this;
}
dm.prototype = Object.create(Ul.prototype);
dm.prototype.constructor = dm;
dm.prototype.b = dm;
dm.c = {};
b.PxBoxGeometry = dm;
dm.prototype.__destroy__ = function() {
  Fh(this.a);
};
function P() {
  throw "cannot construct a PxBVHStructure, no constructor in IDL";
}
P.prototype = Object.create(t.prototype);
P.prototype.constructor = P;
P.prototype.b = P;
P.c = {};
b.PxBVHStructure = P;
P.prototype.release = P.prototype.release = function() {
  Gh(this.a);
};
P.prototype.getConcreteTypeName = function() {
  return h(Hh(this.a));
};
P.prototype.getConcreteType = function() {
  return Ih(this.a);
};
P.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  Jh(e, a, c);
};
P.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Kh(c, a);
};
P.prototype.getBaseFlags = function() {
  return p(Lh(this.a), u);
};
P.prototype.isReleasable = function() {
  return !!Mh(this.a);
};
function em(a, c) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  this.a = Nh(a, c);
  n(em)[this.a] = this;
}
em.prototype = Object.create(Ul.prototype);
em.prototype.constructor = em;
em.prototype.b = em;
em.c = {};
b.PxCapsuleGeometry = em;
em.prototype.__destroy__ = function() {
  Oh(this.a);
};
function Q() {
  throw "cannot construct a PxConvexMesh, no constructor in IDL";
}
Q.prototype = Object.create(t.prototype);
Q.prototype.constructor = Q;
Q.prototype.b = Q;
Q.c = {};
b.PxConvexMesh = Q;
Q.prototype.getNbVertices = function() {
  return Ph(this.a);
};
Q.prototype.getVertices = function() {
  return Qh(this.a);
};
Q.prototype.getIndexBuffer = function() {
  return Rh(this.a);
};
Q.prototype.getNbPolygons = function() {
  return Sh(this.a);
};
Q.prototype.getPolygonData = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  return !!Th(e, a, c);
};
Q.prototype.release = Q.prototype.release = function() {
  Uh(this.a);
};
Q.prototype.getConcreteTypeName = function() {
  return h(Vh(this.a));
};
Q.prototype.getConcreteType = function() {
  return Wh(this.a);
};
Q.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  Xh(e, a, c);
};
Q.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Yh(c, a);
};
Q.prototype.getBaseFlags = function() {
  return p(Zh(this.a), u);
};
Q.prototype.isReleasable = function() {
  return !!$h(this.a);
};
function fm(a, c, e) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  this.a = void 0 === c ? ai(a) : void 0 === e ? bi(a, c) : ci(a, c, e);
  n(fm)[this.a] = this;
}
fm.prototype = Object.create(Ul.prototype);
fm.prototype.constructor = fm;
fm.prototype.b = fm;
fm.c = {};
b.PxConvexMeshGeometry = fm;
fm.prototype.__destroy__ = function() {
  di(this.a);
};
function R(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = ei(a);
  n(R)[this.a] = this;
}
R.prototype = Object.create(m.prototype);
R.prototype.constructor = R;
R.prototype.b = R;
R.c = {};
b.PxConvexMeshGeometryFlags = R;
R.prototype.isSet = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!fi(c, a);
};
R.prototype.set = R.prototype.set = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  gi(c, a);
};
R.prototype.clear = R.prototype.clear = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  hi(c, a);
};
R.prototype.__destroy__ = function() {
  ii(this.a);
};
function S() {
  this.a = ji();
  n(S)[this.a] = this;
}
S.prototype = Object.create(m.prototype);
S.prototype.constructor = S;
S.prototype.b = S;
S.c = {};
b.PxHullPolygon = S;
S.prototype.get_mPlane = S.prototype.J = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return ki(c, a);
};
S.prototype.set_mPlane = S.prototype.ha = function(a, c) {
  var e = this.a;
  Ql();
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  li(e, a, c);
};
Object.defineProperty(S.prototype, "mPlane", {get:S.prototype.J, set:S.prototype.ha});
S.prototype.get_mNbVerts = S.prototype.I = function() {
  return mi(this.a);
};
S.prototype.set_mNbVerts = S.prototype.ga = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  ni(c, a);
};
Object.defineProperty(S.prototype, "mNbVerts", {get:S.prototype.I, set:S.prototype.ga});
S.prototype.get_mIndexBase = S.prototype.H = function() {
  return oi(this.a);
};
S.prototype.set_mIndexBase = S.prototype.fa = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  pi(c, a);
};
Object.defineProperty(S.prototype, "mIndexBase", {get:S.prototype.H, set:S.prototype.fa});
S.prototype.__destroy__ = function() {
  qi(this.a);
};
function gm(a, c) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  this.a = void 0 === a ? ri() : void 0 === c ? si(a) : ti(a, c);
  n(gm)[this.a] = this;
}
gm.prototype = Object.create(m.prototype);
gm.prototype.constructor = gm;
gm.prototype.b = gm;
gm.c = {};
b.PxMeshScale = gm;
gm.prototype.__destroy__ = function() {
  ui(this.a);
};
function hm() {
  this.a = vi();
  n(hm)[this.a] = this;
}
hm.prototype = Object.create(Ul.prototype);
hm.prototype.constructor = hm;
hm.prototype.b = hm;
hm.c = {};
b.PxPlaneGeometry = hm;
hm.prototype.__destroy__ = function() {
  wi(this.a);
};
function im(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = xi(a);
  n(im)[this.a] = this;
}
im.prototype = Object.create(Ul.prototype);
im.prototype.constructor = im;
im.prototype.b = im;
im.c = {};
b.PxSphereGeometry = im;
im.prototype.__destroy__ = function() {
  yi(this.a);
};
function T(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = zi(a);
  n(T)[this.a] = this;
}
T.prototype = Object.create(m.prototype);
T.prototype.constructor = T;
T.prototype.b = T;
T.c = {};
b.PxConvexFlags = T;
T.prototype.isSet = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!Ai(c, a);
};
T.prototype.set = T.prototype.set = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Bi(c, a);
};
T.prototype.clear = T.prototype.clear = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ci(c, a);
};
T.prototype.__destroy__ = function() {
  Di(this.a);
};
function U() {
  this.a = Ei();
  n(U)[this.a] = this;
}
U.prototype = Object.create(m.prototype);
U.prototype.constructor = U;
U.prototype.b = U;
U.c = {};
b.PxConvexMeshDesc = U;
U.prototype.get_points = U.prototype.N = function() {
  return p(Fi(this.a), V);
};
U.prototype.set_points = U.prototype.la = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Gi(c, a);
};
Object.defineProperty(U.prototype, "points", {get:U.prototype.N, set:U.prototype.la});
U.prototype.get_flags = U.prototype.g = function() {
  return p(Hi(this.a), T);
};
U.prototype.set_flags = U.prototype.l = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ii(c, a);
};
Object.defineProperty(U.prototype, "flags", {get:U.prototype.g, set:U.prototype.l});
U.prototype.__destroy__ = function() {
  Ji(this.a);
};
function Xl() {
  throw "cannot construct a PxCooking, no constructor in IDL";
}
Xl.prototype = Object.create(m.prototype);
Xl.prototype.constructor = Xl;
Xl.prototype.b = Xl;
Xl.c = {};
b.PxCooking = Xl;
Xl.prototype.createConvexMesh = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  return p(Ki(e, a, c), Q);
};
function jm(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = Li(a);
  n(jm)[this.a] = this;
}
jm.prototype = Object.create(m.prototype);
jm.prototype.constructor = jm;
jm.prototype.b = jm;
jm.c = {};
b.PxCookingParams = jm;
jm.prototype.__destroy__ = function() {
  Mi(this.a);
};
function u(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = Ni(a);
  n(u)[this.a] = this;
}
u.prototype = Object.create(m.prototype);
u.prototype.constructor = u;
u.prototype.b = u;
u.c = {};
b.PxBaseFlags = u;
u.prototype.isSet = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!Oi(c, a);
};
u.prototype.set = u.prototype.set = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Pi(c, a);
};
u.prototype.clear = u.prototype.clear = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Qi(c, a);
};
u.prototype.__destroy__ = function() {
  Ri(this.a);
};
function km() {
  throw "cannot construct a PxBaseTask, no constructor in IDL";
}
km.prototype = Object.create(m.prototype);
km.prototype.constructor = km;
km.prototype.b = km;
km.c = {};
b.PxBaseTask = km;
km.prototype.__destroy__ = function() {
  Si(this.a);
};
function V() {
  throw "cannot construct a PxBoundedData, no constructor in IDL";
}
V.prototype = Object.create(m.prototype);
V.prototype.constructor = V;
V.prototype.b = V;
V.c = {};
b.PxBoundedData = V;
V.prototype.get_count = V.prototype.B = function() {
  return Ti(this.a);
};
V.prototype.set_count = V.prototype.Z = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ui(c, a);
};
Object.defineProperty(V.prototype, "count", {get:V.prototype.B, set:V.prototype.Z});
V.prototype.get_stride = V.prototype.R = function() {
  return Vi(this.a);
};
V.prototype.set_stride = V.prototype.qa = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Wi(c, a);
};
Object.defineProperty(V.prototype, "stride", {get:V.prototype.R, set:V.prototype.qa});
V.prototype.get_data = V.prototype.D = function() {
  return Xi(this.a);
};
V.prototype.set_data = V.prototype.aa = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Yi(c, a);
};
Object.defineProperty(V.prototype, "data", {get:V.prototype.D, set:V.prototype.aa});
V.prototype.__destroy__ = function() {
  Zi(this.a);
};
function x(a, c) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  this.a = void 0 === a ? $i() : void 0 === c ? _emscripten_bind_PxBounds3_PxBounds3_1(a) : aj(a, c);
  n(x)[this.a] = this;
}
x.prototype = Object.create(m.prototype);
x.prototype.constructor = x;
x.prototype.b = x;
x.c = {};
b.PxBounds3 = x;
x.prototype.setEmpty = function() {
  bj(this.a);
};
x.prototype.setMaximal = function() {
  cj(this.a);
};
x.prototype.include = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  dj(c, a);
};
x.prototype.isEmpty = function() {
  return !!ej(this.a);
};
x.prototype.intersects = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!fj(c, a);
};
x.prototype.intersects1D = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  return !!gj(e, a, c);
};
x.prototype.contains = x.prototype.contains = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!hj(c, a);
};
x.prototype.isInside = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!ij(c, a);
};
x.prototype.getCenter = function() {
  return p(jj(this.a), C);
};
x.prototype.getDimensions = function() {
  return p(kj(this.a), C);
};
x.prototype.getExtents = function() {
  return p(lj(this.a), C);
};
x.prototype.scaleSafe = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  mj(c, a);
};
x.prototype.scaleFast = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  nj(c, a);
};
x.prototype.fattenSafe = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  oj(c, a);
};
x.prototype.fattenFast = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  pj(c, a);
};
x.prototype.isFinite = x.prototype.isFinite = function() {
  return !!qj(this.a);
};
x.prototype.isValid = function() {
  return !!rj(this.a);
};
x.prototype.get_minimum = x.prototype.L = function() {
  return p(sj(this.a), C);
};
x.prototype.set_minimum = x.prototype.ja = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  tj(c, a);
};
Object.defineProperty(x.prototype, "minimum", {get:x.prototype.L, set:x.prototype.ja});
x.prototype.get_maximum = x.prototype.K = function() {
  return p(uj(this.a), C);
};
x.prototype.set_maximum = x.prototype.ia = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  vj(c, a);
};
Object.defineProperty(x.prototype, "maximum", {get:x.prototype.K, set:x.prototype.ia});
x.prototype.__destroy__ = function() {
  wj(this.a);
};
function lm() {
  this.a = xj();
  n(lm)[this.a] = this;
}
lm.prototype = Object.create(m.prototype);
lm.prototype.constructor = lm;
lm.prototype.b = lm;
lm.c = {};
b.PxDefaultErrorCallback = lm;
lm.prototype.__destroy__ = function() {
  yj(this.a);
};
function Yl() {
  throw "cannot construct a PxFoundation, no constructor in IDL";
}
Yl.prototype = Object.create(m.prototype);
Yl.prototype.constructor = Yl;
Yl.prototype.b = Yl;
Yl.c = {};
b.PxFoundation = Yl;
function bm() {
  throw "cannot construct a PxPhysicsInsertionCallback, no constructor in IDL";
}
bm.prototype = Object.create(m.prototype);
bm.prototype.constructor = bm;
bm.prototype.b = bm;
bm.c = {};
b.PxPhysicsInsertionCallback = bm;
function W(a, c, e, g) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  g && "object" === typeof g && (g = g.a);
  this.a = void 0 === a ? zj() : void 0 === c ? _emscripten_bind_PxQuat_PxQuat_1(a) : void 0 === e ? _emscripten_bind_PxQuat_PxQuat_2(a, c) : void 0 === g ? _emscripten_bind_PxQuat_PxQuat_3(a, c, e) : Aj(a, c, e, g);
  n(W)[this.a] = this;
}
W.prototype = Object.create(m.prototype);
W.prototype.constructor = W;
W.prototype.b = W;
W.c = {};
b.PxQuat = W;
W.prototype.get_x = W.prototype.h = function() {
  return Bj(this.a);
};
W.prototype.set_x = W.prototype.m = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Cj(c, a);
};
Object.defineProperty(W.prototype, "x", {get:W.prototype.h, set:W.prototype.m});
W.prototype.get_y = W.prototype.i = function() {
  return Dj(this.a);
};
W.prototype.set_y = W.prototype.o = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ej(c, a);
};
Object.defineProperty(W.prototype, "y", {get:W.prototype.i, set:W.prototype.o});
W.prototype.get_z = W.prototype.j = function() {
  return Fj(this.a);
};
W.prototype.set_z = W.prototype.s = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Gj(c, a);
};
Object.defineProperty(W.prototype, "z", {get:W.prototype.j, set:W.prototype.s});
W.prototype.get_w = W.prototype.S = function() {
  return Hj(this.a);
};
W.prototype.set_w = W.prototype.sa = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ij(c, a);
};
Object.defineProperty(W.prototype, "w", {get:W.prototype.S, set:W.prototype.sa});
W.prototype.__destroy__ = function() {
  Jj(this.a);
};
function am() {
  this.a = Kj();
  n(am)[this.a] = this;
}
am.prototype = Object.create(m.prototype);
am.prototype.constructor = am;
am.prototype.b = am;
am.c = {};
b.PxTolerancesScale = am;
am.prototype.__destroy__ = function() {
  Lj(this.a);
};
function A(a, c) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  this.a = void 0 === a ? Mj() : void 0 === c ? _emscripten_bind_PxTransform_PxTransform_1(a) : Nj(a, c);
  n(A)[this.a] = this;
}
A.prototype = Object.create(m.prototype);
A.prototype.constructor = A;
A.prototype.b = A;
A.c = {};
b.PxTransform = A;
A.prototype.get_q = A.prototype.O = function() {
  return p(Oj(this.a), W);
};
A.prototype.set_q = A.prototype.ma = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Pj(c, a);
};
Object.defineProperty(A.prototype, "q", {get:A.prototype.O, set:A.prototype.ma});
A.prototype.get_p = A.prototype.M = function() {
  return p(Qj(this.a), C);
};
A.prototype.set_p = A.prototype.ka = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Rj(c, a);
};
Object.defineProperty(A.prototype, "p", {get:A.prototype.M, set:A.prototype.ka});
A.prototype.__destroy__ = function() {
  Sj(this.a);
};
function C(a, c, e) {
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  e && "object" === typeof e && (e = e.a);
  this.a = void 0 === a ? Tj() : void 0 === c ? _emscripten_bind_PxVec3_PxVec3_1(a) : void 0 === e ? _emscripten_bind_PxVec3_PxVec3_2(a, c) : Uj(a, c, e);
  n(C)[this.a] = this;
}
C.prototype = Object.create(m.prototype);
C.prototype.constructor = C;
C.prototype.b = C;
C.c = {};
b.PxVec3 = C;
C.prototype.get_x = C.prototype.h = function() {
  return Vj(this.a);
};
C.prototype.set_x = C.prototype.m = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Wj(c, a);
};
Object.defineProperty(C.prototype, "x", {get:C.prototype.h, set:C.prototype.m});
C.prototype.get_y = C.prototype.i = function() {
  return Xj(this.a);
};
C.prototype.set_y = C.prototype.o = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Yj(c, a);
};
Object.defineProperty(C.prototype, "y", {get:C.prototype.i, set:C.prototype.o});
C.prototype.get_z = C.prototype.j = function() {
  return Zj(this.a);
};
C.prototype.set_z = C.prototype.s = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  ak(c, a);
};
Object.defineProperty(C.prototype, "z", {get:C.prototype.j, set:C.prototype.s});
C.prototype.__destroy__ = function() {
  bk(this.a);
};
function mm() {
  this.a = ck();
  n(mm)[this.a] = this;
}
mm.prototype = Object.create(m.prototype);
mm.prototype.constructor = mm;
mm.prototype.b = mm;
mm.c = {};
b.PxDefaultAllocator = mm;
mm.prototype.__destroy__ = function() {
  dk(this.a);
};
function Zl() {
  throw "cannot construct a PxDefaultCpuDispatcher, no constructor in IDL";
}
Zl.prototype = Object.create(Vl.prototype);
Zl.prototype.constructor = Zl;
Zl.prototype.b = Zl;
Zl.c = {};
b.PxDefaultCpuDispatcher = Zl;
Zl.prototype.__destroy__ = function() {
  ek(this.a);
};
function X() {
  throw "cannot construct a PxJoint, no constructor in IDL";
}
X.prototype = Object.create(t.prototype);
X.prototype.constructor = X;
X.prototype.b = X;
X.c = {};
b.PxJoint = X;
X.prototype.release = X.prototype.release = function() {
  fk(this.a);
};
X.prototype.getConcreteTypeName = function() {
  return h(gk(this.a));
};
X.prototype.getConcreteType = function() {
  return hk(this.a);
};
X.prototype.setBaseFlag = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  ik(e, a, c);
};
X.prototype.setBaseFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  jk(c, a);
};
X.prototype.getBaseFlags = function() {
  return p(kk(this.a), u);
};
X.prototype.isReleasable = function() {
  return !!lk(this.a);
};
function G() {
  throw "cannot construct a PxRevoluteJoint, no constructor in IDL";
}
G.prototype = Object.create(m.prototype);
G.prototype.constructor = G;
G.prototype.b = G;
G.c = {};
b.PxRevoluteJoint = G;
G.prototype.setDriveVelocity = function(a, c) {
  var e = this.a;
  a && "object" === typeof a && (a = a.a);
  c && "object" === typeof c && (c = c.a);
  void 0 === c ? mk(e, a) : nk(e, a, c);
};
G.prototype.getDriveVelocity = function() {
  return ok(this.a);
};
G.prototype.setDriveForceLimit = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  pk(c, a);
};
G.prototype.getDriveForceLimit = function() {
  return qk(this.a);
};
G.prototype.setDriveGearRatio = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  rk(c, a);
};
G.prototype.getDriveGearRatio = function() {
  return sk(this.a);
};
G.prototype.setRevoluteJointFlags = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  tk(c, a);
};
G.prototype.getRevoluteJointFlags = function() {
  return p(uk(this.a), Y);
};
G.prototype.__destroy__ = function() {
  vk(this.a);
};
function Y(a) {
  a && "object" === typeof a && (a = a.a);
  this.a = wk(a);
  n(Y)[this.a] = this;
}
Y.prototype = Object.create(m.prototype);
Y.prototype.constructor = Y;
Y.prototype.b = Y;
Y.c = {};
b.PxRevoluteJointFlags = Y;
Y.prototype.isSet = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  return !!xk(c, a);
};
Y.prototype.set = Y.prototype.set = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  yk(c, a);
};
Y.prototype.clear = Y.prototype.clear = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  zk(c, a);
};
Y.prototype.__destroy__ = function() {
  Ak(this.a);
};
function Z() {
  this.a = Bk();
  n(Z)[this.a] = this;
}
Z.prototype = Object.create(m.prototype);
Z.prototype.constructor = Z;
Z.prototype.b = Z;
Z.c = {};
b.VectorPxVec3 = Z;
Z.prototype.data = Z.prototype.data = function() {
  return Ck(this.a);
};
Z.prototype.size = Z.prototype.size = function() {
  return Dk(this.a);
};
Z.prototype.push_back = function(a) {
  var c = this.a;
  a && "object" === typeof a && (a = a.a);
  Ek(c, a);
};
Z.prototype.__destroy__ = function() {
  Fk(this.a);
};
(function() {
  function a() {
    b.eVISUALIZATION = Gk();
    b.eDISABLE_GRAVITY = Hk();
    b.eSEND_SLEEP_NOTIFIES = Ik();
    b.eDISABLE_SIMULATION = Jk();
    b.eRIGID_STATIC = Kk();
    b.eRIGID_DYNAMIC = Lk();
    b.eARTICULATION_LINK = Mk();
    b.eACTOR_COUNT = Nk();
    b.eACTOR_FORCE_DWORD = Ok();
    b.eFORCE = Pk();
    b.eIMPULSE = Qk();
    b.eVELOCITY_CHANGE = Rk();
    b.eACCELERATION = Sk();
    b.eKINEMATIC = Tk();
    b.eUSE_KINEMATIC_TARGET_FOR_SCENE_QUERIES = Uk();
    b.eENABLE_CCD = Vk();
    b.eENABLE_CCD_FRICTION = Wk();
    b.eENABLE_POSE_INTEGRATION_PREVIEW = Xk();
    b.eENABLE_SPECULATIVE_CCD = Yk();
    b.eENABLE_CCD_MAX_CONTACT_IMPULSE = Zk();
    b.eRETAIN_ACCELERATIONS = $k();
    b.eENABLE_ACTIVE_ACTORS = al();
    b.eENABLE_CCD = bl();
    b.eDISABLE_CCD_RESWEEP = cl();
    b.eADAPTIVE_FORCE = dl();
    b.eENABLE_PCM = el();
    b.eDISABLE_CONTACT_REPORT_BUFFER_RESIZE = fl();
    b.eDISABLE_CONTACT_CACHE = gl();
    b.eREQUIRE_RW_LOCK = hl();
    b.eENABLE_STABILIZATION = il();
    b.eENABLE_AVERAGE_POINT = jl();
    b.eEXCLUDE_KINEMATICS_FROM_ACTIVE_ACTORS = kl();
    b.eENABLE_GPU_DYNAMICS = ll();
    b.eENABLE_ENHANCED_DETERMINISM = ml();
    b.eENABLE_FRICTION_EVERY_ITERATION = nl();
    b.eMUTABLE_FLAGS = ol();
    b.eSIMULATION_SHAPE = pl();
    b.eSCENE_QUERY_SHAPE = ql();
    b.eTRIGGER_SHAPE = rl();
    b.eVISUALIZATION = sl();
    b.eTIGHT_BOUNDS = tl();
    b.e16_BIT_INDICES = ul();
    b.eCOMPUTE_CONVEX = vl();
    b.eCHECK_ZERO_AREA_TRIANGLES = wl();
    b.eQUANTIZE_INPUT = xl();
    b.eDISABLE_MESH_VALIDATION = yl();
    b.ePLANE_SHIFTING = zl();
    b.eFAST_INERTIA_COMPUTATION = Al();
    b.eGPU_COMPATIBLE = Bl();
    b.eSHIFT_VERTICES = Cl();
    b.eOWNS_MEMORY = Dl();
    b.eIS_RELEASABLE = El();
    b.eLIMIT_ENABLED = Fl();
    b.eDRIVE_ENABLED = Gl();
    b.eDRIVE_FREESPIN = Hl();
  }
  Pa ? a() : Na.unshift(a);
})();
this.PhysX = b;



  return PhysX.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = PhysX;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return PhysX; });
    else if (typeof exports === 'object')
      exports["PhysX"] = PhysX;
    