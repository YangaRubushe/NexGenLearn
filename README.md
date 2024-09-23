# NexGen Learn

NexGen Learn is an innovative platform that empowers users to create courses with the assistance of advanced technologies. Utilizing the Gemini AI API, users can generate course content tailored to their needs. Additionally, the YouTube API allows users to retrieve relevant videos to enhance their learning experience.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Challenges](#challenges)
- [Learning Objectives](#learning-objectives)
- [Conclusion](#conclusion)
- [Contact](#contact)

## Project Overview
Currently, I am working solo on this project. My background in computer science and software engineering, with a specialization in backend development, helps me bring this vision to life. 

## Technologies Used
The main technologies used in this project include:
- **Next.js**: For building a fast and responsive front-end.
- **React**: For creating user interfaces.
- **Tailwind CSS**: For styling.
- **Gemini API**: For generating course content.
- **Drizzle**: For database management.
- **YouTube API**: For integrating educational videos.

## Features
- Course creation with AI-generated content.
- Progress tracking for users.
- Interactive learning modules.
- User authentication and management via Clerk.
- Ability to share courses with others.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YangaRubushe/nexgenlearn.git
   cd nexgenlearn

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file from the `.env.example` template:
   ```bash
   cp .env.example .env
   ```

4. Add your environment variables in the `.env` file.

## Usage

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000.

## Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key_here
CLERK_FRONTEND_API=your_clerk_frontend_api_here
FIREBASE_API_KEY=your_firebase_api_key_here
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
FIREBASE_PROJECT_ID=your_firebase_project_id_here
```

## Challenges

Some challenges anticipated during development include:
- Managing time effectively.
- Ensuring seamless integration of technologies.
- Debugging issues that arise during development.

## Learning Objectives

My learning objectives for this project include:
- Mastering full-stack development
- Understanding AI integration
- Enhancing my project management skills

## Conclusion

NexGen Learn is set to be a transformative educational platform. I am eager to share my progress and look forward to any feedback or questions you may have.

## Contact

For collaboration or feedback, please reach out to me at:
- GitHub: YangaRubushe
- Twitter: YangaRubushe
- LinkedIn: Yanga Rubushe

## .env.example

```plaintext
# NexGen Learn Environment Variables

# Gemini AI API Key
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# YouTube API Key
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key_here

# Clerk Frontend API Key for authentication management
CLERK_FRONTEND_API=your_clerk_frontend_api_here
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Firebase Configuration for storing data and images
FIREBASE_API_KEY=your_firebase_api_key_here
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
FIREBASE_PROJECT_ID=your_firebase_project_id_here

# Add additional environment variables as needed for your application
NEXT_PUBLIC_DB_CONNECTION_STRING=your_db_url
NEXT_PUBLIC_HOST_NAME=your_localhost_url
