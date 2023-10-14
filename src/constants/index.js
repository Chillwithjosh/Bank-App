import { bgintrodesktop, bgintromobile,api,budgeting,facebook,hamburger,instagram,close,onboarding,online,youtube,twitter,logo,pinterest } from "../assets/icons";
import { imageconfetti,imagecurrency,imagemockups,imageplane,imagerstaurant, } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#footer", label: "Contact" },
    { href: "#LatestArticles", label: "Blog" },
    { href: "#", label: "Careers" },
];

export const Services = [
    {
        imgURL: online,
        label: "Online Banking",
        subtext: "Our mordern web and mobile application allow you to keep track of your finances wherever you are in the world."
    },
    {
        imgURL: budgeting,
        label: "Simple Budgeting",
        subtext: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
    },
    {
        imgURL: onboarding,
        label: "Fast Onboarding",
        subtext: "We don't do branches. Open your account in minutes online and start taking control of your finanaces right away."
    },
    {
        imgURL: api,
        label: "Open API",
        subtext: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
];

export const LatestArticle = [
    {
        imgURL: imagecurrency,
        customerName: ' By Morich Brown',
        heading: 'Receive money in any currency with no fees',
        feedback: "The world is getting smaller and we're becoming more mobile. So why should you be focused to only receive money in a single..."
    },
    {
        imgURL: imagerstaurant,
        customerName: ' By Elton Snow',
        heading: 'Treat yourself without worrying about money',
        feedback: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."   
    },
    {
        imgURL: imageplane,
        customerName: ' By Jon Bell',
        heading: 'Take you EasyBank card wherever you go',
        feedback: "We want you to enjoy your travels. This is why we don't charge any fees on purchase while you're abroad. We'll even show you..."
    },
    {
        imgURL: imageconfetti,
        customerName: ' By James Bond',
        heading: 'Our invite-only Beta accounts are now live!',
        feedback: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
    }
];


export const socialMedia = [
    { src: facebook, alt: "facebook logo", id:'1' },
    { src: twitter, alt: "twitter logo", id:'2' },
    { src: instagram, alt: "instagram logo", id:'3' },
    { src: pinterest, alt: "instagram logo", id:'4' },
    { src: youtube, alt: "youtube logo", id:'5' },
];
