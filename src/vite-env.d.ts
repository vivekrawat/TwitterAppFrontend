/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HUSTLEHIVE_API: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
