import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.urbangrow.app',
  appName: 'Urban-Grow',
  webDir: 'dist',
  server: {
    url: 'https://urban-grow-khaki.vercel.app',
    cleartext: false,
  }
};

export default config;
