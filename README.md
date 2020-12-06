# <small>@localized/</small> *core*

This package is not intended for usage, instead it exposes functions common to all `@localized` packages.

## Contributing

### Adding a function

Open the necessary file and just add your function! (TypeScript)

Example:

```ts
// array.ts

export function tail() {
  return function<A>(array: A[]) {
    return array.slice(1);
  }
}
```

As you can see, the function should take no arguments and return another function doing the necessary operations.

### Adding a file

Create the new file, add all the functions you need then go in `main.ts`, import it (naming it `fileName` or `concurrentFileName` or `sequentialFileName` based on type) and export it:

```ts
// foo.ts

export function lots() {
  return function (...f: (...args: any[]) => any) {
    for (let funct of f) {
      console.log(funct());
    }
  }
}
```

```ts
// sequential/foo.ts

export function lots() {
  return async function (...f: (...args: any[]) => Promise<any>) {
    for (let funct of f) {
      console.log(await funct());
    }
  }
}
```

```ts
// main.ts

import * as foo from './foo';
import * as sequentialFoo from './sequential/foo';

export = {
  // ...
  foo
  // ...
  sequential: {
    // ...
    foo: sequentialFoo
    // ...
  }
}
```

### Finalizing

Run `npm test` and push.

## License

MIT
