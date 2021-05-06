import cors from 'cors'

const corsMiddleware = ({ALLOWED_ORIGINS}:NodeJS.ProcessEnv) => cors({
     origin: (origin, next) => {
      const allowedOrigins = ALLOWED_ORIGINS.split(',')
      
      if(!origin) {
        const noOriginError = new Error("origin is required");
        return next(noOriginError, true);
      }
  
      const isAllowedOrigin = allowedOrigins.includes(origin);
      if(!isAllowedOrigin){ 
        const unAllowedOriginError = new Error("Origin not allowed to access");
        return next(unAllowedOriginError, false)
      }
      
      return next(null, allowedOrigins.includes(origin))
    }
  })

  export default corsMiddleware;
  