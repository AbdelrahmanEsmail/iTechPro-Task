🧳 Rahal Web App - Internship Task

📌 Overview

This is a full-stack tourism booking web application built as part of an internship task at iTech Pro. The goal of this project is to demonstrate core skills in building a functional and interactive web application using a custom tech stack.

✨ Key Features
• Homepage listing all tourist destinations.
• Destination Details Page with more information and image.
• Booking Form to submit a booking request:
• User Name
• Email
• Destination
• Preferred Date
• Confirmation Page shown after successful booking.
• Navigation Bar with links to Home and Bookings.

Tech Stack Used
• Frontend: React.js, HTML, CSS, JavaScript, Bootstrap
• Backend: Django REST Framework (Python)
• Database: SQLite (default)

⸻

⚙️ Backend – Django REST API

API Endpoints
• GET /api/destinations/ – Retrieve all destinations.
• GET /api/destinations/<id>/ – Retrieve details for a specific destination.
• POST /api/bookings/ – Submit a booking request.

Models

Destination
• id
• name
• description
• location
• image_url

Booking
• id
• user_name
• email
• destination (ForeignKey to Destination)
• preferred_date
• created_at

⸻

💻 Setup Instructions

🔙 Backend – Django REST API 1. Clone the repo

git clone https://github.com/AbdelrahmanEsmail/iTechPro-Task
cd ITECHPRO_TASK

    2.	Create a virtual environment

python -m venv env
source env/bin/activate # On Windows: env\Scripts\activate

    3.	Install dependencies

pip install -r requirements.txt

    4.	Run migrations

python manage.py makemigrations
python manage.py migrate

    5.	Create a superuser (optional)

python manage.py createsuperuser

    6.	Start the server

python manage.py runserver

The API will be available at: http://127.0.0.1:8000/api/

⸻

🖥️ Frontend – React 1. Navigate to the frontend directory

cd ../frontend

    2.	Install dependencies

npm install

    3.	Run the development server

npm start

The frontend will run on: http://localhost:3000
Make sure the backend is running to allow API integration.

🧠 Future Improvements (Optional)
• Add form validation.
• Implement booking list (admin-only or user-based).
• Implement authentication (JWT or session-based).
• Improve UI with animations or transitions.
