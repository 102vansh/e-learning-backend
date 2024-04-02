# Course Schema

This markdown document describes the mongoose schema used for defining courses in the application.

## Schema Definition

The course schema consists of the following fields:

1. **title**:
   - Type: String
   - Required: true
   - Description: Represents the title of the course.

2. **description**:
   - Type: String
   - Required: true
   - Description: Provides a description of the course.

3. **category**:
   - Type: String
   - Required: true
   - Description: Indicates the category or topic of the course.

4. **views**:
   - Type: Number
   - Default: 2
   - Description: Tracks the number of views for the course.

5. **numberoflectures**:
   - Type: Number
   - Default: 1
   - Description: Indicates the total number of lectures in the course.

6. **createdBy**:
   - Type: ObjectId
   - Ref: "User"
   - Description: References the user who created the course.

7. **lectures**:
   - Type: Array of Objects
   - Description: Contains details of each lecture within the course, including title, description, and video information.

8. **level**:
   - Type: String
   - Enum: ['hard', 'medium', 'easy']
   - Description: Represents the difficulty level of the course.

9. **enrolledUsers**:
   - Type: Array of ObjectId
   - Ref: "User"
   - Description: Tracks the users enrolled in the course.

## Export

The mongoose model for the course schema is exported as `Course`.

---

# User Schema

This markdown document describes the mongoose schema used for defining users in the application.

## Schema Definition

The user schema consists of the following fields:

1. **name**:
   - Type: String
   - Required: true
   - Description: Represents the name of the user.

2. **email**:
   - Type: String
   - Required: true
   - Unique: true
   - Description: Stores the email address of the user, which must be unique.

3. **password**:
   - Type: String
   - Required: true
   - Description: Stores the hashed password of the user.

4. **avatar**:
   - Type: Object
   - Properties:
     - **public_id**: String
     - **url**: String
   - Description: Stores information about the user's avatar image, including the public ID and URL.

5. **role**:
   - Type: String
   - Enum: ['admin', 'user']
   - Description: Indicates the role of the user, which can be either 'admin' or 'user'.

6. **resetpasstoken**:
   - Type: String
   - Description: Stores the token generated for password reset.

## Methods

The user schema defines methods for password hashing, password comparison, token generation, and token expiration.

## Export

The mongoose model for the user schema is exported as `User`.

