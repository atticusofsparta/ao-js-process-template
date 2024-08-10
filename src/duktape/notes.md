- added CMakeLists.txt
- moved duktape files to /src
- built with:

```sh
docker run --rm --platform linux/amd64 -v $(pwd):/src -w /src p3rmaw3b/ao emcmake cmake . -B build \
&& \
docker run --rm --platform linux/amd64 -v $(pwd):/src -w /src p3rmaw3b/ao emmake make -C build
```

- ran the following in the src folder after copying the output libduktape_static.a to the `/libs` folder:

```sh
ao build
```

- recieved the same error as from building the static lib with emcc:

```sh
atticus@macbook36gb src % ao build
Traceback (most recent call last):
  File "/usr/local/bin/ao-build-module", line 159, in <module>
    main()
  File "/usr/local/bin/ao-build-module", line 81, in main
    c_program = inject_lua_files(definition, c_program, injected_lua_files)
  File "/usr/local/ao-module/ao_module_lib/languages/lua.py", line 63, in inject_lua_files
    if lines[0].find("\xef\xbb\xbf") != -1:
IndexError: list index out of range
```
