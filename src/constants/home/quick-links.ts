import arbitrage1 from "@/assets/images/home/arbitrage_1.jpg"
import arbitrage2 from "@/assets/images/home/arbitrage_2.jpg"
import arbitrage3 from "@/assets/images/home/arbitrage_3.webp"
import arbitrage4 from "@/assets/images/home/arbitrage_4.jpg"

export interface NavSection {
  title: string;
  imageUrl: string;
  path: string;
}

export const QUICK_LINKS: NavSection[] = [
  {
    title: 'What is Traffic Arbitration?',
    imageUrl: arbitrage1,
    path: '/arbitrage-basics'
  },
  {
    title: 'How to Earn with Arbitrage',
    imageUrl: arbitrage2,
    path: '/arbitrage-earnings'
  },
  {
    title: 'Best Crypto for Arbitrage',
    imageUrl: arbitrage3,
    path: '/crypto-selection'
  },
  {
    title: 'Safety & Security Guide',
    imageUrl: arbitrage4,
    path: '/crypto-security'
  },
];