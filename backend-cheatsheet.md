# BoltFitness Backend Implementation Guide

## 🚀 Complete Backend Setup

### 1. Dependencies & Installation
```bash
npm install express cors dotenv bcrypt jsonwebtoken mongoose nodemailer stripe
npm install -D nodemon concurrently
```

### 2. Production-Ready Server (server.js)
```js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/boltfitness');

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  membershipType: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Nutrition Form Schema
const nutritionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  fitnessGoal: String,
  dietaryRestrictions: String,
  createdAt: { type: Date, default: Date.now }
});

const NutritionForm = mongoose.model('NutritionForm', nutritionSchema);

// Routes
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, phone, membershipType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      name, email, phone, membershipType,
      password: hashedPassword
    });
    
    await user.save();
    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/nutrition', async (req, res) => {
  try {
    const nutritionForm = new NutritionForm(req.body);
    await nutritionForm.save();
    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 3. Environment Variables (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/boltfitness
JWT_SECRET=your_super_secure_jwt_secret_key_here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
```

### 4. Package.json Scripts
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "client": "npm run dev",
    "server": "nodemon server.js",
    "build": "npm run build",
    "heroku-postbuild": "npm run build"
  }
}
```

## 🔧 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Forms
- `POST /api/nutrition` - Nutrition form submission
- `POST /api/contact` - Contact form
- `POST /api/membership` - Membership signup

### Data
- `GET /api/users` - Get all users (admin)
- `GET /api/trainers` - Get trainer profiles
- `GET /api/classes` - Get class schedules

## 🌐 Frontend Integration

### API Service (src/services/api.js)
```js
const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://your-app.herokuapp.com/api'
  : 'http://localhost:5000/api';

export const api = {
  post: async (endpoint, data) => {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  get: async (endpoint) => {
    const response = await fetch(`${API_BASE}${endpoint}`);
    return response.json();
  }
};
```

### Usage in Components
```js
import { api } from '../services/api';

// Submit nutrition form
const handleSubmit = async (formData) => {
  try {
    const result = await api.post('/nutrition', formData);
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🚀 Deployment Guide

### Heroku Deployment
```bash
# Install Heroku CLI
heroku create your-app-name
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
heroku config:set JWT_SECRET=your_secret
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

### MongoDB Atlas Setup
1. Create account at mongodb.com/atlas
2. Create cluster and database
3. Get connection string
4. Add to environment variables

### Additional Features
- Email notifications with Nodemailer
- Payment processing with Stripe
- File uploads with Multer
- Real-time chat with Socket.IO
- Analytics with Google Analytics API

---
