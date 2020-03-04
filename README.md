# prettify-number

`prettify-number` is a utility to prettify numbers, by displaying the
first few digits and up to one decimal place, with an indicator of the
magnitude (M for million, B for billion, and T for trillion).

## PREREQUISITES

Install node/npm.

## USAGE

This is a TypeScript program designed for use in node.js.

```
import {prettifyNumber} from "./prettify-number";

console.log(prettifyNumber(123456789012));
```

## COMPONENT AND HTML INTERFACE

We have provided a web component (build using `lit-element`) around
this number prettification logic and made it available through a web
page.

    $ npm start

which is equivalent to

    $ npm run build    # bundle the component and its dependencies
    $ npm run serve    # run a local server

Then, visit `localhost:8080`.

The web assets are found in the `dist` directory.

## DEVELOPMENT

Clone the repo, then run `npm install`.

## TESTS

    $ npm t

In additional to console output, this will place test results
artifacts in the `artifacts/test-results` directory, including
`test-results.html` and various formats of coverage files.

## SEE ALSO

* [spec](docs/SPEC.md)
* [design notes](docs/DESIGN-NOTES.md).
