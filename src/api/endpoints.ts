export const API_ROUTES = {
  AUTH: {
    LOGIN: '/v1/auth/login',
    LOGOUT: '/v1/auth/logout',
    SIGNUP: '/v1/auth/signup',
    REFRESH: '/v1/auth/refresh',
    RESET_PASSWORD: '/v1/auth/reset-password',
    ME: '/v1/auth/me',
  },
  SYSTEM: {
    METADATA: '/v1/system/metadata',
  },
} as const;

export const API_PARAMS = {
  SECTIONS: 'sections',
} as const;

export const METADATA_SECTIONS = {
  EXCHANGES: 'exchange-subscriptions',
  TRADING_PAIRS: 'trading-pair-subscriptions',
  CURRENCIES: 'currency-subscriptions',
  UI: 'ui-config',
} as const;

export type MetadataSection = typeof METADATA_SECTIONS[keyof typeof METADATA_SECTIONS];

export const APP_INIT_METADATA_SECTIONS: MetadataSection[] = [
  METADATA_SECTIONS.EXCHANGES,
  METADATA_SECTIONS.TRADING_PAIRS,
  METADATA_SECTIONS.CURRENCIES,
  METADATA_SECTIONS.UI,
];
