import dotenv, { DotenvConfigOutput, DotenvParseOutput } from 'dotenv'

type Config = {
    GOOGLE_PLACES_API_KEY: string,
    PORT: string
}

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GOOGLE_PLACES_API_KEY: string
      }
    }
}

const config:DotenvConfigOutput = dotenv.config();
const parsedConfig:DotenvParseOutput = config.parsed as Config;

Object.assign(process.env, parsedConfig);
