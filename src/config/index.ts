import dotenv, { DotenvConfigOutput, DotenvParseOutput } from 'dotenv'

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GOOGLE_PLACES_API_KEY: string,
        PORT: string,
        ALLOWED_ORIGINS: string
      }
    }
}

const config:DotenvConfigOutput = dotenv.config();
const parsedConfig:NodeJS.ProcessEnv = config.parsed as NodeJS.ProcessEnv;

Object.assign(process.env, parsedConfig);
