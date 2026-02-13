# What makes an API RESTful?

In a REST (Representational State Transfer) API, everything is considered a resource (e.g., a user, a product, an order), identified by a unique Uniform Resource Identifier (URI), often a URL.

HTTP methods GET, POST, PUT, DELETE

So an API is RESTful if it's conforms to the design principles of REST


Benefit of REST
- Scalability: REST APIs are stateless, meaning each request from a client contains all the information needed to process it, and the server does not store any client-specific information between requests. This eliminates the need to manage server-side sessions, making it easier to scale applications horizontally by adding more servers

- Simplicity, use common web standard and conenvtion

- Separation of concerns, client and server are independent of each other

Alternatives for architectural style

- Graphql
- gRPC
- WebSockets