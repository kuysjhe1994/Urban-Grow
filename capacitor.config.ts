import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.urbangrow.app',
  appName: 'Urban-Grow',
  webDir: 'dist',
  server: {
    url: 'https://your-app-domain.example.com',
    cleartext: false,
  }
};

export default config;
