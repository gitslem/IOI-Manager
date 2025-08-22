
IOI Manager

A full-stack application to manage Indications of Interest (IOIs) for equities trading. Built with Spring Boot (Java) backend and React frontend.

⸻

Project Overview

This project simulates a high-touch equities trading workflow, allowing traders to:
	•	Create new IOIs (buy/sell interests in stocks)
	•	View active IOIs in real-time
	•	Automatically expire IOIs after a configurable time

Tech Stack:
	•	Backend: Java, Spring Boot, Spring Data JPA, H2/SQL Database
	•	Frontend: React, Axios
	•	Tools: Maven, Node.js, npm

⸻

Features
	1.	Create IOIs: Traders can submit new buy/sell requests with symbol, quantity, and price.
	2.	View IOIs: Active IOIs displayed in a live-updating table.
	3.	Automatic Expiry: IOIs automatically expire after a default TTL (10 minutes).
	4.	Full-Stack Demo: React frontend interacts with Spring Boot REST API.

⸻

Getting Started

1. Clone the Repository

git clone https://github.com/yourusername/ioi-manager.git
cd ioi-manager


⸻

2. Run Backend (Spring Boot)

Make sure Java 17+ and Maven are installed.

mvn spring-boot:run

	•	Backend will start on http://localhost:8080
	•	API endpoint: http://localhost:8080/api/iois

⸻

3. Run Frontend (React)

Make sure Node.js and npm are installed.

cd ioi-frontend
npm install
npm start

	•	React app will run on http://localhost:3000
	•	Automatically communicates with backend to display and create IOIs

⸻

Project Structure

ioi-manager/
 ┣ src/main/java/com/ioimanager/       # Backend Java code
 ┣ src/main/resources/                 # Spring Boot config
 ┣ ioi-frontend/                       # React frontend
 ┃ ┣ src/components/
 ┃ ┃ ┣ IoiForm.js                     # IOI creation form
 ┃ ┃ ┣ IoiList.js                     # IOI table display
 ┃ ┃ ┗ IoiService.js                  # Axios API service
 ┃ ┗ App.js                            # Main React app
 ┗ pom.xml                             # Maven configuration


⸻

Usage
	1.	Open React frontend in your browser: http://localhost:3000
	2.	Use the form to create new IOIs.
	3.	Active IOIs appear in the table below, refreshing every 5 seconds.
	4.	IOIs expire automatically after the configured TTL.

⸻

Notes
	•	Ensure backend is running before starting frontend.
	•	Adjust TTL for IOIs in the backend if needed.
	•	CORS is enabled for localhost:3000 to allow frontend communication.

⸻

License

MIT License © 2025


If you want, I can also create a short GitHub README with badges, screenshots, and a live demo section to make it look very professional for recruiters.

Do you want me to do that next?
