import { Settings, User, History, ShoppingBag} from "lucide-react"

export const navbarLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Catalog',
        path: '/'
    },
    {
        name: 'About',
        path: '/'
    },
    {
        name: 'Insights',
        path: '/'
    },
    {
        name: 'Shop',
        path: '/'
    },
]

export const dropdownMenu = [
    {
        name: 'Cart',
        icon: <ShoppingBag/>,
        path: '/cart'
    },
    {
        name: 'Payment History',
        icon: <History/>,
        path: '/payment-history'
    },
]

export const langugagesArray = [
    {
        name: 'bg',
        language:"Бъглгарски"
    }, 
    {
        name: 'fr',
        language: 'français'
    },
    {
        name: 'gb',
        language: "English"
    }
]


