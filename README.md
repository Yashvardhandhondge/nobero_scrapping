# Nobero E-Commerce Platform

## Overview

Nobero E-Commerce Platform is a comprehensive web application designed to provide a seamless online shopping experience. It includes a React frontend, a Django backend with RESTful APIs, and a Scrapy-based web scraping module. The platform supports features such as product listing, filtering, and dynamic content loading.

## Screenshots

### Admin Panel with Scraped Data


![Admin Panel]
![Screenshot (238)](https://github.com/user-attachments/assets/21249235-0345-41ea-8d30-85c388f3bebd)
![Screenshot (239)](https://github.com/user-attachments/assets/a77b4b64-7e46-4b43-b1a5-c663b425b087)

*Description: Screenshot of the admin panel showing the scraped product data.*

### React App UI

![React ]!![Uploading Screenshot 2024-08-23 190140.png…]()
[S![Uploading Screenshot 2024-08-23 181834.png…]()
creenshot 2024-08-23 181852](https://github.com/user-attachments/assets/76c0cc2c-92c4-4449-bf25-b12d8d444feb)
![Screenshot (236)](https://github.com/user-attachments/assets/36151849-fd84-49d8-b372-b906fcdc7ee4)
![Screenshot (237)](https://github.com/user-attachments/assets/ede4ee50-6e0a-4fb3-a4bd-f22b1efbed27)



*Description: Screenshot of the React app user interface.*

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Django, Django REST Framework
- **Data Scraping**: Scrapy, Selenium
- **Database**: SQLite (Django default)

## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (for React)
- Python (for Django and Scrapy)
- pip (for Python package management)

### Setup

#### 1. Frontend (React)

1. Navigate to the `nobero` directory:
    ```bash
    cd nobero
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

#### 2. Backend (Django)

1. Navigate to the `noberoproject` directory:
    ```bash
    cd noberoproject
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Apply migrations:
    ```bash
    python manage.py migrate
    ```

5. Start the Django server:
    ```bash
    python manage.py runserver
    ```
    The backend will be available at `http://127.0.0.1:8000`.

#### 3. Data Scraping (Scrapy)

1. Navigate to the `nobero_scraper` directory:
    ```bash
    cd nobero_scraper
    ```

2. Install Scrapy if not already installed:
    ```bash
    pip install scrapy
    ```

3. Run the Scrapy spider to start scraping:
    ```bash
    scrapy crawl men2
    ```

## API Endpoints

- **List Products**: `GET /api/products/`
- **Retrieve Product**: `GET /api/products/{id}/`

