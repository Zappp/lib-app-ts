import dotenv from 'dotenv';
dotenv.config();

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  port: Number(process.env.SERVER_PORT),
  database: {
    url: process.env.DB_URL
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // port: Number(process.env.DB_PORT)
  }
}
