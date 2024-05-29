Assign-Mentor API
This documentation provides details about the Assign-Mentor API, implemented using Node.js and Express. This API allows you to manage mentors and students, assign mentors to students, change mentors, and retrieve mentor-student relationships.

Base URL: http://localhost:4000

Packages installed:

Express: npm install express

Cors: npm install cors

Dotenv: npm install dotenv

Mongoose: npm install mongoose

1. POST Create Mentor
http://localhost:4000/api/mentor/create

Create Mentor

Description: Creates a new mentor with details about the mentor.

URL: /api/mentor/create

Method: POST

Example: http://localhost:4000/api/mentor/create


2. POST Create Student

http://localhost:4000/api/student/create

POST Create Student

URL: /api/student/create

Description: Creates a new student with details about the student.

Method: POST

Example: http://localhost:4000/api/student/create


3. GET Display All Mentors

http://localhost:4000/api/mentor/all-mentors

Display All Mentors

URL: /api/mentor/mentors

Description: Retrieves and displays the list of all mentors.

Method: GET

Example: http://localhost:4000/api/mentor/all-mentors


4. GET Display all Students

http://localhost:4000/api/student/all-students

GET Display All Students

URL: /api/student/students

Description: Retrieves and displays the list of all students.

Method: GET

Example: http://localhost:4000/api/student/all-students


5. PUT Assign students to mentor

http://localhost:4000/api/mentor/assign/665719d090123c0986bbff2a

Assign Students to Mentor

URL: /api/mentor/assign/:id

Description: Assigns multiple students to a specific mentor.

Method: PUT

Example:http://localhost:4000/api/mentor/assign/665719d090123c0986bbff2a


6. PUT Change mntr for one std

http://localhost:4000/api/mentor/change-mentor/66571bbc01359215f8c7117c

Change Mentor for One Student

URL: /api/mentor/change-mentor/:id

Description: Changes the mentor for a specific student and records the previous mentor.

Method: PUT

Example:

http://localhost:4000/api/mentor/changementor/66571bbc01359215f8c7117c


7. GET Display students of the mentor

http://localhost:4000/api/mentor/students/665716d86eebd693694b38a2

Display Students of the Mentor

URL: /api/mentor/students/:id

Description: Retrieves and displays the list of all students assigned to a specific mentor.

Method: GET

Example: http://localhost:4000/api/mentor/students/665716d86eebd693694b38a2


8. GET Previous Mentor

http://localhost:4000/api/mentor/previous-mentors/66571bbc01359215f8c7117c

Previous Mentor

URL: /api/mentor/previous-mentors/:id

Description: Retrieves and displays the list of previous mentors for a specific student.

Method: GET

Example:

http://localhost:4000/api/mentor/previous-mentors/66571bbc01359215f8c7117c


The postman documentation link is as follows: https://documenter.getpostman.com/view/35182338/2sA3QtfC1k