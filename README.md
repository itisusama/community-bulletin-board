# Project Folder Structure

community-bulletin-board/
├── public/                  # Static assets (e.g., images, icons)
├── src/                     # Source code
│   ├── appwrite/            # Appwrite setup (SDK and client)
│   │   ├── config.js        # Appwrite configuration
│   ├── components/          # Reusable React components
│   │   ├── Header.js        # Navigation bar
│   │   ├── Footer.js        # Footer
│   │   ├── PostCard.js      # Component for individual posts
│   │   ├── AuthForm.js      # Login/Register form
│   ├── pages/               # Next.js pages
│   │   ├── api/             # API routes (if needed for server-side logic)
│   │   ├── index.js         # Homepage
│   │   ├── login.js         # Login page
│   │   ├── signup.js        # Signup page
│   │   ├── dashboard.js     # User dashboard
│   │   ├── post/            # Dynamic routes for posts
│   │   │   ├── [id].js      # View/edit post details
│   │   │   ├── create.js    # Create post page
│   │   │   ├── edit.js      # Edit post page
│   │   ├── profile.js       # User profile page
│   ├── styles/              # CSS files
│   │   ├── globals.css      # Global styles
│   ├── middleware.js        # Authentication middleware
├── .env.local               # Environment variables
├── package.json             # Project configuration
