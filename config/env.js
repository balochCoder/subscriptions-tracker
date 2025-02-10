import {config} from 'dotenv';

// eslint-disable-next-line no-undef
config({path : `.env.${process.env.NODE_ENV || 'development'}.local`});

// eslint-disable-next-line no-undef
export const {PORT, DB_URI, NODE_ENV, JWT_SECRET, JWT_EXPIRES_IN, ARCJET_KEY, QSTASH_TOKEN, QSTASH_URL, SERVER_URL, EMAIL_PASSWORD, EMAIL_ADDRESS} = process.env;