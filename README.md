# warren_backend

## API Endpoints

### Authentication

#### Signup

-  **POST /auth/signup**

   -  **Description**: Authenticates a user and returns a token.
   -  **Request Body**:
      ```json
      {
         "firstname": "firstname",
         "lastname": "lastname",
         "password": "pass",
         "emmail": "email"
      }
      ```
   -  **Response**:

      ```json
      {
         "status": "success",
         "data": "user"
      }
      ```

#### Login

-  **POST /auth/login**
   -  **Description**: Authenticates a user and returns a token.
   -  **Request Body**:
      ```json
      {
         "username": "user",
         "password": "pass"
      }
      ```
   -  **Response**:
      ```json
      {
         "status": "success",
         "data": "user"
      }
      ```

### Users

#### Get all Users

-  **GET /user/all**

   -  **Description**: Retrieves a list of all users.
   -  **Response**:
      ```json
      [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john@example.com"
        },
        ...
      ]
      ```

#### Get one User

-  **POST /user/id**
   -  **Description**: Creates a new user.
   -  **Request Body**:
      ```json
      {
         "name": "John Doe",
         "email": "john@example.com",
         "password": "securepassword"
      }
      ```
   -  **Response**:
      ```json
      {
         "id": 1,
         "name": "John Doe",
         "email": "john@example.com"
      }
      ```

#### Update User

-  **POST /user/update/id**
   -  **Description**: Updates a user.
   -  **Request Body**:
      ```json
      {
         "name": "John Doe",
         "email": "john@example.com",
         "gender": "male"
      }
      ```
   -  **Response**:
      ```json
      {
         "id": 1,
         "name": "John Doe",
         "email": "john@example.com",
         "gender": "male"
      }
      ```

#### Delete User

-  **POST /user/update/id**
   -  **Description**: Deletes a user.
   -  **Request Body**:

## Example Usage

### Fetching Users
