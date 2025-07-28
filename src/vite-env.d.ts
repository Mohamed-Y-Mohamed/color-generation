/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GROQ_API_KEY: string;
  readonly VITE_ALLOWED_ORIGINS: string;
  readonly VITE_DEV_MODE?: string;
  readonly VITE_APP_TITLE?: string;
  // Add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
