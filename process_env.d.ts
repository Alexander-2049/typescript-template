declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      TSI_LOGIN: string;
      TSI_PASSWORD: string;
  
      DISCORD_APPLICATION_ID: string;
      DISCORD_PUBLIC_KEY: string;
      DISCORD_TOKEN: string;
      DISCORD_PERMISSIONS_INTEGER: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}