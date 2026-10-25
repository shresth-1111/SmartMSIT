# 🖥️ SmartMSIT — Smart Computer Lab Monitoring System

**SmartMSIT** is a system monitoring solution designed to monitor the health and performance of computers in college laboratories. It helps identify potential system issues by tracking important performance metrics and presenting system health information in an understandable format.

The project aims to make computer lab monitoring easier, improve visibility into system performance, and help identify computers that may require attention.

🏆 **Achievement:** First Prize Winner at the College IIC Ideathon.

## ✨ Key Features

* 📊 **System Performance Monitoring** — Track essential system performance metrics.
* 🧠 **Resource Utilization Analysis** — Monitor CPU and RAM usage.
* 💾 **Disk Monitoring** — Check disk usage and available storage.
* 🌐 **Network Connectivity Checks** — Monitor internet connectivity.
* 🚦 **System Health Status** — Categorize systems as Healthy, Warning, or Unhealthy based on monitored metrics.
* 📄 **Automated Reports** — Generate reports to help identify performance issues.
* 🔄 **Periodic Monitoring** — Collect system health information at regular intervals.
* 🏫 **Lab-Focused Design** — Designed around the needs of computer laboratories in educational institutions.

## 🛠️ Tech Stack

* **Python** — System monitoring and backend logic.
* **Flask** — Web application framework, if used in the current implementation.
* **HTML & CSS** — User interface and templates.
* **psutil** — System resource monitoring, if used in the implementation.

## 📂 Project Structure

```text
SmartMSIT/
│
├── static/           # Static assets such as CSS and JavaScript
├── templates/        # HTML templates
├── app.py            # Main application
├── system_stats.py   # System monitoring and performance metrics
├── requirements.txt  # Python dependencies
└── .gitignore        # Files excluded from Git
```

## ⚙️ Getting Started

### Prerequisites

* Python 3.10 or later
* pip

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd SmartMSIT
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it:

**Windows**

```bash
venv\Scripts\activate
```

**macOS / Linux**

```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Application

```bash
python app.py
```

Open the local URL displayed in the terminal to access the application.

## 🎯 Problem We Aim to Solve

Computer laboratories often contain multiple systems that may experience high resource utilization, low storage, or connectivity issues. Identifying these problems manually can be time-consuming.

SmartMSIT aims to simplify this process through periodic system monitoring, clear health indicators, and automated reporting.

## 🏆 Achievement

🥇 **First Prize — College IIC Ideathon**

SmartMSIT was developed as an innovative solution to improve computer laboratory monitoring and system health visibility.

## 🔮 Future Scope

* Centralized monitoring of multiple laboratory computers.
* Historical performance tracking and analytics.
* Configurable resource usage thresholds.
* Improved dashboards for laboratory administrators.
* Early warning mechanisms for potential system failures.

---

**Smarter monitoring. Healthier systems. Better labs.** 🚀
