# NGFit Deployment & Launch Guide

## 🚀 Quick Start (Ready to Launch!)

Your NGFit Telegram bot is fully configured and ready to run immediately.

### Bot Token
✅ **Status**: CONFIGURED
```
Bot ID: 8346680551
Token: 8346680551:AAEAFrTK8yEogbjWMD4KsR8gBlRprTlizZg
```

## 👨‍🖣️ Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/nikitavadnv-prog/NGFit.git
cd NGFit
```

### 2. Install Dependencies
```bash
npm install
cd client && npm install && cd ..
```

### 3. Configure Environment
```bash
cp .env.example .env
```

Edit `.env` and update:
```env
DATABASE_URL=postgresql://your_user:password@localhost:5432/ngfit
PORT=3000
NODE_ENV=development
MINI_APP_URL=http://localhost:5173
```

### 4. Setup Database
```bash
npm run db:migrate
npm run db:push
```

## 🚀 Running the Bot

### Option 1: Full Stack (Server + Client + Bot)
```bash
npm run dev
```
This starts:
- ✅ Express server on `http://localhost:3000`
- ✅ React frontend on `http://localhost:5173`
- ✅ Telegram bot (polling)

### Option 2: Bot Only
```bash
npm run dev:server
```

### Option 3: Frontend Only
```bash
cd client && npm run dev
```

## 📄 Accessing the Bot

Once running, open Telegram and:

1. Search for your bot by ID: `8346680551`
2. Or use direct link pattern: `https://t.me/NGFitBot` (replace with your bot username if set)
3. Press `/start` to begin
4. Click "Open App" button to access the full interface

## 📅 Available Commands

```
/start      - Main menu with app launcher button
/schedule   - Quick access to training schedule
/clients    - Client management panel  
/exercises  - Exercise library
/help       - Help and command list
```

## 🖱️ Database Setup (PostgreSQL)

### Using Docker (Recommended)
```bash
docker run --name ngfit-db \
  -e POSTGRES_DB=ngfit \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -d postgres:15
```

### Update .env
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/ngfit
```

### Run Migrations
```bash
npm run db:migrate
npm run db:push
```

## 🔀 Production Deployment

### Build for Production
```bash
npm run build
```

This creates:
- `dist/` - Compiled server
- `client/dist/` - Built React app

### Deploy Server
```bash
npm run start
```

### Set Production Environment
```bash
export NODE_ENV=production
export DATABASE_URL=postgresql://prod_user:pass@prod_server:5432/ngfit
export MINI_APP_URL=https://your-domain.com
```

### Using PM2 (Process Manager)
```bash
npm install -g pm2
pm2 start npm -- start --name "NGFit"
pm2 save
pm2 startup
```

## 🔈 Telegram Webhook Setup (Production)

For production, use webhook instead of polling:

```bash
curl -X POST "https://api.telegram.org/bot8346680551:AAEAFrTK8yEogbjWMD4KsR8gBlRprTlizZg/setWebhook" \
  -d "url=https://your-domain.com/bot/webhook"
```

Update `server/bot.ts` to use webhook:
```typescript
await bot.telegram.setWebhook({
  url: `https://your-domain.com/bot/webhook`,
  secret_token: process.env.WEBHOOK_SECRET || 'your-secret-key'
});
```

## 📁 Logs & Debugging

### Check Bot Logs
```bash
# Terminal where bot is running
GrepFor: "User started", "Bot error", "✅"
```

### Enable Debug Mode
```bash
DEBUG=true npm run dev
```

### Check Database Connection
```sql
SELECT version();
\dt  -- List all tables
```

## 🗣️ Troubleshooting

### Bot doesn't respond
- [ ] Check token is correct in `server/bot.ts`
- [ ] Ensure bot is running (`npm run dev`)
- [ ] Check internet connection
- [ ] Verify bot hasn't been stopped

### Database connection error
- [ ] Verify PostgreSQL is running
- [ ] Check DATABASE_URL in `.env`
- [ ] Run migrations: `npm run db:push`

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Web app not loading
- [ ] Frontend must be running on `:5173`
- [ ] MINI_APP_URL must be accessible from outside
- [ ] Check CORS settings

## 🌟 Features Ready to Use

✅ Telegram bot integration  
✅ Mini-app web interface  
✅ Training schedule management  
✅ Client database  
✅ Exercise library  
✅ Real-time synchronization  
✅ Dark theme UI  
✅ Responsive design  

## 🔗 Useful Links

- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Telegraf.js Documentation](https://telegraf.js.org/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)

## 📄 Support

For issues or questions:
1. Check the main [README.md](README.md)
2. Review error logs
3. Open an issue on GitHub

---

**NGFit is ready to launch! 🚀**

Your Telegram bot token is configured. Just run `npm install` and `npm run dev` to start!
