# eq-works
This is a take home test for EQ Works.


The first part is a server-side rate limiting API. I used the fixed window algorithm to solve this problem. This allocated a fixed (user-specified) time frame between api calls. A user key is created and stored along with the timestamp of the api call. This session information is stored using Redis - an in-memory data structure

The second part requires building UI components to provide client-side illustrations. The data is provided from an AWS RDS server.

I have used Recharts to create linecharts and composed charts and provide visualizations of the data available

I have used material ui to create a table with a search and sort feature.

Ther server side is deployed using Heroku while the client side is deployed using Netlify.

The data provided could be manipulated and visualized with no restrictions. My charts and tables have been designed to provide the most meaningful display of all the data while displaying my ability to create such UI components within the time frame provided.
