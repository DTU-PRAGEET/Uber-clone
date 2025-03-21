# User Registration Endpoint Documentation

## Endpoint
**POST** `/register`

## Description
Registers a new user by accepting the required data, validating it, and creating a new user record on success.

## Required Data
- **email**: Valid email address.
- **fullname**: An object containing:
  - **firstname**: Minimum 3 characters (required).
  - **lastname**: Minimum 3 characters (optional).
- **password**: Minimum 6 characters.

## Success Response
- **Status Code**: 201 Created
- **Response Body**: 
  - `token`: JWT token for authentication.
  - `user`: Newly created user object.

## Error Response
- **Status Code**: 400 Bad Request
- **Response Body**: 
  - `errors`: Array of validation error messages.

## Example Response
**Success Response Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "603d2149e8e8a50b8c4e4a20",
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    }
  }
}
```

**Error Response Example:**
```json
{
  "errors": [
    {
      "msg": "Password must be at least 6 characters long.",
      "param": "password",
      "location": "body"
    }
  ]
}
```

# User Login Endpoint Documentation

## Endpoint
**POST** `/login`

## Description
Logs in an existing user and returns a JWT token for authentication along with user details.

## Required Data
- **email**: Valid email address.
- **password**: Minimum 6 characters.

## Success Response
- **Status Code**: 200 OK
- **Response Body**: 
  - `token`: JWT token for authentication.
  - `user`: Authenticated user object.

## Error Response
- **Status Code**: 401 Unauthorized
- **Response Body**: 
  - `message`: Authentication failure message.

## Example Response
**Success Response Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "603d2149e8e8a50b8c4e4a20",
    "email": "user@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    }
  }
}
```

# User Profile Endpoint Documentation

## Endpoint
**GET** `/profile`

## Description
Retrieves the authenticated user's profile.

## Headers
- `Authorization`: Bearer token (or token in cookies)

## Success Response
- **Status Code**: 200 OK
- **Response Body**: User object representing the currently logged in user.

## Error Response
- **Status Code**: 401 Unauthorized
- **Response Body**: 
  - `message`: Unauthorized

## Example Response
**Success Response Example:**
```json
{
  "id": "603d2149e8e8a50b8c4e4a20",
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

# User Logout Endpoint Documentation

## Endpoint
**GET** `/logout`

## Description
Logs out the authenticated user by clearing the auth cookie and blacklisting the token.

## Headers
- `Authorization`: Bearer token (or token in cookies)

## Success Response
- **Status Code**: 200 OK
- **Response Body**: 
  - `message`: "Logged out successfully"

## Error Response
- **Status Code**: 401 Unauthorized
- **Response Body**: 
  - `message`: Unauthorized

## Example Response
**Success Response Example:**
```json
{
  "message": "Logged out successfully"
}
```

# Captain Registration Endpoint Documentation

## Endpoint
**POST** `/register`

## Description
Registers a new captain by accepting required data, validating it, and creating a new captain record on success.

## Required Data
- **email**: Valid email address.
- **fullname**: An object containing:
  - **firstname**: Minimum 3 characters (required).
  - **lastname**: Minimum 3 characters (optional).
- **password**: Minimum 6 characters.
- **vehicle**: An object containing:
  - **color**: Minimum 3 characters.
  - **plate**: Minimum 3 characters.
  - **capacity**: A positive integer (at least 1).
  - **vehicleType**: Must be one of 'car', 'motorcycle', or 'auto'.

## Success Response
- **Status Code**: 201 Created
- **Response Body**: 
  - `token`: JWT token for authentication.
  - `captain`: Newly created captain object.

## Error Response
- **Status Code**: 400 Bad Request
- **Response Body**: 
  - `errors` or `message`: Validation errors or conflict message when the captain already exists.

## Example Response
**Success Response Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "id": "603d2149e8e8a50b8c4e4a20",
    "email": "captain@example.com",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

**Error Response Example:**
```json
{
  "errors": [
    {
      "msg": "Password must be at least 6 characters long.",
      "param": "password",
      "location": "body"
    }
  ]
}
```
