declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      VARIABLE1: string;
      VARIABLE2: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}