import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://freshmove.space/',
  },
  
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/',
        icon: 'TradeIcon',
      },
      {
        label: 'Liquidity',
        href: '/pool',
        icon: 'LiquidityIcon',
      },
    ],
  },
//  {
//    label: 'Farms',
//    icon: 'FarmIcon',
//    href: 'https://musing-saha-668c3d.netlify.app/farms',
//  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/freshmove",
        icon: 'GithubIcon', 
      },
      {
        label: "Docs",
        href: "https://docs.farmhub.community/",
        icon: 'BooksIcon',
      },
      // {
      //   label: "Blog",
      //   href: "https://farmhub.medium.com/",
      // },
    ],
  },
 // {
 //   label: 'Audit by Solidity',
 //   icon: 'AuditIcon',
 //   href: 'https://solidity.finance/audits/Farmhub/',
//  },
]

export default config
