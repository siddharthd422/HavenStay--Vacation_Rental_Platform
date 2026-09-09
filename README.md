# 🏡 HavenStay – Vacation Rental Platform

HavenStay is a full-stack MERN-based vacation rental platform inspired by Airbnb. It allows users to discover unique stays, create and manage property listings, book accommodations, and share reviews through a clean and responsive interface.

---

## 🚀 Live Demo

🔗 Live Website: https://heavenstay-ten.vercel.app/listings

---

## 📌 Features

### 👤 User Authentication
- Secure user registration and login
- Passport.js Local Authentication
- Session-based authentication
- Flash messages for user feedback

### 🏠 Property Listings
- Create, edit, and delete listings
- Upload listing images using Cloudinary
- Detailed property descriptions
- Price, location, and country information

### ⭐ Reviews & Ratings
- Add reviews to listings
- Delete own reviews
- One review per user per listing
- Review validation

### 🔒 Authorization
- Only listing owners can edit or delete listings
- Only review authors can delete their reviews
- Protected routes using middleware

### ☁️ Image Upload
- Cloudinary integration
- Multer + Multer Storage Cloudinary
- Automatic image storage and optimization

### 💾 Session Management
- Express Session
- MongoDB session store using Connect-Mongo
- Persistent login sessions

### 🎨 User Interface
- Responsive design
- Bootstrap 5
- EJS Templates
- Server-side rendering

### ⚠️ Error Handling
- Custom error handling middleware
- Async error wrapper
- Express error classes
- User-friendly error pages

---

# 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- Passport.js
- Passport Local
- Express Session

### Cloud Storage
- Cloudinary

### Deployment
- Render
- MongoDB Atlas

---

# 📂 Project Structure

```
HavenStay
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── public/
│   ├── css/
│   ├── js/
│
├── views/
│   ├── listings/
│   ├── users/
│   ├── layouts/
│
├── utils/
├── init/
├── app.js
├── cloudConfig.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/siddharthd422/HavenStay-Vacation-Rental-Platform.git
```

Navigate to the project

```bash
cd HavenStay-Vacation-Rental-Platform
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret
```

Start the server

```bash
npm start
```

or

```bash
nodemon app.js
```

---

# 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| ATLASDB_URL | MongoDB Atlas Connection String |
| SECRET | Express Session Secret |
| CLOUD_NAME | Cloudinary Cloud Name |
| CLOUD_API_KEY | Cloudinary API Key |
| CLOUD_API_SECRET | Cloudinary API Secret |

---

# 📷 Screenshots

> Add screenshots here

- Home Page
- Listing Details
- Login Page
- Add Listing
- User Dashboard

---

# 📈 Future Improvements

- Booking system
- Payment gateway integration
- Wishlist functionality
- Search with filters
- Interactive maps
- Email notifications
- User profiles
- Admin dashboard

---

# 📚 What I Learned

- Building a complete MVC architecture using Express.js
- Authentication and authorization with Passport.js
- Session management using Connect-Mongo
- RESTful routing
- Cloudinary image storage
- MongoDB data modeling with Mongoose
- Middleware and error handling
- Deploying a MERN application using Render and MongoDB Atlas

---

# 👨‍💻 Author

**Siddharth Singh Dangi**

GitHub: https://github.com/siddharthd422

LinkedIn: *# 🏡 HavenStay – Vacation Rental Platform

HavenStay is a full-stack MERN-based vacation rental platform inspired by Airbnb. It allows users to discover unique stays, create and manage property listings, book accommodations, and share reviews through a clean and responsive interface.

---

## 🚀 Live Demo

🔗 Live Website: https://havenstay-vacation-rental-platform.onrender.com

---

## 📌 Features

### 👤 User Authentication
- Secure user registration and login
- Passport.js Local Authentication
- Session-based authentication
- Flash messages for user feedback

### 🏠 Property Listings
- Create, edit, and delete listings
- Upload listing images using Cloudinary
- Detailed property descriptions
- Price, location, and country information

### ⭐ Reviews & Ratings
- Add reviews to listings
- Delete own reviews
- One review per user per listing
- Review validation

### 🔒 Authorization
- Only listing owners can edit or delete listings
- Only review authors can delete their reviews
- Protected routes using middleware

### ☁️ Image Upload
- Cloudinary integration
- Multer + Multer Storage Cloudinary
- Automatic image storage and optimization

### 💾 Session Management
- Express Session
- MongoDB session store using Connect-Mongo
- Persistent login sessions

### 🎨 User Interface
- Responsive design
- Bootstrap 5
- EJS Templates
- Server-side rendering

### ⚠️ Error Handling
- Custom error handling middleware
- Async error wrapper
- Express error classes
- User-friendly error pages

---

# 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- Passport.js
- Passport Local
- Express Session

### Cloud Storage
- Cloudinary

### Deployment
- Render
- MongoDB Atlas

---

# 📂 Project Structure

```
HavenStay
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── public/
│   ├── css/
│   ├── js/
│
├── views/
│   ├── listings/
│   ├── users/
│   ├── layouts/
│
├── utils/
├── init/
├── app.js
├── cloudConfig.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/siddharthd422/HavenStay-Vacation-Rental-Platform.git
```

Navigate to the project

```bash
cd HavenStay-Vacation-Rental-Platform
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret
```

Start the server

```bash
npm start
```

or

```bash
nodemon app.js
```

---

# 📈 Future Improvements

- Booking system
- Payment gateway integration
- Wishlist functionality
- Search with filters
- Interactive maps
- Email notifications
- User profiles
- Admin dashboard

---

# 📚 What I Learned

- Building a complete MVC architecture using Express.js
- Authentication and authorization with Passport.js
- Session management using Connect-Mongo
- RESTful routing
- Cloudinary image storage
- MongoDB data modeling with Mongoose
- Middleware and error handling
- Deploying a MERN application using Render and MongoDB Atlas

---

# 👨‍💻 Author

**Siddharth Singh Dangi**

GitHub: https://github.com/siddharthd422

LinkedIn: www.linkedin.com/in/siddharth~singh~dangi

---

# 📄 License

This project is intended for learning and portfolio purposes.

---

# 📄 License

This project is intended for learning and portfolio purposes.
