//Header
import Logo from './assets/images/BlogRock.svg';
import Search from './assets/images/search.svg';
import Hamburger from './assets/images/hamburger.svg';

//hero
import HeroTeam from './assets/images/Hero_Team.jpg';

//icons
import { BsFullscreen } from 'react-icons/Bs';
import { BsSearch } from 'react-icons/Bs';
import { ImLocation } from 'react-icons/Im';

export const Content = {
    header: {
        logo: Logo,
        menu: ["Home", "About Us", "Features", "Cart", "Contact Us"],
        search: Search,
        hamburger: Hamburger,
    },
    hero: {
        title: "Many desktop publishing packages and web page",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
        kategori: "Analytics",
        HeroTeamIMG: HeroTeam,
        HeroTeamIMG: HeroTeam,
    },
    properties: [
        {
            title: "Fully Responsive",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus. ",
            buttonText: "Read Articles",
            icon: BsFullscreen,
        },
        {
            title: "SEO Friendly",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus. ",
            buttonText: "Read Articles",
            icon: BsSearch,
        },
        {
            title: "Easily Customizable",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
            buttonText: "Read Articles",
            icon: ImLocation,
        }
    ]
}