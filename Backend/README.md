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

# Captain Routes Documentation

This section provides examples for the captain endpoints with annotated JSON.

## POST /register
### Request Body Example:
```json
{
  // email must be a valid email address
  "email": "captain@example.com",
  "fullname": {
    // firstname is required, minimum 3 characters
    "firstname": "Jane",
    // lastname is optional, if provided must be at least 3 characters
    "lastname": "Doe"
  },
  // password is required, minimum 6 characters
  "password": "password123",
  "vehicle": {
    // color is required, minimum 3 characters
    "color": "Red",
    // plate is required, minimum 3 characters
    "plate": "XYZ123",
    // capacity is required, a positive integer (minimum 1)
    "capacity": 4,
    // vehicleType is required; must be one of "car", "motorcycle", or "auto"
    "vehicleType": "car"
  }
}
```

### Success Response Example:
```json
{
  // JWT token for authentication
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

## POST /login
### Request Body Example:
```json
{
  // email must be a valid email address
  "email": "captain@example.com",
  // password is required, minimum 6 characters
  "password": "password123"
}
```

### Success Response Example:
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

## GET /profile
### Success Response Example:
```json
{
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
    // ...other captain-specific fields...
  }
}
```

## GET /logout
### Success Response Example:
```json
{
  // Message indicating successful logout and token blacklisting
  "message": "Captain logged out successfully"
}
```




# Ride Routes Documentation

## POST /rides/create
### Description
Creates a new ride request.

### Required Data
- **pickup**: The pickup location (string, minimum 3 characters).
- **destination**: The destination location (string, minimum 3 characters).
- **vehicleType**: The type of vehicle (must be one of 'auto', 'car', or 'moto').

### Headers
- `Authorization`: Bearer token (or token in cookies).

### Success Response
- **Status Code**: 201 Created
- **Response Body**: 
  - `ride`: The newly created ride object.

### Error Response
- **Status Code**: 400 Bad Request
- **Response Body**: 
  - `errors`: Array of validation error messages.

- **Status Code**: 500 Internal Server Error
- **Response Body**: 
  - `message`: Error message.

### Example Response
**Success Response Example:**
```json
{
  "ride": {
    "user": "603d2149e8e8a50b8c4e4a20",
    "pickup": "Dwarka Sector-14, Delhi",
    "destination": "Connaught Place, Delhi",
    "fare": 193,
    "status": "pending",
    "otp": "123456",
    "_id": "64f8c2e5b2f4c2a1b8e4d123"
  }
}
```

---

## GET /rides/get-fare
### Description
Calculates the fare for a ride based on the pickup and destination locations.

### Query Parameters
- **pickup**: The pickup location (string, minimum 3 characters).
- **destination**: The destination location (string, minimum 3 characters).

### Headers
- `Authorization`: Bearer token (or token in cookies).

### Success Response
- **Status Code**: 200 OK
- **Response Body**: 
  - `fare`: Object containing fare details for different vehicle types.

### Error Response
- **Status Code**: 400 Bad Request
- **Response Body**: 
  - `errors`: Array of validation error messages.

- **Status Code**: 500 Internal Server Error
- **Response Body**: 
  - `message`: Error message.

### Example Response
**Success Response Example:**
```json
{
  "auto": 100,
  "car": 150,
  "moto": 80
}
```

---

# Maps Routes Documentation

## GET /maps/get-coordinates
### Description
Fetches the geographical coordinates (latitude and longitude) for a given address.

### Query Parameters
- **address**: The address to fetch coordinates for (string, minimum 3 characters).

### Headers
- `Authorization`: Bearer token (or token in cookies).

### Success Response
- **Status Code**: 200 OK
- **Response Body**: 
  - `coordinates`: Object containing latitude and longitude.

### Error Response
- **Status Code**: 400 Bad Request
- **Response Body**: 
  - `errors`: Array of validation error messages.

- **Status Code**: 404 Not Found
- **Response Body**: 
  - `message`: "Coordinates not found".

### Example Response
**Success Response Example:**
```json
{
  "ltd": 28.7041,
  "lng": 77.1025
}
```

---

## GET /maps/get-distance-time
### Description
Fetches the distance and estimated travel time between two locations.

### Query Parameters
- **origin**: The starting location (string, minimum 3 characters).
- **destination**: The destination location (string, minimum 3 characters).

### Headers
- `Authorization`: Bearer token (or token in cookies).

### Success Response
- **Status Code**: 200 OK
- **Response Body**: 
  - `distance`: Object containing distance details.
  - `duration`: Object containing duration details.

### Error Response
- **Status Code**: 400 Bad Request
- **Response Body**: 
  - `errors`: Array of validation error messages.

- **Status Code**: 500 Internal Server Error
- **Response Body**: 
  - `message`: Error message.

### Example Response
**Success Response Example:**
```json
{
  "distance": {
    "text": "10 km",
    "value": 10000
  },
  "duration": {
    "text": "20 mins",
    "value": 1200
  }
}
```

---

## GET /maps/get-suggestions
### Description
Fetches autocomplete suggestions for a given input string.

### Query Parameters
- **input**: The input string to fetch suggestions for (string, minimum 3 characters).

### Headers
- `Authorization`: Bearer token (or token in cookies).

### Success Response
- **Status Code**: 200 OK
- **Response Body**: 
  - `suggestions`: Array of suggestion objects.

### Error Response
- **Status Code**: 400 Bad Request
- **Response Body**: 
  - `errors`: Array of validation error messages.

- **Status Code**: 500 Internal Server Error
- **Response Body**: 
  - `message`: Error message.

### Example Response
**Success Response Example:**
```json
[
  {
    "description": "Dwarka Sector-14, Delhi",
    "place_id": "ChIJd8BlQ2BZwokRAFUEcm_qrcA"
  },
  {
    "description": "Connaught Place, Delhi",
    "place_id": "ChIJL_P_CXMEDTkRw0ZdG-0GVvw"
  }
]
```
