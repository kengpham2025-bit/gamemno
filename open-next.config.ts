import type { OpenNextConfig } from 'open-next/types';

const config: OpenNextConfig = {
  default: {
    override: {
      generateIncrementalCache: true,
    },
  },
};

export default config;
