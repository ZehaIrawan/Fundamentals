https://sqlzoo.net/wiki/SQL_Tutorial

- JOIN
- Subqueries vs CTEs

2. WHERE vs ON (filter timing)

| Clause  | Filters when |
| ------- | ------------ |
| `ON`    | during join  |
| `WHERE` | after join   |

3. Transactions (production critical)
ACID (real meaning)

Atomicity → all or nothing

Consistency → constraints respected

Isolation → concurrent visibility rules

Durability → committed = persisted

- Index

A database index is a data structure that lets the database find rows faster without scanning the entire table.

Think of it like the index of a book:

Without index → read every page (full table scan)

With index → jump directly to the pages you need

In most relational databases (Postgres, MySQL, SQL Server):

An index is a separate data structure

Usually implemented as a B-Tree

Stores:
- Indexed column value
- Pointer to the actual row (row id / heap location)
- So instead of:

SELECT * FROM users WHERE email = 'a@b.com';
Database does:
- Traverse the B-Tree (O(log n))
- Find the pointer
- Fetch the row directly

“An index is a separate data structure—usually a B-Tree—that maps column values to row locations, allowing the database to avoid full table scans at the cost of extra storage and slower writes.”