import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.muthienvuong.app',
  appName: '789club',
  webDir: '.next/standalone/public',
  server: {
    hostname: 'muthienvuong.id.vn',
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: '#000000'
    }
  }
};

export default config;
