import { ItemI } from "./interface/interfaces"
export const navList: string[] = ['Home', 'New', 'Popular', 'Trending', 'Categories']
import { gaming, laptops, retro } from './assets/index'
export const asideCard: ItemI[] = [
    {
        id: 1,
        title: 'Hydrogen VS Electric Cars',
        body: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        id: 2,
        title: 'The Downsides of AI Artistry',
        body: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        id: 3,
        title: 'Is VC Funding Drying Up?',
        body: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
]
export const cards: ItemI[] = [
    {
        id: 1,
        img: retro,
        title: 'Reviving Retro PCs',
        body: 'What happens when old PCs are given modern upgrades?'
    },
    {
        id: 2,
        img: laptops,
        title: 'Top 10 Laptops of 2022',
        body: 'Our best picks for various needs and budgets.'
    },
    {
        id: 3,
        img: gaming,
        title: 'The Growth of Gaming',
        body: 'How the pandemic has sparked fresh opportunities.'
    }
]