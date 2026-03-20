export interface ContentSegment {
  text: string;
  link?: string;
}

export interface CompanyFAQ {
  title: string;
  content: ContentSegment[];
}

export const COMPANY_FAQS: CompanyFAQ[] = [
  {
    title: 'What is the ArbGet arbitrage platform?',
    content: [
      { text: 'ArbGet is an automated cryptocurrency arbitrage dashboard designed to help traders identify and exploit price discrepancies across various digital asset exchanges. ' },
      { text: 'By integrating real-time data from multiple platforms, it allows users to monitor market inefficiencies and execute ' },
      { text: 'trades', link: '/trade' },
      { text: ' that capitalize on the spread between different trading pairs.' },
    ],
  },
  {
    title: 'What products does ArbGet provide?',
    content: [
      { text: 'The platform primarily provides ' },
      { text: 'a multi-exchange monitoring interface', link: '/arbitrage' },
      { text: ' and automated trading bots. These products include customizable data tables for tracking spreads, integrated API connectivity for seamless execution, and analytical tools that calculate potential profit margins after accounting for exchange fees and network latency.' },
    ],
  },
  {
    title: 'How to track cryptocurrency prices?',
    content: [
      { text: 'To track prices effectively, the platform utilizes WebSockets and REST API integrations from major liquidity providers. This ensures that the dashboard reflects live market movements, allowing users to view real-time fluctuations in asset value, volume, and order book depth across a unified view without manually checking individual exchanges.' },
    ],
  },
  {
    title: 'How to earn from crypto on ArbGet?',
    content: [
      { text: 'Users can generate returns by utilizing cross-exchange arbitrage strategies, where an asset is purchased on one platform at a lower price and simultaneously sold on another where the price is higher. Additionally, the platform supports ' },
      { text: 'triangular arbitrage', link: '/arbitrage' },
      { text: ', which involves trading between three different currencies on a single exchange to capture microscopic price gaps within that specific market’s ecosystem.' },
    ],
  },
];
