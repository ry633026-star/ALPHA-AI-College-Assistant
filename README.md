# ALPHA is a full-stack MERN-based AI College Assistant that provides secure authentication, role-based access,and an AI-powered chatbot for students, along with an admin dashboard.

# Tech Stack:-
Frontend: React, Tailwind CSS--
Backend: Node.js, Express.js, MongoDB--
Auth: JWT, bcrypt--
AI: n8n

# Run Locally:-
cd backend && npm install && node server.js ,
cd frontend && npm install && npm start

# Features:-
JWT authentication (Access & Refresh Tokens) ,
Role-based access (Admin / User) ,
AI chatbot integration using n8n ,
Protected admin routes ,
React + Tailwind CSS UI ,
MongoDB database

# n8n Workflow – ALPHA Chatbot

This folder contains the n8n workflow used for the AI chatbot integration in the ALPHA project.

## Description
- Handles incoming chat requests from the React frontend
- Processes messages using n8n automation logic
- Sends AI-generated responses back via webhook

## How to Use
1. Import the JSON file into n8n
2. Configure required credentials (API keys, tokens)
3. Activate the workflow

> Note: Credentials are not included for security reasons.

