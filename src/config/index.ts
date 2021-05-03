import dotenv, { DotenvConfigOutput, DotenvParseOutput } from 'dotenv'

type Config = {
    GOOGLE_PLACES_API_KEY: string
}

const config:DotenvConfigOutput = dotenv.config();
const parsedConfig:DotenvParseOutput = config.parsed as Config;

export default parsedConfig;