<!-- https://chatgpt.com/c/695ae672-73bc-8320-b790-45723b8ee182 -->

SQL is written top-down, but executed bottom-up.

# Learning path

1. SELECT + WHERE (Filtering rows)

Mental model

- SELECT = which columns you want

- FROM = which table

- WHERE = which rows


```sql
SELECT id, email
FROM users
WHERE country = 'ID'
  AND created_at >= '2024-01-01';
```

Order of execution (important!)

1. FROM
2. WHERE
3. SELECT

⚠️ You cannot use column aliases in WHERE:

2. JOINs (Combining tables)

Mental model

- Tables are connected via foreign keys

- JOIN answers: “Give me data from table A + related data from table B”

INNER JOIN (most common), Only matching rows

```sql
SELECT o.id, u.email
FROM orders o
JOIN users u ON o.user_id = u.id;
```

LEFT JOIN, Keep all left rows, even if no match
```sql
SELECT u.email, o.id
FROM users u
LEFT JOIN orders o ON o.user_id = u.id;
```

3. GROUP BY / HAVING (Aggregation)

Mental model

- GROUP BY = bucket rows
- Aggregate functions collapse rows → 1 row per group
```sql
SELECT user_id, COUNT(*) AS total_orders
FROM orders
GROUP BY user_id;
```

Rule (very important)

If a column is in SELECT, it must be:

- in GROUP BY, or inside an aggregate function

HAVING vs WHERE

- WHERE → filters rows before grouping, HAVING → filters groups after aggregation
```sql
SELECT user_id, COUNT(*) AS total_orders
FROM orders
GROUP BY user_id
HAVING COUNT(*) >= 5;
```


4. Indexes
Mental model

Index = sorted lookup table
- Faster reads
- Slower writes
- Extra storage

Like table of content

Composite index?

5. Transactions

6. EXPLAIN plan

7. ORM → SQL mapping

#Filter
WHERE → filters rows

HAVING → filters groups