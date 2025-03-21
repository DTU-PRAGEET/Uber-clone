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
