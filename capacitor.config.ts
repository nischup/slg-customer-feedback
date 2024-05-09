import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.feedback',
  appName: 'Feedback',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
