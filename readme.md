# SimpleTimeService 🚀

![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue) ![Docker](https://img.shields.io/badge/Docker-Ready-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

A **minimal TypeScript microservice** that returns the **current timestamp** and the **visitor's IP address** in JSON format. Perfect for testing Docker, containers, and cloud deployments.

---

## 📁 Project Structure

```plaintext
simple-time-service/
├── app/          # Node.js application & Dockerfile
│   ├── src/      # TypeScript source code
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
└── terraform/    # Optional: Terraform infrastructure code
```

---

## 🌐 API Endpoint

* **URL:** `/`
* **Method:** `GET`
* **Response Example:**

```json
{
  "timestamp": "2025-12-12T10:00:00.123Z",
  "ip": "::1"
}
```

---

## ⚙️ Prerequisites

* [Node.js](https://nodejs.org/) >= 18
* [Docker](https://www.docker.com/) >= 20
* (Optional) Terraform >= 1.5

---

## 💻 Local Development

### Install Dependencies

```bash
cd app
npm install
```

### Build TypeScript

```bash
npm run build
```

### Run Locally

```bash
npm start
```

Open in browser or curl:

```bash
curl http://localhost:3000/
```

---

## 🐳 Docker Deployment

### Build Image

```bash
docker build -t simple-time-service .
```

### Run Container

```bash
docker run -p 3000:3000 simple-time-service
```

Visit: `http://localhost:3000/`

### Pull Public Image (DockerHub)

```bash
docker pull <username>/simple-time-service:latest
docker run -p 3000:3000 <username>/simple-time-service:latest
```

---

## 📦 Docker Best Practices

* Multi-stage build for smaller image ✅
* Non-root user for security ✅
* Production dependencies only in runtime ✅
* `.dockerignore` prevents unnecessary files ✅

---

## 🛠 Terraform Deployment (Optional)

1. Navigate to terraform folder:

```bash
cd terraform
```

2. Initialize Terraform:

```bash
terraform init
```

3. Plan Deployment:

```bash
terraform plan
```

4. Apply Deployment:

```bash
terraform apply
```

> ⚠️ Never commit secrets to GitHub. Use environment variables or Terraform variables for credentials.

---

## 📜 Testing

```bash
curl http://localhost:3000/
```

Expected JSON response:

```json
{
  "timestamp": "2025-12-12T10:00:00.123Z",
  "ip": "::1"
}
```

---

## 👨‍💻 Author

* Created by **Your Name**
* GitHub: [https://github.com/<your-username>](https://github.com/<your-username>)
