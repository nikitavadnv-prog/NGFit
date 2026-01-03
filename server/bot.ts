import { Telegraf, Context } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

// Telegram Bot Token from environment variables
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;

const MINI_APP_URL = process.env.MINI_APP_URL || 'https://ngfit.yourdomain.com';

const bot = new Telegraf(BOT_TOKEN);

// Middleware for logging
bot.use((ctx, next) => {
  const username = ctx.from?.username || ctx.from?.first_name || 'User';
  console.log(`[${new Date().toISOString()}] ${username} - ${ctx.message?.text || 'interaction'}`);
  return next();
});

// Start command
bot.command('start', async (ctx: Context) => {
  const userId = ctx.from?.id;
  const username = ctx.from?.username || ctx.from?.first_name || 'User';
  console.log(`User started: ${username} (${userId})`);
  
  await ctx.reply(
    `Добро пожаловать в NGFit!\n\nЭто приложение для управления тренировками.\n\nНажми кнопку ниже:`,
    {
      reply_markup: {
        inline_keyboard: [
          [{
            text: 'Открыть приложение',
            web_app: { url: `${MINI_APP_URL}?user_id=${userId}` }
          }]
        ]
      }
    }
  );
});

// Help command
bot.command('help', async (ctx: Context) => {
  await ctx.reply(
    `Команды NGFit:\n\n` +
    `/start - Главное меню\n` +
    `/schedule - Расписание\n` +
    `/clients - Клиенты\n` +
    `/exercises - Упражнения\n` +
    `/help - Справка`
  );
});

// Schedule command
bot.command('schedule', async (ctx: Context) => {
  const userId = ctx.from?.id;
  await ctx.reply(`Ваше расписание:`, {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Открыть расписание',
          web_app: { url: `${MINI_APP_URL}?user_id=${userId}&tab=schedule` }
        }]
      ]
    }
  });
});

// Default message handler
bot.on('message', async (ctx: Context) => {
  await ctx.reply(`Используйте /start или /help`);
});

// Error handling
bot.catch((err: any) => {
  console.error('Bot error:', err);
});

// Initialize bot
async function startBot() {
  try {
    await bot.launch();
    console.log('\n✅ NGFit Bot успешно запущен!');
    console.log(`Bot ID: ${BOT_TOKEN.split(':')[0]}`);
    console.log(`Mini App: ${MINI_APP_URL}\n`);
  } catch (error) {
    console.error('Error starting bot:', error);
    process.exit(1);
  }
}

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

if (require.main === module) {
  startBot();
}

export { bot, startBot };
