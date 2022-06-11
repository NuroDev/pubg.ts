declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PUBG_API_KEY: string;
    }
  }
}

export {};
