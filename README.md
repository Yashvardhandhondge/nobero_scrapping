
---

# Nobero E-Commerce Platform

## Overview

Nobero E-Commerce Platform is a comprehensive web application designed to facilitate a seamless online shopping experience. The platform features a modern React frontend, a Django backend with RESTful APIs, and a web scraping module for data extraction. The application is built to support various functionalities including product listing, filtering, and dynamic content loading.

## Project Structure

The project consists of three main components:

1. **Frontend (React)**: The user interface for browsing products, viewing details, and filtering options.
2. **Backend (Django)**: The server-side application providing APIs for product data and handling business logic.
3. **Scrapy Module**: A data scraping tool for extracting product information from the Nobero website.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Django, Django REST Framework
- **Data Scraping**: Scrapy, Selenium
- **Database**: SQLite (Django default)

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (for React)
- Python (for Django and Scrapy)
- pip (for Python package management)
- Django (for backend)
- Scrapy (for data scraping)

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
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

#### 2. Backend (Django)

1. Navigate to the `noberoproject` directory:
   ```bash
   cd noberoproject
   ```

2. Create a virtual environment and activate it:
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

2. Install Scrapy and other dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Scrapy spider:
   ```bash
   scrapy crawl men2
   ```

   This will start scraping product data from the Nobero website and save it to the specified output files.

## Directory Structure

- **nobero**: Contains the React application.
  - `src/components`: React component files (e.g., `Banner.jsx`, `ProductList.jsx`).
  - `index.html`: Main HTML file.
  - `package.json`: Project metadata and dependencies.
  - `vite.config.js`: Vite configuration file.

- **nobero_scraper**: Contains the Scrapy project for data scraping.
  - `spiders`: Scrapy spider files.
  - `settings.py`: Scrapy settings.
  - `items.py`: Scrapy item definitions.
  - `pipelines.py`: Scrapy data pipelines.

- **noberoproject**: Contains the Django project.
  - `products`: Django app for managing products.
    - `models.py`: Product models.
    - `views.py`: API views.
    - `serializers.py`: Data serializers.
  - `manage.py`: Django management commands.
  - `db.sqlite3`: SQLite database.

## API Endpoints

- **Products API**: `/api/products/`
  - GET: Retrieve a list of products with optional filtering.

## Contributing

Contributions are welcome! Please ensure that your changes are well-tested and follow the project's coding standards. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

---


