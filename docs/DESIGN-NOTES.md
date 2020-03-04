# Design Notes for `prettify-number`

There were a couple of design choices here, the primary one being
whether to express the logic as a series of simple conditional
statements, as we have done here, or to think of M/B/T as a kind of
miniature three-element table that we loop through to find the
applicable case.

In this case, we've chosen to write this in a way which is simple
(but hopefully not "simple-minded"!) and obviously correct. The
table-driven, algorithmic approach might be appropriate if we expected
the spec to expand in the future to include handling of numbers
between 1,000 and 999,999 ("12.3K"), or units greater than one
trillion. But even in those cases our solution is easily extended by
adding one or two more cases.
