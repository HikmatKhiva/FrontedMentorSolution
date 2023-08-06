import {
  recognition,
  records,
  customizable,
  facebook,
  instagram,
  pinterest,
  twitter,
} from "../assets";
import { FooterLink, Serivce, Social } from "../types";
export const navLinks: string[] = ["Features", "Pricing", "Resources"];
export const services: Serivce[] = [
  {
    id: 1,
    image: recognition,
    title: "Brand Recognition",
    text: `Boost your brand recognition with each click. Generic links don’t mean
    a thing. Branded links help instil confidence in your content.`,
  },
  {
    id: 2,
    image: records,
    title: "Detailed Records",
    text: `Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions.`,
  },
  {
    id: 3,
    image: customizable,
    title: "Fully Customizable",
    text: `Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement.`,
  },
];

export const featuresLink: FooterLink = {
  title: "Features",
  links: [
    {
      id: 1,
      title: "Link Shortening",
      url: "#",
    },
    {
      id: 2,
      title: "Branded Links",
      url: "#",
    },
    {
      id: 3,
      title: "Analytics",
      url: "#",
    },
  ],
};
export const resourcesLink: FooterLink = {
  title: "Resources",
  links: [
    {
      id: 1,
      title: "Blog",
      url: "#",
    },
    {
      id: 2,
      title: "Developers",
      url: "#",
    },
    {
      id: 3,
      title: "Support",
      url: "#",
    },
  ],
};
export const companyLink: FooterLink = {
  title: "Company",
  links: [
    {
      id: 1,
      title: "About",
      url: "#",
    },
    {
      id: 2,
      title: "Our Team",
      url: "#",
    },
    {
      id: 3,
      title: "Careers",
      url: "#",
    },
    {
      id: 4,
      title: "Contact",
      url: "#",
    },
  ],
};

export const socialLinks: Social[] = [
  {
    id: 1,
    title: "facebook",
    url: "",
    image: facebook,
  },
  {
    id: 2,
    title: "instagram",
    url: "",
    image: instagram,
  },
  {
    id: 3,
    title: "pinterest",
    url: "",
    image: pinterest,
  },
  {
    id: 4,
    title: "twitter",
    url: "",
    image: twitter,
  },
];
