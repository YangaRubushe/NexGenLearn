import 'dotenv/config';

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL, // Use the correct variable
  }
};
