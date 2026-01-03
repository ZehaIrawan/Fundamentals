In SQL, a transaction is a way to group multiple database operations so they are treated as one single unit of work.

👉 Either all of them succeed, or none of them are applied.


```sql
BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

UPDATE accounts
SET balance = balance + 100
WHERE id = 2;

COMMIT;
```

Transactions follow ACID rules