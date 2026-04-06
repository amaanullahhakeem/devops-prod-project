# 🚀 DevOps Node.js App

- 📖 Overview

This project is a simple Node.js application built to demonstrate a complete DevOps workflow. It includes containerization using Docker, service orchestration with Docker Compose, and a CI/CD pipeline using GitHub Actions to automate build and deployment on AWS EC2.

# 🛠 Tech Stack

- Node.js (Express): Used to build the backend REST API
- MongoDB: Used as a NoSQL database to store application data
- Docker: Used to containerize the application for consistent environments
- Docker Compose: Used to run multi-container applications easily
- Nginx: Used as a reverse proxy to handle incoming traffic
- GitHub Actions: Used to automate CI/CD pipeline (build & deploy)
- AWS EC2: Used to host and run the application in the cloud

# ⚙️ Features

- REST API with Express
- MongoDB database integration
- Dockerized multi-container setup
- Nginx reverse proxy
- Automated CI/CD pipeline
- Deployment on AWS EC2

# 📦 Run Locally

docker compose up --build -d

# 🌐 Access Application

http://localhost:80

# 🚀 CI/CD Pipeline

- Build Docker image
- Push image to DockerHub
- Deploy application to EC2 using SSH

# 📌 Author
Aman Ullah
