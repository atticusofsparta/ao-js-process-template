### Issues

- `ao build` for a c project resulted in:

```sh
No data in config file. Defaulting to preset: md
Traceback (most recent call last):
  File "/usr/local/bin/ao-build-module", line 159, in <module>
    main()
  File "/usr/local/bin/ao-build-module", line 73, in main
    c_program = inject_c_files(definition, c_program, c_source_files)
TypeError: inject_c_files() missing 1 required positional argument: 'link_libraries'
```
