# NGFit - Fitness Training Management Platform

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18%2B-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org)

## 📱 Overview

NGFit is a full-stack fitness training management application designed for personal trainers and fitness coaches. It features a Telegram mini-app integration for seamless schedule management, client handling, and real-time workout tracking.

### Key Features

- 📅 **Advanced Schedule Management** - Calendar-based workout scheduling with color-coded days
- 👥 **Client Management** - Track clients, their progress, and training programs
- 💪 **Exercise Tracking** - Manage exercise library with descriptions and muscle groups
- 📊 **Real-time Synchronization** - Instant updates across all devices
- 🤖 **Telegram Mini-App** - Fully integrated Telegram bot interface
- 🎨 **Dark Theme UI** - Modern, user-friendly dark interface
- 🔐 **Secure Authentication** - Telegram-based user verification

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18
- **Language**: TypeScript 5.2
- **Database**: PostgreSQL with Drizzle ORM
- **API**: RESTful with CORS support

### Frontend
- **Framework**: React 18+
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Dark theme CSS
- **Components**: Custom React components

## 📦 Project Structure

```
NGFit/
├── server/
│   ├── index.ts                 # Main Express server
│   ├── db.ts                    # Database connection
│   ├── routers/
│   │   ├── fitness.ts          # Fitness endpoints
│   │   ├── clients.ts          # Client management
│   │   ├── exercises.ts        # Exercise library
│   │   └── schedule.ts         # Schedule management
│   └── schema/
│       └── schema.ts           # Drizzle ORM schema
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Schedule.tsx    # Main schedule page
│   │   ├── components/
│   │   └── App.tsx
│   └── vite.config.ts
├── drizzle/                     # Database migrations
├── package.json
├── .env.example
├── tsconfig.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nikitavadnv-prog/NGFit.git
cd NGFit
```

2. **Install dependencies**
```bash
npm install
cd client && npm install && cd ..
```

3. **Configure environment**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Setup database**
```bash
npm run db:migrate
npm run db:push
```

5. **Start development server**
```bash
npm run dev
```

## 📝 API Endpoints

### Fitness Management
- `GET /api/fitness/schedule` - Get training schedule
- `POST /api/fitness/schedule` - Create new training
- `PUT /api/fitness/schedule/:id` - Update training
- `DELETE /api/fitness/schedule/:id` - Delete training

### Clients
- `GET /api/clients` - List all clients
- `POST /api/clients` - Add new client
- `GET /api/clients/:id` - Get client details
- `PUT /api/clients/:id` - Update client

### Exercises
- `GET /api/exercises` - List all exercises
- `POST /api/exercises` - Add new exercise
- `GET /api/exercises/:id` - Get exercise details

### Schedule
- `GET /api/schedule` - Get full schedule
- `POST /api/schedule` - Create schedule entry

## 🔧 Configuration

Create `.env` file based on `.env.example`:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/ngfit

# Server
PORT=3000
NODE_ENV=development

# Telegram
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_API_ID=your_api_id
TELEGRAM_API_HASH=your_api_hash

# Mini App
MINI_APP_URL=https://yourdomain.com
MINI_APP_TOKEN=your_token

# CORS
CORS_ORIGIN=https://yourdomain.com,http://localhost:5173
```

## 🧪 Available Scripts

```bash
# Development
npm run dev              # Start both server and client
npm run dev:server      # Start server only
npm run dev:client      # Start client only

# Production
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:migrate      # Generate migrations
npm run db:push         # Push migrations to database
```

## 📱 Telegram Mini-App Integration

The app is fully integrated with Telegram mini-apps. Open the bot (@FitTraining_Manager_bot) and click "Open App" to access the full interface.

## 🔐 Security

- Token-based authentication
- CORS protection
- Environment variable security
- Database connection pooling
- SQL injection prevention with ORM

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

NGFit Team - Fitness Training Management Platform

## 🙏 Acknowledgments

- Express.js community
- Drizzle ORM team
- React community
- Telegram Bot API

---

**Made with ❤️ for fitness trainers and athletes**
