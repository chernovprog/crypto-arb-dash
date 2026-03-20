export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Markets', href: '/markets' },
  { label: 'Triangular arbitrage', href: '/triangular-arbitrage' },
];

export const MORE_LINKS: NavLinkItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export const FOOTER_LINKS_ABOUT: NavLinkItem[] = [
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
];

export const FOOTER_LINKS_PRODUCTS: NavLinkItem[] = [
  { label: 'Exchange', href: '/exchange' },
];

export const FOOTER_LINKS_SUPPORT: NavLinkItem[] = [
  { label: '24/7 Chat Support', href: '/support' },
  { label: 'Support Center', href: '/support_center' },
];
