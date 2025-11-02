
## **Challenge 1 — Why does `count` not reset?**


### My answer
- initial instinct i say different instance

- count should be 3
- because of closure, count value is still being remembered at the outer function

### Correct answer
1
2
1

- Each call to createCounter() creates a new execution context, which contains its own separate count variable. The returned function keeps access to that specific count via closure. Because counterA and counterB were created from different calls, they close over different instances of count.