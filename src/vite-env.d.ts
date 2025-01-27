/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AIROPS_APP_ID: string;
  readonly VITE_AIROPS_APP_VERSION: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
