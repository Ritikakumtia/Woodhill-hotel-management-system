# 🌿 Woodhill – Hotel Booking Web App

A modern full-stack hotel booking web application built with **React, Tailwind CSS, Node.js, and Express**.
Includes authentication, room browsing, booking system, and live chat support.

---

## 🚀 Features

### 🏨 Core Features

* Browse hotel rooms with details
* Dynamic room pages (`/room/:roomId`)
* User authentication (Login/Register)
* Protected dashboard (Private Routes)
* Booking system (secured APIs)

### 🎨 UI/UX

* Fully responsive design using **Tailwind CSS**
* Modern footer with:

  * Quick links
  * Services section
  * Contact details
  * Social media links
* Smooth scroll & hover effects

### 💬 Live Chat Support

* Integrated **Tawk.to live chat**
* Footer chat trigger button
* Real-time customer interaction

### 📩 Newsletter Subscription

* Email subscription API (`/api/subscribe`)
* Backend integration ready (MongoDB optional)

---

## 🛠 Tech Stack

### Frontend

* React 18
* React Router DOM
* Tailwind CSS
* Flowbite React
* React Icons

### Backend

* Node.js
* Express.js
* REST APIs

---

## 📁 Project Structure

```
client/
 ├── src/
 │   ├── components/
 │   │   ├── Navbar.jsx
 │   │   ├── Footer.jsx
 │   │   ├── PrivateRoute.jsx
 │   ├── pages/
 │   │   ├── Home.jsx
 │   │   ├── LoginPage.jsx
 │   │   ├── RegisterPage.jsx
 │   │   ├── Dashboard.jsx
 │   ├── App.js

server/
 ├── routes/
 │   ├── route.js
 ├── controllers/
 ├── models/
 ├── index.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/woodhill.git
cd woodhill
```

---

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

### 3️⃣ Run Project

#### Start Backend

```bash
npm run dev
```

#### Start Frontend

```bash
npm start
```

---

### 4️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🔌 API Endpoints



---

## 🔐 Authentication

* JWT-based authentication
* Protected routes using `PrivateRoute`
* Secure API calls

---

## 🎯 Future Improvements

* 📍 Google Maps integration
* ⭐ Reviews & ratings
* 📊 Admin dashboard

---



## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Ritika Kumtia**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

Woodhill Hotel & Restaurant: your cozy haven nestled in the heart of Nainital. Located amidst the serene beauty of the Himalayas, our hotel and restaurant offer a simple yet charming retreat for travelers seeking a peaceful getaway.        
![Screenshot (22)](https://github.com/user-attachments/assets/018dbd37-be14-4d9c-849d-47a0ec7d526c)
![Screenshot (12)](https://github.com/user-attachments/assets/1bfd0829-bc8b-4b0c-a23c-f76e4a901419)
![Screenshot (13)](https://github.com/user-attachments/assets/e8069c9c-4ae8-4ce5-9c2d-310eae619b2e)
![Screenshot (14)](https://github.com/user-attachments/assets/e7e25b60-ef21-4bac-8261-98ee26b951b0)
![Screenshot (15)](https://github.com/user-attachments/assets/8b992bfd-2e0a-4491-9143-ea54cac54df9)
![Screenshot (16)](https://github.com/user-attachments/assets/4e7f4ff8-8635-473f-893b-b6ecba7cef52)
![Screenshot (17)](https://github.com/user-attachments/assets/3054e70e-2663-40d7-819d-dc6d0d93f7ee)
![Screenshot (18)](https://github.com/user-attachments/assets/87001ad8-2b89-47cb-bebb-195604a2017b)
![Screenshot (19)](https://github.com/user-attachments/assets/2bbce452-b8d5-439e-bea3-96f95beab726)
![Screenshot (20)](https://github.com/user-attachments/assets/fb184365-935c-4416-9b7e-50245f1537c3)
![Screenshot (21)](https://github.com/user-attachments/assets/c9236e15-1d5a-4009-b5aa-26dd926c56be)

React: Frontend library for building user interfaces.
Node.js: JavaScript runtime for server-side development.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing application data.
here's a general workflow from the frontend in React to the backend with the MVC (Model-View-Controller) architecture:


