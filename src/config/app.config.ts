export const EnvConfiguration = () => ({
  ENVIRONMENT: process.env.NODE_ENV || 'dev',
  MONGODB: process.env.MONGODB,
  PORT: Number(process.env.PORT) || 3000,
  LIMIT: Number(process.env.LIMIT) || 7,
});
