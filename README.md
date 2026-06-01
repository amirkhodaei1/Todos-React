# 🚀 AXIOM Todo System

A futuristic and responsive Todo Application built with **React**, **Axios**, **JSON Server**, and **Sonner Toast Notifications**.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Axios](https://img.shields.io/badge/Axios-API-purple?logo=axios)
![Vite](https://img.shields.io/badge/Vite-Build-yellow?logo=vite)
![JSON Server](https://img.shields.io/badge/JSON--Server-Mock%20API-green)
![License](https://img.shields.io/badge/License-MIT-red)

---

## ✨ Features

### 📋 Task Management

* Create new tasks instantly
* Mark tasks as completed
* Restore completed tasks
* Delete tasks permanently
* Real-time UI updates

### 🔍 Smart Filtering

* View all tasks
* View completed tasks
* View pending tasks

### 🎨 Modern UI

* Futuristic Cyberpunk Design
* Glassmorphism Effects
* Dynamic Animations
* Responsive Layout
* Smooth User Experience

### 🔔 Notifications

* Success notifications
* Error notifications
* Interactive feedback using Sonner

---

## 🛠️ Technologies Used

| Technology  | Purpose              |
| ----------- | -------------------- |
| React       | Frontend Framework   |
| Vite        | Fast Build Tool      |
| Axios       | API Requests         |
| JSON Server | Mock REST API        |
| Sonner      | Toast Notifications  |
| React Icons | Icons Library        |
| CSS3        | Styling & Animations |

---

## 📁 Project Structure

```bash
src/
│
├── axios/
│   └── api.js
│
├── App.jsx
├── App.css
├── main.jsx
│
└── assets/
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/axiom-todo.git
cd axiom-todo
```

### Install Dependencies

```bash
npm install
```

### Install JSON Server

```bash
npm install -g json-server
```

---

## 🚀 Running The Project

### Start JSON Server

Create a `db.json` file:

```json
{
  "todos": [
    {
      "id": 1,
      "title": "Learn React",
      "isTodo": false
    }
  ]
}
```

Run:

```bash
json-server --watch db.json --port 3000
```

### Start Development Server

```bash
npm run dev
```

Application:

```bash
http://localhost:5173
```

API:

```bash
http://localhost:3000
```

---

## 🔗 API Endpoints

### Get All Todos

```http
GET /todos
```

### Create Todo

```http
POST /todos
```

Body:

```json
{
  "title": "New Task",
  "isTodo": false
}
```

### Update Todo

```http
PATCH /todos/:id
```

### Delete Todo

```http
DELETE /todos/:id
```

---

## 🧠 Core Functionality

### Fetch Todos

```javascript
const fetchTodo = async () => {
  const res = await api.get('/todos');
  setTodos(res.data);
}
```

### Add Todo

```javascript
api.post('/todos', {
  title: new_todo_title,
  isTodo: false
})
```

### Toggle Completion

```javascript
api.patch(`todos/${todo.id}`, {
  ...todo,
  isTodo: !todo.isTodo
})
```

### Delete Todo

```javascript
api.delete(`todos/${todo.id}`)
```

---

## 🎯 Future Improvements

* Authentication System
* Dark / Light Mode
* Drag & Drop Tasks
* Task Categories
* Task Priority Levels
* Due Dates
* Search Functionality
* Cloud Database Integration
* User Profiles
* PWA Support

---

## 📸 Preview

```text
┌──────────────────────────────┐
│          AXIOM OS            │
│      SYSTEM TASK MANAGER     │
├──────────────────────────────┤
│ [ Add New Task          ] [+]│
├──────────────────────────────┤
│ FULL | DONE | PENDING        │
├──────────────────────────────┤
│ ✔ Learn React                │
│ ✔ Build API                  │
│ ○ Design UI                  │
└──────────────────────────────┘
```

---

## 👨‍💻 Author

Developed with ❤️ using React, Axios and Vite.

---

## 📜 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project.

---
## 🚀 AI-Enhanced Development

This project was rebuilt and optimized using modern AI-assisted development workflows. Artificial Intelligence was utilized to help refactor code, improve architecture, enhance user experience, and apply modern React development best practices.

The final implementation combines human design decisions with AI-powered code optimization to achieve better maintainability, readability, and performance.
The readme created With AI
