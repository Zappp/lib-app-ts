import dotenv from 'dotenv';
dotenv.config();

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  server: {
    port: Number(process.env.SERVER_PORT)
  },
  database: {
    url: process.env.DB_URL
  }
}
