import { config } from "dotenv";

// NODE_ENV alapján választja a fájlt, default: development
const envFile = `.env.${process.env.NODE_ENV || "development"}.local`;
config({ path: envFile, debug: true }); // debug segít látni, mi töltődik be

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_ENV,
    ARCJET_KEY,
    QSTASH_TOKEN,
    QSTASH_URL,
    EMAIL_PASSWORD
} = process.env;