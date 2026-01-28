import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "Karev's Blog",
  description:
    'Hi, this is my personal blog/websites where I write about CS, CTFs, and other tech stuff.',
  href: 'https://karevvv.github.io',
  author: 'Karev',
  locale: 'id-ID',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/writeups',
    label: 'writeups',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/karevvv',
    label: 'GitHub',
  },
  {
    href: 'https://discord.com/users/478581065389441059',
    label: 'Discord',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Discord: 'simple-icons:discord',
}
