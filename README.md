**Express Course API**

This is a simple Express.js application that serves as an API for managing courses. It includes token-based authentication using JWT tokens and utilizes Swagger for API documentation.

**Installation**

1.Clone this repository to your local machine.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Steps for cloning are as follows:

          1.Make a folder

          2.Open the folder in any code editor

          3.Now open terminal in code editor

          4.Now write the command git clone "http.link"

2.Navigate to the project directory.

3.Install dependencies using npm:

       npm install

**Swagger Documentation**

The API documentation is available at /api-docs endpoint. You can access it by navigating to http://localhost:4000/api-docs after starting the server.

**Routes:**

1.  Registration

    Route: /register

    Method: POST

    Description: Registers a new user and returns a JWT token.

    Request Body:

    username:"name of the user"

    Response: JWT token.

2.  Courses

    Route: /courses

    Method: GET

    Description: Retrieves all courses.

    Authorization: Requires a valid JWT token in the request headers.

    Response: Array of course objects.

    Starting the Server

    To start the server, run the following command:

           npm run watch

The server will start listening on the specified port (default is 4000) and you will see a message in the console indicating the server is running.

**Dependencies**:

express: ^4.17.1

swagger-jsdoc: ^6.1.0

swagger-ui-express: ^4.1.6

dotenv: ^10.0.0

yamljs: ^0.4.4
