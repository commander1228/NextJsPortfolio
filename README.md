# Full Stack Portfolio Project

This is a full-stack portfolio web application with:

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Django](https://www.djangoproject.com/)
- **Database**: (Optional) MongoDB, PostgreSQL, etc.
- **Styling**: Vanilla CSS (with Tailwind optional)

---

## 📁 Project Structure

```
root/
│
├── backend/            # Django backend
│   ├── manage.py
│   └── ...
│
├── frontend/           # Next.js frontend
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

## ⚙️ Requirements

Make sure you have the following installed:

- **Node.js** (v18 or later)  
- **Python** (3.9+)
- **pip** and **virtualenv**
- **npm** or **yarn**
- **Git**

---

## 🚀 Getting Started

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

---

### 🧪 2. Backend Setup (Django)

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start the development server
python manage.py runserver
```

The Django backend will be available at:  
📍 `http://127.0.0.1:8000/`

---

### 🖼️ 3. Frontend Setup (Next.js)

```bash
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

The frontend will be available at:  
📍 `http://localhost:3000/`

---

## 📫 Contact

For any help, contact:

- **Kian Wheeler**: `youremail@example.com`
- **GitHub**: [commander1228](https://github.com/commander1228)

---

## ✅ To Do

- [ ] Hook up frontend to backend API
- [ ] Add authentication
- [ ] Add live project data and contact form
- [ ] Deploy to Vercel / Render / Heroku / etc.

---

## 🧾 License

MIT License. Use freely for learning or portfolio projects.