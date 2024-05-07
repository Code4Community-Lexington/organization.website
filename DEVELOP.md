### Installing dependencies

```shell
npm ci
```

### Formatting and Linting

```shell
npm run lint #test project for compatibility with linting rules
npm run fix  #attempt to automatically fix any linting incompatibilities

```

### Building, Running, and Previewing

```shell
npm run build #build the project and outputs it to `./dist/`
npm run start #build the project and hosts it on `http://localhost:4321` *with* live reload
npm run preview #build the project and host it on `http://localhost:4321` *without* live reloads
npm run astro #quickly access astro subcommands
```

### Testing

```shell
npm run test #runs vitest
```
