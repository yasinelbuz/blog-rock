//Header
import Logo from './assets/images/BlogRock.svg';
import Search from './assets/images/search.svg';
import Hamburger from './assets/images/hamburger.svg';

//hero
import HeroTeam from './assets/images/Hero_Team.jpg';

//Footer Social Icons
import facebookIcon from './assets/images/facebook.svg';
import twitterIcon from './assets/images/twitter.svg';
import instagramIcon from './assets/images/instagram.svg';

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
        },
        {
            title: "SEO Friendly",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus. ",
            buttonText: "Read Articles",
        },
        {
            title: "Easily Customizable",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
            buttonText: "Read Articles",
            icon: "ImLocation",
        }
    ],
    articles: {
        title: "Latest Articles",
        articleBox: [
            {
                title: "Many desktop publishing packages and web page ",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
                kategori: "Analytics",
                img: HeroTeam,
            },
            {
                title: "Many desktop publishing packages and web page ",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
                kategori: "Analytics",
                img: HeroTeam,
            },
            {
                title: "Many desktop publishing packages and web page ",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
                kategori: "Analytics",
                img: HeroTeam,
            },
            {
                title: "Many desktop publishing packages and web page ",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.",
                kategori: "Analytics",
                img: HeroTeam,
            },
        ]
    },
    aboutUs: {
        title: "Heading Title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula libero nec ipsum bibendum rhoncus. In fermentum non orci nec pellentesque. Donec sollicitudin feugiat ante, vel feugiat dolor porta eu. Pellentesque elementum ligula metus, id sagittis ligula sagittis nec.",
        kategori: "About Us",
        img: HeroTeam,
    },
    newsletter: {
        title: "Newsletter",
        text: "Subscribe my Newsletter for new blog posts, tips & new photos. Let\'s stay updated!",
        kategori: "About Us",
    },
    footer: {
        logo: Logo,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas quis eros sed risus sollicitudin fringilla dictum in metus.Sed ultrices mauris a facilisis varius.",
        downText: "Blog Rock © 2020 All Right Reserved",
        categories: [
            {
                title: "About me",
                categori: ["My Team", "History", "My Products", "Blogging"],
            }, {
                title: "Resources",
                categori: ["Webinars", "Courses", "Books", "Marketing"],
            }, {
                title: "Contact",
                categori: ["Privacy Policy", "Term of use"],
            },
        ],
        icons: {
            facebookIcon: facebookIcon,
            instagramIcon: instagramIcon,
            twitterIcon: twitterIcon,
        }

    }
}