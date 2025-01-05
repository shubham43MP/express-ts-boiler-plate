# Express-TypeScript-Prisma Boilerplate 🚀

Welcome to the **Express-TypeScript-Prisma Boilerplate**! 🎉  
This is your ultimate kickstart to building scalable, modern, and maintainable RESTful APIs using **Express**, **TypeScript**, **Prisma**, and **PostgreSQL**.

---

## Why This Boilerplate? 🤔

- 🔥 **TypeScript**: Say goodbye to runtime errors!
- ⚡ **Prisma**: Enjoy seamless database management with a modern ORM.
- 🛠️ **Modular Architecture**: Clean and scalable code structure.
- 🧪 **Pre-configured Testing**: Built-in Jest setup for TDD/BDD.
- 🚀 **Extensible**: Add features and scale effortlessly.
- 📋 **Validation**: Joi validation middleware for consistent data integrity.
- ✨ **Customizable**: A perfect starting point for your next project!

---

## Features ✨

- 🏗️ MVC Architecture
- ✅ RESTful Routes (User Example Included)
- 🎨 Centralized Error Handling with `CustomException`
- 🔐 Prisma Client for PostgreSQL
- 🔍 Joi Middleware for Validation
- 🛡️ Pre-configured ESLint and Prettier for Code Quality
- ⚙️ Dynamic Seeding for Your Database
- 🚧 Easy-to-Extend API Routes
- 🌱 Support for Migrations and Seed Data

---

## Getting Started 🛠️

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/express-ts-prisma-boilerplate.git
cd express-ts-prisma-boilerplate
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Set Up Environment Variables
Copy the example .env file and update it with your database credentials:
```bash
cp .env.example .env
```

### 4. Run Migrations
Apply database migrations:
```bash
npm run migrate:dev
```

### 5. Start the Development Server
Run the application:
```bash
yan run dev
```
The server will start on http://localhost:3200. 🎉

### Folder Structure
```
express-ts-prisma-boilerplate
├── prisma
│   ├── migrations       # Database migration files
│   ├── seed             # Seed scripts for initial data
│   └── schema.prisma    # Prisma schema
├── src
│   ├── config           # Database configuration
│   ├── controllers      # Route controllers
│   ├── middlewares      # Custom middlewares
│   ├── routes           # API route definitions
│   ├── services         # Business logic and database queries
│   ├── utils            # Helper utilities (e.g., logger)
│   └── validations      # Joi validation schemas
├── .env                 # Environment variables
├── package.json         # Project metadata and scripts
└── tsconfig.json        # TypeScript configuration
```


### How to Contribute ❤️
We welcome contributions from everyone! 🙌
Check out our CONTRIBUTING.md to get started.

### What's Next? 🌟
Add your own routes and controllers to extend the API.
Customize the error handler for your specific needs.
Implement authentication (e.g., JWT) for secure endpoints.
