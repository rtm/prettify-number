# prettify-number

## ORIGINAL PROBLEM STATEMENT

#### Code Exercise - Write a number prettifier:

Write tested code (in any OO language, such as C# or Java) that
accepts a numeric type and returns a truncated, "prettified" string
version.  The prettified version should include one number after
the decimal when the truncated number is not an integer.  It should
prettify numbers greater than 6 digits and support millions,
billions and trillions.

### NOTES ON SPEC

1. The spec says that we shold prettify numbers greater than 6 digits.
   It does not say what should happen when a number six or less digits
   (or negative) is passed in. We choose to pass it through as it.

2. The behavior when the "truncated number is not an integer" is
   subject to interpretation. The problem statement can be read as
   implying that one truncates first, and if the result is an integer
   then display no decimal digit. We adopt a slightly different
   interpretation, which is that if there are any significant digits
   at all after the displayed portion, we display the decimal
   digit. So "9000000" would come out as "9M", but "9000001" would be
   "9.0M". We have added a test case to verify this behavior.

## USAGE

This is a TypeScript program designed for use in node.js.

```
import {prettifyNumber} from "./prettify-number";

console.log(prettifyNumber(123456789012));
```

## COMPONENT AND HTML INTERFACE

We have provided a web component (build using `lit-element`) around this number prettification logic and made it available through a web page.

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
