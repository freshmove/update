import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://exchange.freshmove.space/',
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
        label: "Telegram",
        icon: "TelegramIcon",
        href: "https://t.me/freshmoveofficial",
      },
      {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/Freshmove",
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
