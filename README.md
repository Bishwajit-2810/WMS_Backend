# 🌊 Water Quality Monitoring API (LoRa + AI)

A Node.js + Express backend for collecting **LoRa-based water sensor data**, storing it in **MongoDB**, and optionally generating **AI-based insights** using **Google Gemini**.

This API is designed for IoT water monitoring systems where sensor nodes transmit environmental data (temperature, pH, turbidity, flow rate, etc.) to a central server.

---

## 🚀 Features

* 📡 Receive sensor data from LoRa nodes
* 🗄️ Store time-series data in MongoDB
* 📊 Fetch all or latest sensor readings
* 🤖 Generate AI-based responses using Google Gemini
* 🔐 Environment-based configuration using `.env`

---

## 🧠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **Google Generative AI (Gemini)**
* **dotenv**
* **body-parser**

---

## 📁 Project Structure

```text
.
├── server.js              # Main server file
├── package.json
├── .env                   # Environment variables
├── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
API_KEY=your_google_gemini_api_key
mongoUrl=your_mongodb_connection_string
```

---

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

---

## ▶️ Run the Server

```bash
npm start
```

or if you’re using nodemon:

```bash
nodemon server.js
```

Server will start on:

```text
http://localhost:PORT
```

---

## 📡 API Endpoints

### 🔹 Health Check

**GET /**

```json
{
  "message": "Water API is Flowing"
}
```

---

### 🔹 Receive LoRa Sensor Data

**POST /api/data**

**Request Body**

```json
{
  "T": 25.5,
  "D": 350,
  "U": 4.2,
  "P": 7.1,
  "F": 1.8,
  "L": 120,
  "M": 1712345678
}
```

**Response**

```json
{
  "message": "Data saved successfully"
}
```

---

### 🔹 Fetch All Data

**GET /api/data**

Returns all sensor data sorted by latest timestamp.

---

### 🔹 Fetch Latest Sensor Reading

**GET /api/data/latest**

```json
[
  {
    "_id": "...",
    "T": 25.5,
    "D": 350,
    "U": 4.2,
    "P": 7.1,
    "F": 1.8,
    "L": 120,
    "timestamp": "2025-01-01T12:00:00.000Z"
  }
]
```

---

### 🔹 Generate AI Content

**POST /api/content**

**Request Body**

```json
{
  "prompt": "Analyze water quality based on recent data"
}
```

**Response**

```json
{
  "result": "AI-generated response text"
}
```

---

## 🧬 Database Schema

```js
{
  T: Number,   // Temperature
  D: Number,   // TDS
  U: Number,   // Turbidity
  P: Number,   // pH
  F: Number,   // Flow Rate
  L: Number,   // Total Water
  M: Number,   // Timestamp from device
  timestamp: Date
}
```

## 🔮 Future Improvements

* Authentication for API access
* Real-time dashboard (WebSocket)
* Data analytics & anomaly detection
* AI-based water safety alerts
* Rate limiting and validation

---

## 👤 Author

**Bishwajit Kumar Chakraborty**
📧 Email: [bishwajit2810@gmail.com](mailto:bishwajit2810@gmail.com)
🔗 GitHub: [https://github.com/Bishwajit-2810](https://github.com/Bishwajit-2810)
