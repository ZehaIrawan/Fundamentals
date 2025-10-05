| Code                                   | What Happens                      | Output  |
| -------------------------------------- | --------------------------------- | ------- |
| `counter++`                            | Return old value → then increment | 0, 1, 2 |
| `++counter` or increment before return | Increment → then return new value | 1, 2, 3 |


Both are valid — it just depends on when you want to count to start.
For example:

Use counter++ if you want zero-based (e.g. index, iteration count).

Use ++counter if you want one-based (e.g. human-readable count, user IDs).