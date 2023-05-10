import { accessAnywhere, security, collaboration, anyFile, profile1, profile2, profile3 } from './assets'
export const heroCard = [
    {
        id: 1,
        img: accessAnywhere,
        title: 'Access your files, anywhere',
        desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    },
    {
        id: 2,
        img: security,
        title: 'Security you can trust',
        desc: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    },
    {
        id: 3,
        img: collaboration,
        title: 'Real-time collaboration',
        desc: 'Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.'
    },
    {
        id: 4,
        img: anyFile,
        title: 'Store any type of file',
        desc: 'Whether you\'re sharing holidays, photos, or work documents, Fylo as you covered, allowing for all file types to be securely stored and shared.'
    },
]
export const cardsData = [
    {
        id: 1,
        title: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        profile: {
            image: profile1,
            name: 'Satish Patel',
            occupation: 'Founder & CEO, Huddle'
        }
    },
    {
        id: 2,
        title: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        profile: {
            image: profile2,
            name: 'Bruce McKenzie',
            occupation: 'Founder & CEO, Huddle'
        }
    },
    {
        id: 3,
        title: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        profile: {
            image: profile3,
            name: 'Iva Boyd',
            occupation: 'Founder & CEO, Huddle'
        }
    },
]
export const footerList = ['About Us', 'Jobs', 'Press', 'Blog', 'Contact Us', 'Terms', 'Privacy']
export const socialAddress = [
    {
        id: 1,
        icon: "fa-brands fa-facebook",
        url: window.document.URL
    },
    {
        id: 2,
        icon: "fa-brands fa-instagram",
        url: window.document.URL
    },
    {
        id: 3,
        icon: "fa-brands fa-twitter",
        url: window.document.URL
    },
]