

📘 User Management System
This is a full-stack User Management System built using:

Frontend: React.js

Backend: Node.js, Express.js, SQLite

Authentication: bcrypt (password hashing), JWT (token-based login)

Styling: (Optional — Add CSS, Bootstrap, etc., if used)

🚀 Features
✅ Current Functionality
🧑 Backend (Node.js + Express + SQLite)
Register new users (hashed passwords)

User login with JWT token

Fetch all users

Fetch user by ID

Update user details

Delete user

Search users by name

🌐 Frontend (React.js)
User Signup form

User Login form

Dashboard or User List (if built)

Navigation between Login and Signup

🔧 Technologies Used
📦 Backend
Node.js

Express.js

SQLite

bcrypt (password hashing)

cors (CORS configuration)

sqlite (with async/await)

jsonwebtoken (for login token generation)

🖼️ Frontend
React.js

react-router-dom (v6)

api (for API calls)

🗂️ API Endpoints (Backend Routes)
Method	Endpoint	Description
GET	/	Home route
GET	/users	Get all users
GET	/user/:user_id	Get a user by ID
POST	/users	Create a new user
PUT	/user/:user_id	Update user by ID
DELETE	/user/:user_id	Delete user by ID
GET	/search?name=xyz	Search users by name
POST	/login	Login and get JWT token

📁 Project Structure
pgsql
Copy
Edit
/backend
  ├── users.db
  ├── index.js       # Express + SQLite API
  └── package.json

/frontend
  ├── src
  │   ├── components
  │   ├── pages
  │   ├── App.js
  │   └── index.js
  └── package.json
🚧 Future Development Ideas
🔜 Frontend
Dashboard to view/edit/delete users

Role-based UI (Admin, User, etc.)

Form validations (e.g., regex email, strong password)

Toast notifications (success/error)

Pagination and sorting of user list

Forgot password functionality

User profile page

🔜 Backend
User roles (Admin, Normal)

Email verification system

Password reset with email link

Refresh token-based authentication

Logging and error handling middleware

Integration with frontend deployment (e.g., Netlify + Render)

Migrate SQLite to PostgreSQL or MongoDB (for production scaling)

📦 Packages Used
Backend
nginx
Copy
Edit
npm install express sqlite3 sqlite bcrypt cors jsonwebtoken
Frontend
nginx
Copy
Edit
npm install react-router-dom axios
🛠️ Setup Instructions
📍 Backend
bash
Copy
Edit
cd backend
npm install
node index.js
📍 Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
Make sure to set the correct CORS origin in backend:

js
Copy
Edit
app.use(cors({ origin: "http://localhost:3001" }));
And update frontend API URLs to http://localhost:3000 (or your backend port).
