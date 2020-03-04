# Spec

Write tested code (in any OO language, such as C# or Java) that
accepts a numeric type and returns a truncated, "prettified" string
version.  The prettified version should include one number after
the decimal when the truncated number is not an integer.  It should
prettify numbers greater than 6 digits and support millions,
billions and trillions.

## Notes on spec

While the above says "truncated", the examples give a case where
9487634567534 turns into 9.5T. It seems that the intent of the spec is
to truncate to a certain number of digits, but to round the final
digit. That gives rise to the question of whether 999,999,999 should
be prettified as 999.9M or 1B (or 1.0B). Our implementation makes the
assumption that it, and in fact any number greater than 999,950,000,
should be 1B.
